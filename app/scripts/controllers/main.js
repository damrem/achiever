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
            
            //  no cookie yet, we set one up
            if ($cookies.time_elapsed === undefined) {
                $cookies.time_elapsed = 0;
            }
            
            //  we retrieve the elapsed time from the cookie
            $scope.elapsed = parseInt($cookies.time_elapsed, 10);
            
            //  we calculate the level reached for the time
            $scope.level = fibonacci.toIndex($scope.elapsed);
            
            $scope.current = $scope.elapsed;
            $scope.total = fibonacci.fromIndex($scope.level + 1);
            
            $interval(function () {
                
                $scope.elapsed += 1;
                $cookies.time_elapsed = $scope.elapsed;
                
                $scope.current = $scope.elapsed;
                
                if ($scope.elapsed > fibonacci.fromIndex($scope.level)) {
                    $scope.current -= fibonacci.fromIndex($scope.level);
                    
                    $scope.level = fibonacci.toIndex($scope.elapsed);
                    $scope.total = fibonacci.fromIndex($scope.level + 1);
                }
                
                
            }, 1000);
            
        }]);
		
		
        
    
    
}());