'use strict';

angular.module('myApp.tasks', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'tasks/tasks.html',
    controller: 'View3Ctrl',
    controllerAs: "View3"
  });
 }])


app.factory('TaskService', ['EmployeeService', function(EmployeeService)
{
	var departments = [];
	var objects = EmployeeService.getallObjects();
	console.log(objects);

return {
	deleteTask: function(task) {
		for(var i = 0; i < objects.length; i++)
		{
			var obj = objects[i];
			var index = objects.indexOf(obj);
			if(obj.task == task.task)
			{
				if(index > -1)
				{
					if(obj.name == "")
					{
				objects.splice(index,1);
				}
				else 
				{
				obj.task = "";
				}
				}
			}
		}
	},
	addTask: function(myObj) {
		var ih = 0;
		for(var i = 0; i < objects.length; i++)
		{
			var obj = objects[i];
			var index = objects.indexOf(obj);
			if(obj.name == myObj.name && obj.department == myObj.department)
			{
				if(index > -1)
				{
				obj.task = myObj.task;
				obj.date = myObj.date;
				ih=1;
				}
			}
			
		}
		if(ih==1)
		{
			alert("succesfuly added task to this employee");
		}
		else
		{
			alert("no such employee in this department");
		}

		//objects.push(myObj);
	},
	getallTask: function()
	{
		console.log(objects.department);
		return objects.tasks;
	},
	updateTask: function(task,newname) {
		for(var i = 0; i < objects.length; i++)
		{
			var obj = objects[i];
			var index = objects.indexOf(obj);
			if(obj.task == task)
			{
				if(index > -1)
				{
				obj.task = newname;
				}
			}
		}
	},
} 
}])


.controller('View3Ctrl', ['$scope','EmployeeService','TaskService', function($scope,EmployeeService,TaskService) {

	$scope.objects = EmployeeService.getallObjects();
      

    $scope.addTask = function(task,el,el2,date) {
		var e = document.getElementById(el);
		var e2 = document.getElementById(el2);
		var myObj = {};
		
		myObj.name = e.options[e.selectedIndex].text;
		myObj.department = e2.options[e2.selectedIndex].text;
		//console.log(department);
		myObj.task = task
		myObj.date = date;
		TaskService.addTask(myObj);
	}

	$scope.deleteTask = function(task) {
		TaskService.deleteTask(task);
	}

	$scope.selectTask = function(task) {
		$scope.taskSelected = true;
		$scope.objects.task = task;
		$scope.updateTaskName = task;
	}

	$scope.updateTask = function(task) {
		TaskService.updateTask($scope.objects.task,$scope.updateTaskName);
	}  
}]);

