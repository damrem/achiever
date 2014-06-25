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

        .controller('TimeController', ['$scope', '$interval', '$cookies', 'fibonacci', function ($scope, $interval, $cookies, fibonacci) {
            
            $scope.debug = "";
            
            if ($cookies.time_elapsed === undefined) {
                $cookies.time_elapsed = 0;
            }
            if ($cookies.time_level === undefined) {
                $cookies.time_level = 0;
            }
            
            $scope.elapsed = parseInt($cookies.time_elapsed, 10);
            
            var level = fibonacci.toIndex($scope.elapsed);
            $scope.debug += "level= " + level;
            
            $scope.current = $scope.elapsed;
            $scope.total = fibonacci.fromIndex($scope.level);
            
            $interval(function () {
                
                $scope.elapsed += 1;
                $cookies.time_elapsed = $scope.elapsed;
                
                $scope.current = $scope.elapsed;
                
                if ($scope.elapsed > fibonacci.fromIndex($scope.level)) {
                    $scope.current -= fibonacci.fromIndex($scope.level);
                    
                    $scope.level += 1;
                    $scope.total = fibonacci.fromIndex($scope.level);
                }
                
                
            }, 1000);
            
        }]);
		
		
        
    
    
}());