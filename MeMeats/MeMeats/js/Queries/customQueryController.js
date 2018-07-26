
sqlQueryModule.controller("customQueryController", function ($scope, $http, bootstrappedData) {
    $scope.list = bootstrappedData.list;
    $scope.tableDisplay = $scope.list[0];
    $scope.filteredList = $scope.list;
    $scope.searchButtonText = "Submit";

    $scope.executeQuery = function (input) {
        $scope.searchButtonText = "Loading Results";
        var url = '/Custom/ExecuteQuery'
        var promise = $scope.execute(url, input);
        promise.then(function (myList) {
            $scope.doFiltering(myList);
            $scope.searchButtonText = "Submit";
        });
    }

    $scope.execute = function (url, data) {
        var arr = $http.post(url, data).then(function (result) {
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

    $scope.convertArrayOfObjectsToCSV = function (args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;
        data = args.data || null;

        if (data == null || !data.length) {
            return null;
        }
        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';
        keys = Object.keys(data[0]);
        keys.splice(-1, 1);
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function (item) {
            ctr = 0;
            keys.forEach(function (key) {
                if (ctr > 0) {
                    result += columnDelimiter;
                }
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    }

    $scope.downloadFile = function () {
        var data, filename, link;
        var csv = $scope.convertArrayOfObjectsToCSV({
            data: $scope.list
        });
        if (csv == null) return;
        filename = "QueryResultTable.csv" || 'export.csv';
        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
});