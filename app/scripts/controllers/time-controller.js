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
            ['$scope', '$interval', '$cookies', 'levelConverter', '$controller', '$log',
            function ($scope, $interval, $cookies, levelConverter, $controller, $log) {

                $log.log('TimeController');
                
                $scope.title = 'Time';
                $scope.unit = 's';
                $scope.factor = 10;
                $scope.propName = 'timeElapsed';

                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter});

                $interval(function () {
                    $scope.increment(1);
                }, 1000);

            }]);





