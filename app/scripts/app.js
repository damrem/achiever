'use strict';

/**
* @ngdoc overview
* @name achieverApp
* @description
* # achieverApp
*
* Main module of the application.
*/

angular

    .module('app', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'/*,
                controller: 'TimeController'*/
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .when('/subviews', {
                templateUrl: 'subviews'
            })
            .otherwise({
                redirectTo: '/'
            });
    });