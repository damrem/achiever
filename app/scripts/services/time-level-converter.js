//TODO unit tests for the 2 functions of this service
(function () {
    
    "use strict";
    
    angular.module('app')
    
        .factory('timeLevelConverter', ['fibonacciBiased', function (fibonacciBiased) {

            function getTimeFromLevel(level) {
                return fibonacciBiased.fromIndex(level) * 10;
            }
            
            function getLevelFromTime(time) {
                return fibonacciBiased.toIndex(Math.floor(time / 10));
            }
                
            return {
                getTimeFromLevel: getTimeFromLevel,
                getLevelFromTime: getLevelFromTime
            };
        }]);
}());