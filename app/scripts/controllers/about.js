'use strict';

/**
 * @ngdoc function
 * @name achieverApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the achieverApp
 */
angular.module('achieverApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
