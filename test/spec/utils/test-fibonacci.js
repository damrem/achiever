"use strict";

describe('fibonacci', function() {
    
    var fibonacci;
    
    beforeEach(module('app'));

    beforeEach(inject(function (_fibonacci_) {
        fibonacci = _fibonacci_;
    }));
    

    it("should retrieve the right value from the Fibonacci sequence for a given index.", function() {
        expect(fibonacci.fromIndex(0)).toBe(0);
        expect(fibonacci.fromIndex(1)).toBe(1);
        expect(fibonacci.fromIndex(2)).toBe(1);
        expect(fibonacci.fromIndex(3)).toBe(2);
        expect(fibonacci.fromIndex(4)).toBe(3);
        expect(fibonacci.fromIndex(5)).toBe(5);
        expect(fibonacci.fromIndex(6)).toBe(8);
        expect(fibonacci.fromIndex(7)).toBe(13);
        expect(fibonacci.fromIndex(8)).toBe(21);
        expect(fibonacci.fromIndex(9)).toBe(34);
        expect(fibonacci.fromIndex(10)).toBe(55);
    });
    
    it("should retrieve the right index matching a given value in the Fibonacci sequence.", function() {
        expect(fibonacci.toIndex(0)).toBe(0);
        expect(fibonacci.toIndex(1)).toBe(1);
        expect(fibonacci.toIndex(2)).toBe(3);
        expect(fibonacci.toIndex(3)).toBe(4);
        expect(fibonacci.toIndex(4)).toBe(4);
        expect(fibonacci.toIndex(5)).toBe(5);
        expect(fibonacci.toIndex(6)).toBe(5);
        expect(fibonacci.toIndex(7)).toBe(5);
        expect(fibonacci.toIndex(8)).toBe(6);
        expect(fibonacci.toIndex(9)).toBe(6);
        expect(fibonacci.toIndex(10)).toBe(6);
        expect(fibonacci.toIndex(11)).toBe(6);
        expect(fibonacci.toIndex(12)).toBe(6);
        expect(fibonacci.toIndex(13)).toBe(7);
        expect(fibonacci.toIndex(14)).toBe(7);
        expect(fibonacci.toIndex(15)).toBe(7);
        expect(fibonacci.toIndex(16)).toBe(7);
        expect(fibonacci.toIndex(17)).toBe(7);
        expect(fibonacci.toIndex(18)).toBe(7);
        expect(fibonacci.toIndex(19)).toBe(7);
        expect(fibonacci.toIndex(20)).toBe(7);
        expect(fibonacci.toIndex(21)).toBe(8);
        expect(fibonacci.toIndex(22)).toBe(8);
    });
});
