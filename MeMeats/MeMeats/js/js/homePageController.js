

sqlQueryModule.controller("homePageController", function ($scope, $http, bootstrappedData) {
    $scope.list = bootstrappedData.list;
    $scope.tableDisplay = $scope.list[0];
    $scope.filteredList = $scope.list;

    $scope.showSpecificCut = function (type) {
        console.log("type = " + type);
        $scope.searchButtonText = "Loading Results";
        var url = '/Home/showSpecificCut?type=' + type;
        var promise = $scope.executeQuery(url);
        promise.then(function (myList) {
            console.log("list = " + myList);
            $scope.doFiltering(myList);
            alert("success! " + type);
        });
    }

    $scope.executeQuery = function (url) {
        var arr = $http.get(url).then(function (result) {
            console.log("result = " + result);
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

});