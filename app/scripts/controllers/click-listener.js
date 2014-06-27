'use strict';


/**
 * @ngdoc function
 * @name app.controller:TimeController
 * @description
 * # TimeController
 * Controller of the app
 */



angular.module('app')

    .controller('ClickListener',
            ['$scope',
            function ($scope) {

                $scope.onClick = function () {
                    $scope.$broadcast('clicked');
                }
            }]);
