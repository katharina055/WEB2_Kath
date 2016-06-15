'use strict';

var app = angular.module('myApp.departments', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/departments', {
    templateUrl: 'departments/departments.html',
    controller: 'View1Ctrl',
    controllerAs: "View1"
})
 }]);


app.factory('DepartmentService', ['EmployeeService', function(EmployeeService)
{
	var departments = [];
	var objects = EmployeeService.getallObjects();
	console.log(objects);

return {
	deleteDepartment: function(department) {
		for(var i = 0; i < objects.length; i++)
		{
			var obj = objects[i];
			var index = objects.indexOf(obj);
			if(obj.department == department.department)
			{
				if(index > -1)
				{
					if(obj.name == "")
					{
				objects.splice(index,1);
				}
				else 
				{
				obj.department = "";
				}
				}
			}
		}
	},
	addDepartment: function(myObj) {
		objects.push(myObj);
	},
	getallDepartments: function()
	{
		console.log(objects.department);
		return objects.department;
	},
	updateDepartment: function(department,newname) {
		for(var i = 0; i < objects.length; i++)
		{
			var obj = objects[i];
			var index = objects.indexOf(obj);
			if(obj.department == employee)
			{
				if(index > -1)
				{
				obj.department = newname;
				}
			}
		}
	},
} 
}])

app.controller('View1Ctrl',['$scope','EmployeeService','DepartmentService', function($scope,EmployeeService,DepartmentService) {
	$scope.departments = DepartmentService.getallDepartments();
	$scope.objects = EmployeeService.getallObjects();

	$scope.addDepartment = function(department,el) {
		var e = document.getElementById(el);
		var myObj = {};
		myObj.name = e.options[e.selectedIndex].text;
		console.log(department);
		myObj.department = department
		EmployeeService.addEmployee(myObj);
	}

	$scope.deleteDepartment = function(department) {
		DepartmentService.deleteDepartment(department);
	}

	$scope.selectDepartment = function(department) {
		$scope.departmentSelected = true;
		$scope.objects.department = department;
		console.log(department);
		$scope.updateDepartmentName = department;
	}

	$scope.updateDepartment = function(department) {
		DepartmentService.updateDepartment($scope.objects.department,$scope.updateDepartmentName);
	}
}]);