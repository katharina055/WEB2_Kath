'use strict';
var Employee = angular.module('myAppEmployee', []);

Employee.controller("EmployeeController",['$scope',function($scope){
        $scope.result="";
	
        $scope.employees=[
	{
		firstName: 'Andrea',
		lastName: 'Kyurchiev',
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
	}];
    
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
        
       
}	]
);

    Employee.factory('empFactory', [function(){
        var obj={}; 
        obj.data="This is the factory";
        return obj; 
    }]);



