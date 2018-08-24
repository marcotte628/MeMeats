
sqlQueryModule.controller("farmerController", function ($scope, $http, $location, $window, bootstrappedData) {
    $scope.list = bootstrappedData.list;
    $scope.tableDisplay = $scope.list[0];
    $scope.filteredList = $scope.list;

    $scope.init = function () {
        var params = window.location.href.split('?')[1].split('=');
        var uid = params[1];
        var url = '/Farmer/GetAllUserData?uid=' + uid;
        var promise = $scope.execute(url);
        promise.then(function (result) {
            console.log("success");
            console.log(result);
            if (result.length === 0) {
                alert("Server Error. Could not load profile information.");
            } else {
                console.log(result.data);
            }
            $scope.showCuts('All');
        });
    }

    $scope.executeQuery = function (url) {
        var arr = $http.get(url).then(function (result) {
            $scope.tableDisplay = result.data[0];
            $scope.list = result.data;
            return result.data;
        });
        return arr;
    }

    $scope.doFiltering = function (myList) {
        $scope.filteredList = [];
        $scope.currentPage = 1;
        $scope.numPerPage = 10;
        $scope.maxSize = 5;
        $scope.tableSize = $scope.list.length;

        $scope.$watch("currentPage + numPerPage", function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            var end = begin + $scope.numPerPage;
            $scope.filteredList = $scope.list.slice(begin, end);
        });
    }

    $scope.execute = function (url) {
        var arr = $http.get(url).then(function (result) {
            return result.data;
        });
        return arr;
    }

    $scope.showCuts = function (type) {
        var uid = window.location.href.split('?')[1].split('=')[1];
        if (type === 'All') {
            var url = '/Farmer/GetAllForSaleItemsForUserID?uid=' + uid;
        } else {
            var url = '/Farmer/GetForSaleItemsByCutAndID?type=' + type + '&uid=' + uid;
        }
        var promise = $scope.executeQuery(url);
        promise.then(function (myList) {
            console.log("list = " + myList);
            $scope.doFiltering(myList);
        });
    }

    $scope.search = function () {
        console.log('search');
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