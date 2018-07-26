
sqlQueryModule.controller("logProcessorController", function ($scope, $http) {
    $scope.searchButtonText = "Submit";

    $scope.executeProcessor = function (logs) {
        var input = logs;
        document.getElementById("successAlert").style.display = "none";
        $scope.searchButtonText = "Executing Processor";
        var url = '/Processor/ExecuteProcessor'
        var promise = $scope.execute(url, input);
        promise.then(function (data) {
            $scope.successMsg = data;
            document.getElementById("successAlert").style.display = "block";
            $scope.searchButtonText = "Submit";
        });
    }

    $scope.execute = function (url, data) {
        var arr = $http.post(url, data).then(function (result) {
            return result.data;
        });
        return arr;
    }
});