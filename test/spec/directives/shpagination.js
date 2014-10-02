'use strict';

describe('Directive: shPagination', function () {

    // load the directive's module
    beforeEach(module('ngBrxApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    xit('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<sh-pagination></sh-pagination>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('this is the shPagination directive');
    }));
});
