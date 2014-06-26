"use strict";

angular.module('app')

    .service('fibonacciBiased', function () {

        function fromIndex(n) {
            if (n <= 3) {
                return n;
            }

            var u = 2, v = 3, w, i;
            for (i = 4; i <= n; i += 1) {
                w = u + v;
                u = v;
                v = w;
            }
            return v;
        }
        
        function toIndex(v) {
            if (v <= 3) {
                return v;
            }
            var i = 4;
            while (fromIndex(i) <= v) {
                i += 1;
            }
            return i - 1;
        }

        return {
            fromIndex: fromIndex,
            toIndex: toIndex
        };
    });