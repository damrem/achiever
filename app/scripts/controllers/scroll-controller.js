'use strict';


/**
 * @ngdoc function
 * @name app.controller:TimeController
 * @description
 * # TimeController
 * Controller of the app
 */



angular.module('app')

    .controller('ScrollController',
            ['$scope', '$window', '$cookies', '$controller', 'levelConverter',
            function ($scope, $window, $cookies, $controller, levelConverter) {

                $scope.debug = '';

                var lastScrollY = $window.scrollY;

                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter, 
                        factor: 500, propName: 'scrollYDistance'});
                
                $window.onscroll = function () {
                    
                    $scope.increment(Math.abs($window.scrollY - lastScrollY));
                    lastScrollY = scrollY;
                };
            }]);
