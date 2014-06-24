'use strict';

/**
 * @ngdoc function
 * @name achieverApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the achieverApp
 */
angular.module('achieverApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
