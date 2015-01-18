'use strict';

describe('Service: transactions', function () {

  // load the service's module
  beforeEach(module('walletApp'));

  // instantiate service
  var transactions;
  beforeEach(inject(function (_transactions_) {
    transactions = _transactions_;
  }));

  it('should do something', function () {
    expect(!!transactions).toBe(true);
  });

});
