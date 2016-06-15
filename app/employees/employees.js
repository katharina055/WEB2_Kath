'use strict';

var app = angular.module('myApp.employees', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/employees', {
    templateUrl: 'employees/employees.html',
    controller: 'View2Ctrl',
    controllerAs:"View2"
  });
}])


app.factory('EmployeeService', function()
{
	var employees = [];
	var departments = [];
	var objects = [{department:'accounting', name:'John', task:"make potato soop", date:"asap"},
	{department:'management', name:'Petra', task:"acting with Asparuh",date:"next season"},
	{department:'finance', name:'Asparuh', task:"kissing Petra",date:"whenever"}];

return {
	deleteEmployee: function(employee)
	{
		for(var i = 0; i < objects.length; i++)
		{
			var obj = objects[i];
			var index = objects.indexOf(obj);
			if(obj.name == employee.name)
			{
				if(index > -1)
				{
					if(obj.department == "")
					{
				objects.splice(index,1);
					}
					else
					{
						obj.name = "";
					}
				}
			}
		}
	},
	addEmployee: function(myObj)
	{
		objects.push(myObj);
	},
	getallEmployee: function()
	{
		return objects.name;
	},
	getallDepartments : function()
	{
		return objects.department;
	},
	getallObjects : function()
	{
		return objects;
	},
	updateEmployee: function(employee,newname) {
 		for(var i = 0; i < objects.length; i++)
		{
			var obj = objects[i];
			var index = objects.indexOf(obj);
			if(obj.name == employee)
			{
				if(index > -1)
				{
				obj.name = newname;
				}
			}
		}
	}
} 
})



app.controller('View2Ctrl', ['$scope','EmployeeService', 'DepartmentService', function($scope, EmployeeService, DepartmentService) {
	
	$scope.employees = EmployeeService.getallEmployee();
	$scope.departments = DepartmentService.getallDepartments();
	$scope.objects = EmployeeService.getallObjects();
	

	$scope.addEmployee = function(employee,el) {
		var e = document.getElementById(el);
		var myObj = {};
		myObj.department = e.options[e.selectedIndex].text;
		myObj.name = employee;
		EmployeeService.addEmployee(myObj);
	}
	$scope.deleteEmployee = function(employee) {
		EmployeeService.deleteEmployee(employee);
	}

	$scope.selectEmployee = function(employee) {
		$scope.employeeSelected = true;
		$scope.objects.name = employee;
		$scope.updateEmployeeName = employee;
	}

	$scope.updateEmployee = function(employee) {
		console.log($scope.objects.name);
		console.log($scope.updateEmployeeName);
		EmployeeService.updateEmployee($scope.objects.name,$scope.updateEmployeeName)
	}
}]);
