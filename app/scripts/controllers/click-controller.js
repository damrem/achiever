'use strict';


/**
 * @ngdoc function
 * @name app.controller:TimeController
 * @description
 * # TimeController
 * Controller of the app
 */



angular.module('app')

    .controller('ClickController',
            ['$scope', '$interval', '$cookies', 'fibonacci', 'levelConverter',
            function ($scope, $interval, $cookies, fibonacci, levelConverter) {

                $scope.debug = '';

                var factor = 2;

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

                    for(var prop in $scope) {
                        $scope.debug += prop + ":" + $scope[prop] + "\n";
                    }

                    //  no cookie yet, we set one up
                    if ($cookies.nbClicks === undefined) {
                        $cookies.nbClicks = 0;
                    }

                    //  we retrieve the total time from the cookie
                    $scope.total = parseInt($cookies.nbClicks, 10);
                    updateLevel();
                    updateTotal();
                    $scope.currentInLevel = $scope.total - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }

                $scope.$on('clicked', function () {
                    $scope.debug += "click";
                    
                    $scope.total += 1;
                    $cookies.nbClicks = $scope.total;
                    $scope.currentInLevel += 1;

                    if ($scope.currentInLevel > $scope.totalInLevel) {
                        $scope.currentInLevel = 1;
                        updateLevel();
                        updateTotal();
                    }
                });

                setup();
            }]);
