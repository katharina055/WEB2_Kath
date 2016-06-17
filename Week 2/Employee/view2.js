'use strict';
var Employee = angular.module('myAppEmployee', []);

Employee.controller("myController", function($scope){
	$scope.employees=[
	{
		firstName: 'Andrea',
		lastName: 'Sucks',
		nationality: 'Bulgarian'
	},
	{
		firstName: 'Katharina',
		lastName: 'Aryani',
		nationality: 'Indonesia'
	},
	{
		firstName: 'Maximilian',
		lastName: 'Dobre',
		nationality: 'Romanian'
	}
	]
	
});

