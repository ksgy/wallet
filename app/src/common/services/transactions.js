'use strict';

angular.module('walletApp')
	.service('Transactions', function Transactions() {

		var Transactions = {};

		var updateTotal = function() {
			localStorage.setItem("wallet", angular.toJson(wallet));
			var total = 0;
			for (var i = wallet.length - 1; i >= 0; i--) {
				total += parseInt(wallet[i].amount);
			};
			return total;
		};
		var wallet = localStorage.getItem("wallet", angular.fromJson(wallet)) || 0;
		var total = updateTotal();

		Transactions.add = function(amount) {
			if(amount > 0){
				wallet.push({
					amount: amount,
					date: new Date(),
					action: 'add'
				});
				updateTotal();
			}
		};

		Transactions.remove = function(amount) {
			if(total - amount >= 0) {
				wallet.push({
					amount: amount,
					date: new Date(),
					action: 'remove'
				});
				updateTotal();
			}
		};

		Transactions.reset = function() {
			wallet = [];
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
