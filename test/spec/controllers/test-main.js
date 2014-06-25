'use strict';

describe('Controller: TimeController', function () {

    // load the controller's module
    beforeEach(module('app'));

    var TimeController, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TimeController = $controller('TimeController', {
            $scope: scope
        });
    }));

    it('should attach a defined elapsed to the scope.', function () {
        //expect(scope.awesomeThings.length).toBe(3);
        expect(scope.elapsed).toBeDefined();
    });
});
