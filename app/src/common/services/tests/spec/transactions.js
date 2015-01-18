'use strict';

describe('Service: transactions', function () {

	// load the service's module
	beforeEach(module('walletApp'));

	// instantiate service
	var transactions;
	beforeEach(inject(function (_transactions_) {
		transactions = _transactions_;
	}));

	it('should add a new "add" transaction', function () {
		transactions.add(10);
		expect(transactions.getTotal()).toBe(10);
	});

	it('should add a new "remove" transaction', function () {
		transactions.add(5);
		expect(transactions.getTotal()).toBe(5);
	});

	it('should reset the wallet', function () {
		transactions.reset();
		expect(transactions.getTotal()).toBe(0);
	});

});
