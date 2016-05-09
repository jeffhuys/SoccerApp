var app = angular.module('DemoApp');

app.controller('MainController', function($scope) {
    var savedResults = JSON.parse(localStorage.getItem('results'));

    if(savedResults) {
        $scope.results = savedResults;
    } else {
        $scope.results = [];
    }

    $scope.addResult = function(team1, team2, score1, score2) {
        $scope.results.push({
            team1: team1,
            team2: team2,
            score1: score1,
            score2: score2
        });

        // Save to localStorage
        localStorage.setItem('results', JSON.stringify($scope.results));
    }
});