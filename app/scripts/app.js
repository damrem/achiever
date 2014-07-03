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
        'ngTouch',
        'angular-gestures'
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
            .otherwise({
                redirectTo: '/'
            });
    })

    .config(function($logProvider){
    $logProvider.debugEnabled(true);
})
    ;