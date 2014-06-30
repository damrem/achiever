'use strict';


/**
 * @ngdoc function
 * @name app.controller:TimeController
 * @description
 * # TimeController
 * Controller of the app
 */



angular.module('app')

    .controller('SuperController',
            ['$scope', '$cookies', 'levelConverter', 'factor', 'propName',
            function ($scope, $cookies, levelConverter, factor, propName) {

                //

                $scope.debug = '';

                var 
                    factor, 
                    propName;

                function getCurrentLevel() {
                    return levelConverter.getLevelFromValue($scope.total, factor);
                }

                function getNextLevel() {
                    return getCurrentLevel() + 1;
                }

                $scope.updateLevel = function () {
                    $scope.level = getCurrentLevel();
                }

                $scope.updateTotal = function () {
                    $scope.totalInLevel = 
                        levelConverter.getValueFromLevel(getNextLevel(), factor) - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }

                $scope.updateCookie = function () {
                    $cookies[propName] = $scope.total;
                }

                function setup() {

                    $scope.debug = "";

                    //  no cookie yet, we set one up
                    if ($cookies[propName] === undefined) {
                        $cookies[propName] = 0;
                    }

                    //  we retrieve the total time from the cookie
                    $scope.total = parseInt($cookies[propName], 10);
                    $scope.updateLevel();
                    $scope.updateTotal();
                    $scope.currentInLevel = $scope.total - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }

                $scope.increment = function () {

                    $scope.total += 1;
                    
                    $scope.updateCookie();
                    
                    $scope.currentInLevel += 1;
                    
                    if ($scope.currentInLevel > $scope.totalInLevel) {
                        $scope.currentInLevel = 1;
                        $scope.updateLevel();
                        $scope.updateTotal();
                    }
                }
                
                

                setup();
            }]);
