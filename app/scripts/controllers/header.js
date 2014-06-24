(function () {
    'use strict';
	
	angular.module('app')
	
		.controller('HeaderController', ['$scope', function ($scope) {
		
			$scope.highlight = function (elt) {
			//alert("highlight("+elt);
			//alert(angular.element("#"+elt));
				angular.element('#home').removeClass('active');
				angular.element('#about').removeClass('active');
				angular.element('#'+elt).addClass('active');
			
		
			var jq = angular.element("#"+elt);
			var jqs = "";
			for(var prop in jq) {
				jqs += prop+":"+jq[prop]+"\n\n";
			}
			$scope.debug = jqs;
			};
			/*var jqs = "";
			jqs += jq.length+"\n";
			for(var i=0; i<jq.length; i++)
			{
				var li = jq[i];
				li.className = "";
				li.classList = "";
				for(var prop in li) {
					jqs += prop+":"+li[prop]+"\n\n";
				}
				jqs+="\n";
			}*/
			//$scope.debug = jqs;
		}]);
	
}());