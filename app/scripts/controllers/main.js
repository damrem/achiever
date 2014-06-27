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
            ['$scope', '$interval', '$cookies', 'fibonacci', 'timeLevelConverter',
            function ($scope, $interval, $cookies, fibonacci, timeLevelConverter) {

                $scope.debug = '';

                function getCurrentLevel() {
                    return timeLevelConverter.getLevelFromTime($scope.elapsed);
                }

                function getNextLevel() {
                    return getCurrentLevel() + 1;
                }

                function updateLevel() {
                    $scope.level = getCurrentLevel();
                }

                function updateTotal() {
                    $scope.totalTimeInLevel = 
                        timeLevelConverter.getTimeFromLevel(getNextLevel()) - timeLevelConverter.getTimeFromLevel(getCurrentLevel());
                }

                function setup() {
                    //  no cookie yet, we set one up
                    if ($cookies.timeElapsed === undefined) {
                        $cookies.timeElapsed = 0;
                    }

                    //  we retrieve the elapsed time from the cookie
                    $scope.elapsed = parseInt($cookies.timeElapsed, 10);
                    updateLevel();
                    updateTotal();
                    $scope.currentTimeInLevel = $scope.elapsed - timeLevelConverter.getTimeFromLevel(getCurrentLevel());
                }

                function updateTime() {
                    $scope.elapsed += 1;
                    $cookies.timeElapsed = $scope.elapsed;
                    $scope.currentTimeInLevel += 1;

                    if ($scope.currentTimeInLevel > $scope.totalTimeInLevel) {
                        $scope.currentTimeInLevel = 1;
                        updateLevel();
                        updateTotal();
                    }
                }

                setup();

                $interval(function () {

                    updateTime();

                }, 1000);

            }]);





