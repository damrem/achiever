"use strict";

angular.module('app')

    .service('fibonacci', function () {

        var fromIndex = function (n) {
            if (n <= 1) {
                return n;
            }

            var u = 0, v = 1, w, i;
            for (i = 2; i <= n; i += 1) {
                w = u + v;
                u = v;
                v = w;
            }
            return v;
        };

        return {
            fromIndex: fromIndex,
            toIndex: function (v) {
                if (v <= 1) {
                    return v;
                }
                var i = 3;
                while (fromIndex(i) <= v) {
                    i += 1;
                }
                return i - 1;
            }
        };
    });