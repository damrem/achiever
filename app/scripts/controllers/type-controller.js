'use strict';


/**
 * @ngdoc function
 * @name app.controller:ClickController
 * @description
 * # ClickController
 * Controller of the app
 */



angular.module('app')

    .controller('TypeController',
            ['$scope', '$cookies', 'levelConverter', '$controller', '$log',
            function ($scope, $cookies, levelConverter, $controller, $log) {
                
                $log.log('TypeController');
                
                $scope.title = 'Type';
                $scope.unit = 'keys';
                $scope.factor = 5;
                $scope.propName = 'nbTypes';
                $scope.icon = 'images/type.gif';

                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter});
                
                $scope.$on('typed', function () {
                    $scope.increment(1);
                });
            }]);
