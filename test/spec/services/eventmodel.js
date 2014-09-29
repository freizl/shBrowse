'use strict';

describe('Service: eventModel', function () {

  // load the service's module
  beforeEach(module('ngBrxApp'));

  // instantiate service
  var eventModel;
  beforeEach(inject(function (_eventModel_) {
    eventModel = _eventModel_;
  }));

  it('should do something', function () {
    expect(!!eventModel).toBe(true);
  });

});
