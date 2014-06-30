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

                var updateLevel = function () {
                    $scope.level = getCurrentLevel();
                }

                var updateTotal = function () {
                    $scope.totalInLevel = 
                        levelConverter.getValueFromLevel(getNextLevel(), factor) - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }

                var update = function () {
                    updateLevel();
                    updateTotal();
                }

                var updateCookie = function () {
                    $cookies[propName] = $scope.total;
                }

                var setup = function () {

                    $scope.debug = '';

                    //  no cookie yet, we set one up
                    if ($cookies[propName] === undefined) {
                        $cookies[propName] = 0;
                    }

                    //  we retrieve the total time from the cookie
                    $scope.total = parseInt($cookies[propName], 10);
                    update();
                    $scope.currentInLevel = $scope.total - levelConverter.getValueFromLevel(getCurrentLevel(), factor);
                }

                $scope.increment = function (value) {

                    $scope.total += value;
                    
                    updateCookie();
                    
                    $scope.currentInLevel += value;
                    
                    if ($scope.currentInLevel > $scope.totalInLevel) {
                        $scope.currentInLevel = 1;
                        update();
                    }
                }

                setup();
            }]);
