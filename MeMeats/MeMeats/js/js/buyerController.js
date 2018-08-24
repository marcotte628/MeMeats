
sqlQueryModule.controller("buyerController", function ($scope, $http, $window,  $location) {

    $scope.init = function () {
        var params = window.location.href.split('?')[1].split('=');
        var uid = params[1];
        var url = '/Buyer/GetAllUserData?uid=' + uid;
        var promise = $scope.execute(url);
        promise.then(function (result) {
            console.log("success");
            console.log(result);
            if (result.length === 0) {
                alert("Server Error. Could not load profile information.");
            } else {

                $scope.firstName = result[0].Name;
                $scope.email = result[0].Email;
                $scope.password = result[0].Password;
                $scope.username = result[0].Username;
                $scope.lastName = result[0].Name;
                $scope.confirmEmail = result[0].Email;
                $scope.confirmPassword = result[0].Password;
                $scope.companyName = result[0].Type;
                $scope.phone = result[0].Phone;
                $scope.fax = result[0].Phone;
                $scope.address = result[0].Street;
                $scope.city = result[0].Town;
                $scope.state = result[0].State;
            }
        });
    }

    $scope.execute = function (url) {
        var arr = $http.get(url).then(function (result) {
            return result.data;
        });
        return arr;
    }

    $scope.navigate = function (location) {
        var uid = window.location.href.split('?')[1].split('=')[1];
        if (location === 'buyer') {
            $window.location.href = '/Buyer?uid=' + uid;
        } else if (location === 'farmer') {
            $window.location.href = '/Farmer?uid=' + uid;
        } else if (location === 'home') {
            $window.location.href = '/Home?uid=' + uid;
        }
    }

    $scope.init();

});