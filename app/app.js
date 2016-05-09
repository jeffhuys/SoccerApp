var app = angular.module('DemoApp', ['ngRoute']);

// Config happens here. Only routes for now.
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.view.html',
                controller: 'MainController'
            })
            .when('/team/:slug', {
                templateUrl: 'app/views/team.view.html',
                controller: 'TeamController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);