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
            ['$scope', '$window', '$cookies', '$controller', 'levelConverter', '$log',
            function ($scope, $window, $cookies, $controller, levelConverter, $log) {

                $log.log('ScrollController');

                $scope.title = 'Scroll';
                $scope.unit = 'px';
                $scope.factor = 500;
                $scope.propName = 'scrollYDistance';
                $scope.icon = 'images/scroll.gif';

                var lastScrollY = $window.scrollY;

                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter});
                
                $window.onscroll = function () {
                    
                    $scope.increment(Math.abs($window.scrollY - lastScrollY));
                    lastScrollY = $window.scrollY;
                };
            }]);
