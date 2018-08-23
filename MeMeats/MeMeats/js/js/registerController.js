

sqlQueryModule.controller("registerController", function ($scope, $http, $window) {

    $scope.register = function () {
        console.log('/Register/Register?usr=' + $scope.username + '&em=' + $scope.email + '&pw=' + $scope.password + '&tp=' + $scope.type);
        var url = '/Register/Register?usr=' + $scope.username + '&em=' + $scope.email + '&pw=' + $scope.password + '&tp=' + $scope.type;
        var promise = $scope.execute(url);
        promise.then(function (result) {
            console.log("success");
            console.log(result);
            if (result.length === 0) {
                alert("The Username and/or Email you attempted to use is already associated with an account. Please try again.");
            } else {
                $window.location.href = '/Home?uid=' + result[0].Column1;
            }
        });
    };
    $scope.cancel = function (url) {
        $window.location.href = '/Login';
    }


    $scope.execute = function (url) {
        var arr = $http.get(url).then(function (result) {
            return result.data;
        });
        return arr;
    }
});