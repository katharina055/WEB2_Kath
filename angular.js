        var app1 = angular.module("app1",[]);

            app1.controller("control",function($scope)
            {$scope.nume = "nume";                                               
            $scope.tasks = [ 'writing', 'speaking', 'listening']
            });
            
    
            
            app1.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
        