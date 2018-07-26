
sqlQueryModule.controller("storedProcedureController", function ($scope, $http, bootstrappedData) {
    $scope.list = bootstrappedData.list;
    $scope.tableDisplay = $scope.list[0];
    $scope.filteredList = $scope.list;
    $scope.searchButtonText = "Submit";

    $scope.searchByWord = function (stringData) {
        // validate user input
        $scope.searchButtonText = "Loading Results";
        var stringIsClean = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?\ ]/g.test(stringData);

        // if user input valid, make ajax call to HomeController and receive results
        if (stringData !== undefined && stringData !== "" && stringIsClean) {
            $scope.displayNoAlert();
            var url = '/Home/FindEntriesByWord?word=' + stringData
            var promise = $scope.executeQuery(url);
            promise.then(function (myList) {
                $scope.doFiltering(myList);
                $scope.successMsg = "Your query returned " + $scope.list.length + " results."
                $scope.displaySuccessAlert();
                $scope.searchButtonText = "Submit";
            });
        } else {
            $scope.errMsg = "your data has no special characters, punctuation"
            $scope.displayErrorAlert();
            $scope.searchButtonText = "Submit";
        }
    }

    $scope.searchByWordDate = function (stringData, dateData) {
        $scope.searchButtonText = "Loading Results";
        var stringIsClean = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(stringData);
        var dateGood = $scope.checkDate(dateData);

        if (stringData !== undefined && stringData !== "" && stringIsClean && dateGood) {
            $scope.displayNoAlert();
            var url = '/Home/FindEntiresByWordsDate?words=' + stringData + '&date=' + dateData
            var promise = $scope.executeQuery(url);
            promise.then(function (myList) {
                $scope.doFiltering(myList);
                $scope.successMsg = "Your query returned " + $scope.list.length + " results."
                $scope.displaySuccessAlert();
                $scope.searchButtonText = "Submit";
            });
        } else {
            $scope.errMsg = "your message values contain no special characters or punctuation and your date is in proper YYYY-MM-DD format"
            $scope.displayErrorAlert();
            $scope.searchButtonText = "Submit";
        }
    }

    $scope.searchByWordDateSeverity = function (stringData, dateData, severityData) {
        $scope.searchButtonText = "Loading Results";
        var stringIsClean = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(stringData);
        var dateGood = $scope.checkDate(dateData);
        var severityGood = $scope.checkSeverity(severityData);

        if (stringData !== undefined && stringData !== "" && stringIsClean && dateGood && severityGood) {
            $scope.displayNoAlert();
            var url = '/Home/FindEntriesByWordDateSeverity?words=' + stringData + '&date=' + dateData + '&severity=' + severityData
            var promise = $scope.executeQuery(url);
            promise.then(function (myList) {
                $scope.doFiltering(myList);
                $scope.successMsg = "Your query returned " + $scope.list.length + " results."
                $scope.displaySuccessAlert();
                $scope.searchButtonText = "Submit";
            });
        } else {
            $scope.errMsg = "your message values contain no special characters or punctuation, your date is in YYYY-MM-DD format, and you have selected a severity level"
            $scope.displayErrorAlert();
            $scope.searchButtonText = "Submit";
        }
    }

    $scope.searchErrorsByMonth = function (dateData) {
        $scope.searchButtonText = "Loading Results";
        var dateGood =  $scope.checkDate(dateData);;
        if (dateGood) {
            $scope.displayNoAlert();
            var url = '/Home/FindEntriesByMonth?date=' + dateData
            var promise = $scope.executeQuery(url);
            promise.then(function (myList) {
                $scope.doFiltering(myList);
                $scope.successMsg = "Your query returned " + $scope.list.length + " results."
                $scope.displaySuccessAlert();
                $scope.searchButtonText = "Submit";
            });
        } else {
            $scope.errMsg = "your date is in YYYY-MM-DD format."
            $scope.displayErrorAlert();
            $scope.searchButtonText = "Submit";
        }
    }

    $scope.searchByDate = function (dateData) {
        $scope.searchButtonText = "Loading Results";
        var dateGood =  $scope.checkDate(dateData);;
        if (dateGood) {
            $scope.displayNoAlert();
            var url = '/Home/FindEntriesByDate?date=' + dateData
            var promise = $scope.executeQuery(url);
            promise.then(function (myList) {
                $scope.doFiltering(myList);
                $scope.successMsg = "Your query returned " + $scope.list.length + " results."
                $scope.displaySuccessAlert();
                $scope.searchButtonText = "Submit";
            });
        } else {
            $scope.errMsg = "your date is in YYYY-MM-DD format."
            $scope.displayErrorAlert();
            $scope.searchButtonText = "Submit";
        }
    }

    $scope.searchByDateWithWordsByPercentage = function (stringData, dateData) {
        $scope.searchButtonText = "Loading Results";
        var stringIsClean = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(stringData);
        var dateGood = $scope.checkDate(dateData);

        if (stringData !== undefined && stringData !== "" && stringIsClean && dateGood) {
            $scope.displayNoAlert();
            var url = '/Home/FindEntiresByDateWithWordsByPercentage?words=' + stringData + '&date=' + dateData
            var promise = $scope.executeQuery(url);
            promise.then(function (myList) {
                $scope.doFiltering(myList);
                $scope.successMsg = "Your query returned " + $scope.list.length + " results."
                $scope.displaySuccessAlert();
                $scope.searchButtonText = "Submit";
            });
        } else {
            $scope.errMsg = "your message values contain no special characters or punctuation and your date is in proper YYYY-MM-DD format"
            $scope.displayErrorAlert();
            $scope.searchButtonText = "Submit";
        }
    }

    $scope.checkSeverity = function (severityData) {
        if (severityData !== undefined) {
            return true;
        } else {
            return false;
        }
        
    }

    $scope.checkDate = function (dateData) {
        var dateIsClean = !/[~`!#$%\^&*+=\[\]\\';,/{}|\\":<>\?]/g.test(dateData);
        if (dateIsClean) {
            try {
                var dateParts = dateData.split('-');
                var years = parseInt(dateParts[0]);
                var months = parseInt(dateParts[1]);
                var days = parseInt(dateParts[2]);
                dateGood = $scope.checkDate(years, months, days);
            } catch (e) {
                dateGood = false;
            }
        }

        if(years < 0 || years > 9999) {
            return false;
        } else {
            switch (months) {
                case  1: return (days > 0 && days < 32);
                case  2: return (days > 0 && days < 30);
                case  3: return (days > 0 && days < 32);
                case  4: return (days > 0 && days < 31);
                case  5: return (days > 0 && days < 31);
                case  6: return (days > 0 && days < 32);
                case  7: return (days > 0 && days < 32);
                case  8: return (days > 0 && days < 32);
                case  9: return (days > 0 && days < 31);
                case 10: return (days > 0 && days < 32);
                case 11: return (days > 0 && days < 31);
                case 12: return (days > 0 && days < 32);
                default: return false;
            }
            return true;
        }
    }

    $scope.displayNoAlert = function () {
        document.getElementById("warningAlert").style.display = "none";
        document.getElementById("successAlert").style.display = "none";
    }

    $scope.displayErrorAlert = function () {
        document.getElementById("warningAlert").style.display = "block";
        document.getElementById("successAlert").style.display = "none";
    }

    $scope.displaySuccessAlert = function () {
        document.getElementById("warningAlert").style.display = "none";
        document.getElementById("successAlert").style.display = "block";
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

    $scope.convertArrayOfObjectsToCSV = function(args) {
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

    $scope.downloadFile = function() {
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