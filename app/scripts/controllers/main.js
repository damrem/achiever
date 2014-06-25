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
            ['$scope', '$interval', '$cookies', 'fibonacci',
            function ($scope, $interval, $cookies, fibonacci) {

                $scope.debug = "";

                function getCurrentLevel() {
                    return Math.floor(fibonacci.toIndex($scope.elapsed / 10));
                }

                function getNextLevel() {
                    return getCurrentLevel() + 1;
                }

                function getLevelTime(level) {
                    return fibonacci.fromIndex(level) * 10;
                }

                function updateLevel() {
                    $scope.level = getCurrentLevel();
                }

                function updateTotal() {
                    $scope.total = getLevelTime(getNextLevel());
                }

                function setup() {
                    //  no cookie yet, we set one up
                    if ($cookies.time_elapsed === undefined) {
                        $cookies.time_elapsed = 0;
                    }

                    //  we retrieve the elapsed time from the cookie
                    $scope.elapsed = parseInt($cookies.time_elapsed, 10);
                    updateLevel();
                    updateTotal();
                    $scope.current = $scope.elapsed - getLevelTime(getCurrentLevel());
                }

                function updateTime() {
                    $scope.elapsed += 1;
                    $cookies.time_elapsed = $scope.elapsed;
                    $scope.current += 1;

                    if ($scope.current >= $scope.total) {
                        $scope.current = 0;
                        updateTotal();
                    }
                }




                setup();

                $interval(function () {

                    updateTime();
                    updateLevel();

                }, 1000);

            }]);





