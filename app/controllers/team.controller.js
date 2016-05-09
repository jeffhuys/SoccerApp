var app = angular.module('DemoApp');

app.controller('TeamController', function($scope, $routeParams) {
    var savedResults = JSON.parse(localStorage.getItem('results'));

    $scope.teamSlug = $routeParams.slug;
    
    // Loop through all results and only use the results that include teamSlug
    $scope.matchingResults = [];
    for(var i = 0; i < savedResults.length; i++) {
        if(savedResults[i].team1 === $scope.teamSlug || savedResults[i].team2 === $scope.teamSlug) {
            $scope.matchingResults.push(savedResults[i]);
        }
    }

});