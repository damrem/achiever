'use strict';
    
angular.module('app')

    .factory('levelConverter', ['fibonacciBiased', function (fibonacciBiased) {

        function getValueFromLevel(level, factor) {
            return fibonacciBiased.fromIndex(level - 1) * factor;
        }

        function getLevelFromValue(value, factor) {
            return fibonacciBiased.toIndex(Math.floor(value / factor)) + 1;
        }

        return {
            getValueFromLevel: getValueFromLevel,
            getLevelFromValue: getLevelFromValue
        };
    }]);