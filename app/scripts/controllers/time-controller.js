'use strict';


/**
 * @ngdoc function
 * @name app.controller:TimeController
 * @description
 * # TimeController
 * Controller of the app
 */



angular.module('app')

    .controller('TimeController',
            ['$scope', '$interval', '$cookies', 'levelConverter', '$controller',
            function ($scope, $interval, $cookies, levelConverter, $controller) {

                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter, 
                        factor: 10, propName: 'timeElapsed'});

                $interval(function () {

                    $scope.increment(1);

                }, 1000);

            }]);





