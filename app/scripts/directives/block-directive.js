'use strict';

angular.module('app').
directive('myDir', function(){
	return{
		link:function(scope, elem, attrs){
			console.log('myDir.link');
		}
	};
});

angular.module('app').
	directive('achvrBlock', 
		['$parse', '$log', 
			function ($parse, $log) {
				$log.debug('directive achvrBlock');
				return {
					templateUrl: 'views/block.html',
					//restrict: 'E',
					//scope: true,

					//compile: function (elems, attrs) {

					link: function(scope, elems, attrs) {
						$log.debug('attrs='+attrs);
						scope.title = attrs.blockTitle;
						scope.factor = attrs.blockFactor;
						scope.unit=attrs.blockUnit;

					},
				
					
					scope: {
						title:'=blockTitle',
						unit: '=blockUnit',
						propName: '=blockPropname',
						factor: '=blockFactor'
					},
					
					
					prelink: function(scope, props, attrs) {
						$log.debug('link');
						scope.propName=attrs.blockPropname;
						/*
		   				props = $parse(attributes.achvrBlock)();
		  				
		  				for(var prop in props) {
		  					$log.debug(prop + ': '+props[prop]);
		  					scope[prop] = props[prop];
		  				}
		  				*/
		  		
					}
					
				};
			}
		]
	)
;