'use strict';

describe('Controller: NavCtrl', function () {

    // load the controller's module
    beforeEach(module('ngBrxApp'));

    var NavCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        NavCtrl = $controller('NavCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of supported languages to the scope', function () {
        expect(scope.langs.length).toBe(3);
    });

    it('should have switchLang function for dynamic change language', function () {
        expect(scope.switchLang).toBeDefined();
    });

});
