

angular.module('app')

    .filter('ddhhmmss', function () {
        
        "use strict";
        
        return function (secs) {
            
            var sn, ss, mn, ms, hn, hs, dn, ds, r = "", debug = "";

            sn = ss = secs % 60;
            if (ss < 10) {
                ss = "0" + ss;
            }
            secs -= ss;

            mn = ms = Math.floor(secs / 60) % 60;
            if (ms < 10) {
                ms = "0" + ms;
            }
            secs -= ms * 60;

            hn = hs = Math.floor(secs / 60 / 60) % 24;
            if (hs < 10) {
                hs = "0" + hs;
            }
            secs -= hs * 60 * 60;

            dn = ds = Math.floor(secs / 60 / 60 / 24);
            //return hs;

            
            r += ss;
            debug += "seconds: " + r + "........";
            
            if (ms !== "00" || hn > 0 || dn > 0) {
                r = ms + ":" + r;
                debug += "minutes: " + r + "........";
            }

            if (hs !== "00" || dn > 0) {
                r = hs + ":" + r;
                debug += "hours: " + r + "........";
            }

            if (dn > 0) {
                r = ds + ":" + r;
                debug += "days: " + r + "........";
            }
            
            if (r.charAt(0) === '0' && r.charAt(1) !== ':') {
                r = r.substring(1, r.length);
                debug += "trim: " + r + "........";
            }
            
            return r;
                
        };
    });