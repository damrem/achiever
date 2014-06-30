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
            ['$scope', '$window', '$cookies', 'fibonacci', 'levelConverter',
            function ($scope, $window, $cookies, fibonacci, levelConverter) {

                $scope.debug = '';

                var factor = 500, lastScrollY = $window.scrollY;

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

                    $scope.debug = "";

                    //  no cookie yet, we set one up
                    if ($cookies.scrollYDistance === undefined) {
                        $cookies.scrollYDistance = 0;
                    }

                    //  we retrieve the total time from the cookie
                    $scope.total = parseInt($cookies.scrollYDistance, 10);
                    updateLevel();
                    updateTotal();
                    $scope.currentInLevel = $scope.total - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }
                
                $window.onscroll = function () {
                    
                    $scope.total += Math.abs($window.scrollY - lastScrollY);
                    lastScrollY = scrollY;
                    $cookies.scrollYDistance = $scope.total;
                    $scope.currentInLevel += 1;

                    if ($scope.currentInLevel > $scope.totalInLevel) {
                        $scope.currentInLevel = 1;
                        updateLevel();
                        updateTotal();
                    }
                };

                setup();
            }]);
