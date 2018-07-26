
sqlQueryModule.controller("loginController", function ($scope, $http) {

    $scope.login = function () {
        console.log("UN & PW = " + $scope.username + " " + $scope.password);
        var url = '/Login/Login?usr=' + $scope.username + '&pw=' + $scope.password;
        var promise = $scope.execute(url);
        promise.then(function (result) {
            
        });
    }

    $scope.execute = function (url) {
        var ret = $http.get(url).then(function (result) {
            return result;
        });
        return ret;
    }

});