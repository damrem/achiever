"use strict";

describe('fibonacciBiased', function() {
    
    var fibonacciBiased;
    
    beforeEach(module('app'));

    beforeEach(inject(function (_fibonacciBiased_) {
        fibonacciBiased = _fibonacciBiased_;
    }));
    

    it("should retrieve the right value from the Fibonacci sequence for a given index.", function() {
        expect(fibonacciBiased.fromIndex(0)).toBe(0);
        expect(fibonacciBiased.fromIndex(1)).toBe(1);
        expect(fibonacciBiased.fromIndex(2)).toBe(2);
        expect(fibonacciBiased.fromIndex(3)).toBe(3);
        expect(fibonacciBiased.fromIndex(4)).toBe(5);
        expect(fibonacciBiased.fromIndex(5)).toBe(8);
        expect(fibonacciBiased.fromIndex(6)).toBe(13);
        expect(fibonacciBiased.fromIndex(7)).toBe(21);
        expect(fibonacciBiased.fromIndex(8)).toBe(34);
        expect(fibonacciBiased.fromIndex(9)).toBe(55);
    });
    
    it("should retrieve the right index matching a given value in the Fibonacci sequence.", function() {
        expect(fibonacciBiased.toIndex(0)).toBe(0);
        expect(fibonacciBiased.toIndex(1)).toBe(1);
        expect(fibonacciBiased.toIndex(2)).toBe(2);
        expect(fibonacciBiased.toIndex(3)).toBe(3);
        expect(fibonacciBiased.toIndex(4)).toBe(3);
        expect(fibonacciBiased.toIndex(5)).toBe(4);
        expect(fibonacciBiased.toIndex(6)).toBe(4);
        expect(fibonacciBiased.toIndex(7)).toBe(4);
        expect(fibonacciBiased.toIndex(8)).toBe(5);
        expect(fibonacciBiased.toIndex(9)).toBe(5);
        expect(fibonacciBiased.toIndex(10)).toBe(5);
        expect(fibonacciBiased.toIndex(11)).toBe(5);
        expect(fibonacciBiased.toIndex(12)).toBe(5);
        expect(fibonacciBiased.toIndex(13)).toBe(6);
        expect(fibonacciBiased.toIndex(14)).toBe(6);
        expect(fibonacciBiased.toIndex(15)).toBe(6);
        expect(fibonacciBiased.toIndex(16)).toBe(6);
        expect(fibonacciBiased.toIndex(17)).toBe(6);
        expect(fibonacciBiased.toIndex(18)).toBe(6);
        expect(fibonacciBiased.toIndex(19)).toBe(6);
        expect(fibonacciBiased.toIndex(20)).toBe(6);
        expect(fibonacciBiased.toIndex(21)).toBe(7);
        expect(fibonacciBiased.toIndex(22)).toBe(7);
    });
});
