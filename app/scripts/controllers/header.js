(function () {
    'use strict';
	
	angular.module('app')
	
		.controller('HeaderController', ['$scope', function ($scope) {
		
			$scope.highlight = function (elt) {
				angular.element('#home').removeClass('active');
				angular.element('#about').removeClass('active');
				angular.element('#' + elt).addClass('active');
			
		
                
			};
		}]);
	
}());