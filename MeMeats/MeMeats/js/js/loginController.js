
sqlQueryModule.controller("loginController", function ($scope, $http, $window) {

    $scope.login = function () {
        console.log("UN & PW = " + $scope.username + " " + $scope.password);
        var url = '/Login/Login?usr=' + $scope.username + '&pw=' + $scope.password;
        var promise = $scope.execute(url);
        promise.then(function (result) {
            console.log("success");
            console.log(result);
            if (result.length === 0) {
                alert("The credentials you provided cannot be determined to be authentic."); 
            } else {
                $window.location.href = '/Home?uid=' + result[0].UserID;
            }
        });
    };

    $scope.register = function () {
        console.log("register.........");
        $window.location.href = '/Register';
    };
    
    $scope.execute = function (url) {
        var arr = $http.get(url).then(function (result) {
            return result.data;
        });
        return arr;
    }

});