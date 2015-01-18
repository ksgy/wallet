'use strict';

angular.module('walletApp')
	.service('Transactions', function Transactions() {

		var Transactions = {};
		var wallet = angular.fromJson(localStorage.getItem("wallet")) || [];
		var total;

		var updateTotal = function() {
			total = 0;
			localStorage.setItem("wallet", angular.toJson(wallet));
			for (var i = wallet.length - 1; i >= 0; i--) {
				if(wallet[i].action == 'add') {
					total += parseInt(wallet[i].amount);
				} else {
					total -= parseInt(wallet[i].amount);
				}
			};
		};

		updateTotal();

		Transactions.add = function(amount) {
			wallet.push({
				amount: amount,
				date: new Date(),
				action: 'add'
			});
			updateTotal();
		};

		Transactions.remove = function(amount) {
			wallet.push({
				amount: amount,
				date: new Date(),
				action: 'remove'
			});
			updateTotal();
		};

		Transactions.reset = function() {
			wallet = [];
			total = 0;
			localStorage.setItem("wallet", angular.toJson(wallet));
		};

		Transactions.getRecent = function() {
			return wallet;
		};

		Transactions.getTotal = function() {
			return total;
		};

		return Transactions
	});
