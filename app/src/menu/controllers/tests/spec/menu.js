'use strict';

describe('Controller: MenuMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('walletApp'));

  var MenuMenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuMenuCtrl = $controller('MenuMenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
