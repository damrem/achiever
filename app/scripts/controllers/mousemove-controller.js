'use strict';


/**
 * @ngdoc function
 * @name app.controller:MouseMoveController
 * @description
 * # MouseMoveController
 * Controller of the app
 */



angular.module('app')

    .controller('MouseMoveController',
            ['$scope', '$cookies', 'levelConverter', '$controller', '$log',
            function ($scope, $cookies, levelConverter, $controller, $log) {
                
                $log.log('MouseMoveController');
                
                $scope.title = 'Move';
                $scope.unit = 'px';
                $scope.factor = 500;
                $scope.propName = 'nbMoves';
                $scope.icon = 'images/move.gif';

                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter});
                
                $scope.$on('moved', function () {
                    $scope.increment(1);
                });
            }]);
