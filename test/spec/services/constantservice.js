'use strict';

describe('Service: constantService', function () {

  // load the service's module
  beforeEach(module('ngBrxApp'));

  // instantiate service
  var APP_TOKEN;

  beforeEach(inject(function (_C_APP_TOKEN_) {
    APP_TOKEN = _C_APP_TOKEN_;
  }));

  it('APP_TOKEN shall be defined', function () {
      expect(APP_TOKEN).toBeDefined();
  });

});
