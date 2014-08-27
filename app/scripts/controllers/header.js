(function () {
    'use strict';
	
	angular.module('app')
	
		.controller('HeaderController', ['$scope', '$rootScope', '$route', '$location', '$log', 
		function ($scope, $rootScope, $route, $location, $log) {
		
		/*
			$rootScope.$on('$routeChangeStart', function(event, current, previous, rejection){
				$log.log('$routeChangeStart', $scope, $rootScope, $route, $location);
				//switch()
			});
*/
			$rootScope.$on('$routeChangeSuccess', function(event, current){
				//$log.log('$routeChangeSuccess', $scope, $rootScope, $route, $location);
				$log.log('$routeChangeSuccess', current.originalPath);
				var elt;
				switch(current.originalPath){
					case '/':elt='home';break;
					case '/about':elt='about';break;
				}
				angular.element('#home').removeClass('active');
				angular.element('#about').removeClass('active');
				angular.element('#' + elt).addClass('active');
			});

/*
			$scope.highlight = function (elt) {
				angular.element('#home').removeClass('active');
				angular.element('#about').removeClass('active');
				angular.element('#' + elt).addClass('active');
			
		
                
			};
			*/
		}]);
	
}());