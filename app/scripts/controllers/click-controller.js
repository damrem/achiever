'use strict';


/**
 * @ngdoc function
 * @name app.controller:ClickController
 * @description
 * # ClickController
 * Controller of the app
 */



angular.module('app')

    .controller('ClickController',
            ['$scope', '$cookies', 'levelConverter', '$controller', '$log',
            function ($scope, $cookies, levelConverter, $controller, $log) {
                
                $log.log('ScrollController');
                
                $scope.title = 'Clickin\'';
                $scope.unit = 'clicks';
                $scope.factor = 2;
                $scope.propName = 'nbClicks';
                $scope.icon = '/images/click.gif';

                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter});
                
                $scope.$on('released', function () {
                    $scope.increment(1);
                });
            }]);
