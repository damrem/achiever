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
            ['$scope', '$cookies', 'levelConverter', '$log',
            function ($scope, $cookies, levelConverter, $log) {
                //$log.log('SuperController('+arguments.length);
                //$log.debug('factor='+$scope.factor);

                //$log.info('arguments = '+arguments);
                for(var i=0; i<arguments.length; i++) {
                    $log.debug(i+':'+arguments[i]);
                    /*
                    for(var subprop in arguments[prop]) {
                        $log.debug(subprop+': '+arguments[prop][subprop]);
                    }
                    */
                }
                //$log.debug(arguments[0][0]);
                //$log.log('SuperController,'+ title+','+factor+','+propName+','+unit);

                /*
                var 
                    factor, 
                    propName;
                */ 

                //$scope.title = title;
               //$scope.unit = unit;

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
                    //  no cookie yet, we set one up
                    if ($cookies[$scope.propName] === undefined) {
                        $cookies[$scope.propName] = 0;
                    }

                    //  we retrieve the total time from the cookie
                    $scope.total = parseInt($cookies[$scope.propName], 10);
                    update();
                    $scope.currentInLevel = $scope.total - levelConverter.getValueFromLevel(getCurrentLevel(), $scope.factor);
                    //$log.debug(getCurrentLevel()+', ' + $scope.factor);
                    //$log.debug($scope.currentInLevel+' = '+$scope.total+' - '+levelConverter.getValueFromLevel(getCurrentLevel(), $scope.factor));
                };

                $scope.increment = function (value) {
                    //$log.log('SuperController.increment(' + value);

                    $scope.total += value;
                    
                    updateCookie();
                    
                    //$log.debug('currentInLevel='+$scope.currentInLevel);
                    $scope.currentInLevel += value;
                    
                    if ($scope.currentInLevel > $scope.totalInLevel) {
                        $scope.currentInLevel = 1;
                        update();
                    }
                };  

                setup();
            }]);
