'use strict';

describe('ddhhmmss', function () {
    
    var ddhhmmss;
    
    beforeEach(module('app'));
    
     it('has a ddhhmmss filter', inject(function($filter) {
        expect($filter('ddhhmmss')).not.toBeNull();
    }));

    
    beforeEach(inject(function ($filter) {
        ddhhmmss = $filter('ddhhmmss');
    }));
        
    it('should transform a number of seconds into a formatted time string, eg 12:34:56:78.', function () {
        
        expect(ddhhmmss(0)).toBe('0');
        expect(ddhhmmss(1)).toBe('1');
        
        expect(ddhhmmss(10)).toBe('10');
        expect(ddhhmmss(11)).toBe('11');
        
        expect(ddhhmmss(59)).toBe('59');
        expect(ddhhmmss(60)).toBe('1:00');
        expect(ddhhmmss(61)).toBe('1:01');
        
        expect(ddhhmmss(119)).toBe('1:59');
        expect(ddhhmmss(120)).toBe('2:00');
        expect(ddhhmmss(121)).toBe('2:01');
        
        expect(ddhhmmss(599)).toBe('9:59');
        expect(ddhhmmss(600)).toBe('10:00');
        expect(ddhhmmss(601)).toBe('10:01');
        
        expect(ddhhmmss(3599)).toBe('59:59');
        expect(ddhhmmss(3600)).toBe('1:00:00');
        expect(ddhhmmss(3601)).toBe('1:00:01');
        
        expect(ddhhmmss(7199)).toBe('1:59:59');
        expect(ddhhmmss(7200)).toBe('2:00:00');
        expect(ddhhmmss(7201)).toBe('2:00:01');
        
        expect(ddhhmmss(35999)).toBe('9:59:59');
        expect(ddhhmmss(36000)).toBe('10:00:00');
        expect(ddhhmmss(36001)).toBe('10:00:01');
        
        expect(ddhhmmss(86399)).toBe('23:59:59');
        expect(ddhhmmss(86400)).toBe('1:00:00:00');
        expect(ddhhmmss(86401)).toBe('1:00:00:01');
        
        expect(ddhhmmss(863999)).toBe('9:23:59:59');
        expect(ddhhmmss(864000)).toBe('10:00:00:00');
        expect(ddhhmmss(864001)).toBe('10:00:00:01');
    });
      
    
    
});
