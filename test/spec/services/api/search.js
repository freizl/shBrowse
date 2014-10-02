'use strict';

describe('Service: search', function () {

    // load the service's module
    beforeEach(module('ngBrxApp'));

    // instantiate service
    var search;
    beforeEach(inject(function (_searchApi_) {
        search = _searchApi_;
    }));

    it('should do something', function () {
        expect(!!search).toBe(true);
    });

    it('should be able to search events', function () {
        expect(search.events).toBeDefined();
    });

});
