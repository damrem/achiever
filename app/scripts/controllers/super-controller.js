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
            ['$scope', '$cookies', '$timeout', 'levelConverter', '$log',
            function ($scope, $cookies, $timeout, levelConverter, $log) {

                //$log.log('SuperController('+arguments.length);


                function getCurrentLevel() {
                    return levelConverter.getLevelFromValue($scope.total, $scope.factor);
                }

                function getNextLevel() {
                    return getCurrentLevel() + 1;
                }

                var updateLevel = function () {
                    //$log.log('SuperController.updateLevel(');
                    $scope.level = getCurrentLevel();
                };

                var updateTotal = function () {
                    //$log.log('SuperController.updateTotal(');
                    $scope.totalInLevel = 
                        levelConverter.getValueFromLevel(getNextLevel(), $scope.factor) - levelConverter.getValueFromLevel(getCurrentLevel(), $scope.factor);
                };

                var update = function () {
                    //$log.log('SuperController.update(');
                    updateLevel();
                    updateTotal();
                };

                var updateCookie = function () {
                    //$log.log('SuperController.updateCookie(');
                    //$log.info('propName= '+$scope.propName);
                    $cookies[$scope.propName] = $scope.total;
                };

                var setup = function () {
                    //$log.log('SuperController.setup(');

                    $scope.levelClass = 'level-up-leave';

                    //  no cookie yet, we set one up
                    if ($cookies[$scope.propName] === undefined) {
                        $cookies[$scope.propName] = 0;
                    }

                    //  we retrieve the total time from the cookie
                    $scope.total = parseInt($cookies[$scope.propName], 10);
                    update();
                    $scope.currentInLevel = $scope.total - levelConverter.getValueFromLevel(getCurrentLevel(), $scope.factor);
                };

                $scope.increment = function (value) {
                    //$log.log('SuperController.increment(' + value);

                    $scope.total += value;
                    
                    updateCookie();
                    
                    $scope.currentInLevel += value;
                    
                    //  handles the end of level: when the bar is full, next level and back to 0
                    if ($scope.currentInLevel >= $scope.totalInLevel) {
                        $scope.levelClass = 'level-up-enter';
                        $log.info($scope.levelClass);
                        $timeout(function () {
                            $scope.currentInLevel = 0;
                            update();
                            $scope.levelClass = 'level-up-leave';
                            $log.info($scope.levelClass);
                        }, 100);
                    }
                };  

                setup();
            }]);
