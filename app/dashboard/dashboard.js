'use strict';

var app = angular.module('myApp.dashboard', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'View4Ctrl',
    controllerAs:"View4"
  });
}])


app.controller('View4Ctrl', ['$scope','EmployeeService', function($scope, EmployeeService) {
	$scope.objects = EmployeeService.getallObjects();


	$scope.infoOpen = function(task){
		alert(" Name of employee(main) to do task : " + task.name + ", department: " + task.department + ", date to be finished : " + task.date);
	}

	$scope.infoOpenEm = function(task){
		alert(" Department of this employee : " + task.department + ", and his task: " + task.task);
	}

	$scope.infoOpenDe = function(task){
		var employeesDepartment = [];
		var employeesDepartmentTasks = [];

		for(var i = 0; i < $scope.objects.length; i++)
		{
			var obj = $scope.objects[i];
			var index = $scope.objects.indexOf(obj);
			if(obj.department == task.department)
			{
				if(index > -1)
				{
					employeesDepartment.push(obj.name);
				}
			}
		}


		for(var i = 0; i < $scope.objects.length; i++)
		{
			var obj = $scope.objects[i];
			var index = $scope.objects.indexOf(obj);
			if(obj.department == task.department && obj.name == task.name)
			{
				if(index > -1)
				{
					employeesDepartmentTasks.push(obj.task);
				}
			}
		}



		alert(" Employees in this department : " + employeesDepartment + " and their tasks : " + employeesDepartmentTasks);
	}

}]);