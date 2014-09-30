'use strict';

describe('Service: constantService', function () {

  // load the service's module
  beforeEach(module('ngBrxApp'));

  // instantiate service
  var constantService;
  beforeEach(inject(function (_constantService_) {
    constantService = _constantService_;
  }));

  it('should do something', function () {
    expect(!!constantService).toBe(true);
  });

});
