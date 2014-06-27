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
            ['$scope', '$interval', '$cookies', 'fibonacci', 'levelConverter',
            function ($scope, $interval, $cookies, fibonacci, levelConverter) {

                $scope.debug = '';

                var factor = 10;

                function getCurrentLevel() {
                    return levelConverter.getLevelFromValue($scope.total, factor);
                }

                function getNextLevel() {
                    return getCurrentLevel() + 1;
                }

                function updateLevel() {
                    $scope.level = getCurrentLevel();
                }

                function updateTotal() {
                    $scope.totalInLevel = 
                        levelConverter.getValueFromLevel(getNextLevel(), factor) - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }

                function setup() {
                    //  no cookie yet, we set one up
                    if ($cookies.timeElapsed === undefined) {
                        $cookies.timeElapsed = 0;
                    }

                    //  we retrieve the total time from the cookie
                    $scope.total = parseInt($cookies.timeElapsed, 10);
                    updateLevel();
                    updateTotal();
                    $scope.currentInLevel = $scope.total - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }

                function updateTime() {
                    $scope.total += 1;
                    $cookies.timeElapsed = $scope.total;
                    $scope.currentInLevel += 1;

                    if ($scope.currentInLevel > $scope.totalInLevel) {
                        $scope.currentInLevel = 1;
                        updateLevel();
                        updateTotal();
                    }
                }

                setup();

                $interval(function () {

                    updateTime();

                }, 1000);

            }]);





