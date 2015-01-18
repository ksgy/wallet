'use strict';

describe('Controller: TransactionTransactionCtrl', function () {

  // load the controller's module
  beforeEach(module('walletApp'));

  var TransactionTransactionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionTransactionCtrl = $controller('TransactionTransactionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
