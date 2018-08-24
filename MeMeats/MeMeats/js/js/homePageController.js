

sqlQueryModule.controller("homePageController", function ($scope, $http, $window, bootstrappedData) {
    $scope.list = bootstrappedData.list;
    $scope.tableDisplay = $scope.list[0];
    $scope.filteredList = $scope.list;

    $scope.showSpecificCut = function (type) {
        
        $scope.searchButtonText = "Loading Results";
        var url = '/Home/GetForSaleItemsByCut?type=' + type;
        var promise = $scope.executeQuery(url);
        promise.then(function (myList) {
            console.log("list = " + myList);
            $scope.doFiltering(myList);
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

    $scope.navigate = function (location) {
        var uid = window.location.href.split('?')[1].split('=')[1];
        if (location === 'buyer') {
            $window.location.href = '/Buyer?uid=' + uid;
        } else if (location === 'farmer'){
            $window.location.href = '/Farmer?uid=' + uid;
        } else if (location === 'home') {
            $window.location.href = '/Home?uid=' + uid;
        }
    }

});