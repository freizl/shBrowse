'use strict';

describe('Controller: PerformerCtrl', function () {

  // load the controller's module
  beforeEach(module('ngBrxApp'));

  var PerformerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerformerCtrl = $controller('PerformerCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
  });
});
