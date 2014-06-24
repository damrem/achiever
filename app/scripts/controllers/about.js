(function () {
    'use strict';
    

    /**
     * @ngdoc function
     * @name app.controller:AboutController
     * @description
     * # AboutController
     * Controller of the app
     */
    
    angular.module('app')

        .controller('AboutController', ['$scope', '$interval', function ($scope, $interval) {
            $scope.title = "About";
        }]);
    
}());