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
	];
	
	$scope.addEmp = function(firstName, lastName, nationality){
		var emp = {};
		emp.firstName = firstName;
		emp.lastName = lastName;
		emp.nationality = nationality;
		$scope.employees.push(emp);
		
	};
	
	$scope.updateEmp = function(firstName, lastName, nationality, index){
		$scope.employees.splice(index,1);
		
		var emp = {};
		emp.firstName = firstName;
		emp.lastName = lastName;
		emp.nationality = nationality;
		$scope.employees.push(emp);
	};
	
	$scope.removeEmp = function(index){
		$scope.employees.splice(index,1);
	};
	
});



