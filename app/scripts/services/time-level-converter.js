'use strict';
    
angular.module('app')

    .factory('timeLevelConverter', ['fibonacciBiased', function (fibonacciBiased) {

        function getTimeFromLevel(level) {
            return fibonacciBiased.fromIndex(level - 1) * 10;
        }

        function getLevelFromTime(time) {
            return fibonacciBiased.toIndex(Math.floor(time / 10)) + 1;
        }

        return {
            getTimeFromLevel: getTimeFromLevel,
            getLevelFromTime: getLevelFromTime
        };
    }]);