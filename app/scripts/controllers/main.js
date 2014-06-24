(function () {
    'use strict';
    

    /**
     * @ngdoc function
     * @name app.controller:TimeController
     * @description
     * # TimeController
     * Controller of the app
     */
    
    
        
    angular.module('app')

        .controller('TimeController', ['$scope', '$interval', function ($scope, $interval) {
            
            $scope.time = 0;
            $scope.current = $scope.time;
            
            $scope.total = 100;
            
            $interval(function () {
                $scope.time += 1;
                $scope.current = $scope.time;
            }, 1000);
            
        }]);
        
    
    
}());