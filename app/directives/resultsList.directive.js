var app = angular.module('DemoApp');

app.directive('resultsList', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/views/resultsList.view.html',
        scope: {
            results: '='
        }
    }
});