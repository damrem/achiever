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
            ['$scope', '$cookies', 'levelConverter', '$controller',
            function ($scope, $cookies, levelConverter, $controller) {
                
                $controller('SuperController', 
                    {$scope: $scope, $cookies: $cookies, levelConverter: levelConverter, 
                        factor: 2, propName: 'nbClicks'});
                
                $scope.$on('clicked', function () {
                    
                    $scope.debug += "click";
                    
                    $scope.increment(1);
                });
            }]);
