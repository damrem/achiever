'use strict';


/**
 * @ngdoc function
 * @name app.controller:MouseListener
 * @description
 * # MouseListener
 * This controller's purpose is to catch global (body) mouse events 
 * and to broadcast them towards more specific controllers, such as ClickController.
 */



angular.module('app')

    .controller('MouseListener',
            ['$scope', '$window', '$log',
            function ($scope, $window, $log) {

                $scope.onClick = function () {
                    $scope.$broadcast('clicked');
                };

                $scope.onMouseMove = function () {
                	$log.log('onMouseMove');
                	$scope.$broadcast('mouseMoved');
                };
            }]);
