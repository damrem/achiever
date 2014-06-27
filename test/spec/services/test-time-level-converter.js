'use strict';

describe('time-level-converter', function () {
    
    var timeLevelConverter;
    
    beforeEach(module('app'));

    beforeEach(inject(function (_timeLevelConverter_) {
        timeLevelConverter = _timeLevelConverter_;
    }));
    

    it('should retrieve the time to wait for to reach a level.', function () {
        
        expect(timeLevelConverter.getTimeFromLevel(0)).toBe(0);
        expect(timeLevelConverter.getTimeFromLevel(1)).toBe(0);
        expect(timeLevelConverter.getTimeFromLevel(2)).toBe(10);
        expect(timeLevelConverter.getTimeFromLevel(3)).toBe(20);
        expect(timeLevelConverter.getTimeFromLevel(4)).toBe(30);
        expect(timeLevelConverter.getTimeFromLevel(5)).toBe(50);
        expect(timeLevelConverter.getTimeFromLevel(6)).toBe(80);
        expect(timeLevelConverter.getTimeFromLevel(7)).toBe(130);
        expect(timeLevelConverter.getTimeFromLevel(8)).toBe(210);
        expect(timeLevelConverter.getTimeFromLevel(9)).toBe(340);
        expect(timeLevelConverter.getTimeFromLevel(10)).toBe(550);
        
    });
    
    it('should retrieve the level reached after waiting a specified amount of time.', function () {
        
        expect(timeLevelConverter.getLevelFromTime(0)).toBe(1);
        expect(timeLevelConverter.getLevelFromTime(1)).toBe(1);
        
        expect(timeLevelConverter.getLevelFromTime(9)).toBe(1);
        expect(timeLevelConverter.getLevelFromTime(10)).toBe(2);
        expect(timeLevelConverter.getLevelFromTime(11)).toBe(2);
        
        expect(timeLevelConverter.getLevelFromTime(19)).toBe(2);
        expect(timeLevelConverter.getLevelFromTime(20)).toBe(3);
        expect(timeLevelConverter.getLevelFromTime(21)).toBe(3);
        
        expect(timeLevelConverter.getLevelFromTime(29)).toBe(3);
        expect(timeLevelConverter.getLevelFromTime(30)).toBe(4);
        expect(timeLevelConverter.getLevelFromTime(31)).toBe(4);
        
        expect(timeLevelConverter.getLevelFromTime(39)).toBe(4);
        expect(timeLevelConverter.getLevelFromTime(40)).toBe(4);
        expect(timeLevelConverter.getLevelFromTime(41)).toBe(4);
        
        expect(timeLevelConverter.getLevelFromTime(49)).toBe(4);
        expect(timeLevelConverter.getLevelFromTime(50)).toBe(5);
        expect(timeLevelConverter.getLevelFromTime(51)).toBe(5);
        
        expect(timeLevelConverter.getLevelFromTime(59)).toBe(5);
        expect(timeLevelConverter.getLevelFromTime(60)).toBe(5);
        expect(timeLevelConverter.getLevelFromTime(61)).toBe(5);
        
        expect(timeLevelConverter.getLevelFromTime(69)).toBe(5);
        expect(timeLevelConverter.getLevelFromTime(70)).toBe(5);
        expect(timeLevelConverter.getLevelFromTime(71)).toBe(5);
        
        expect(timeLevelConverter.getLevelFromTime(79)).toBe(5);
        expect(timeLevelConverter.getLevelFromTime(80)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(81)).toBe(6);
        
        expect(timeLevelConverter.getLevelFromTime(89)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(90)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(91)).toBe(6);
        
        expect(timeLevelConverter.getLevelFromTime(99)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(100)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(101)).toBe(6);
        
        expect(timeLevelConverter.getLevelFromTime(109)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(110)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(111)).toBe(6);
        
        expect(timeLevelConverter.getLevelFromTime(119)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(120)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(121)).toBe(6);
        
        expect(timeLevelConverter.getLevelFromTime(129)).toBe(6);
        expect(timeLevelConverter.getLevelFromTime(130)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(131)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(139)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(140)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(141)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(149)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(150)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(151)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(159)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(160)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(161)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(169)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(170)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(171)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(179)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(180)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(181)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(189)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(190)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(191)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(199)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(200)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(201)).toBe(7);
        
        expect(timeLevelConverter.getLevelFromTime(209)).toBe(7);
        expect(timeLevelConverter.getLevelFromTime(210)).toBe(8);
        expect(timeLevelConverter.getLevelFromTime(211)).toBe(8);
        
        expect(timeLevelConverter.getLevelFromTime(219)).toBe(8);
        expect(timeLevelConverter.getLevelFromTime(220)).toBe(8);
        expect(timeLevelConverter.getLevelFromTime(221)).toBe(8);
    });
});
