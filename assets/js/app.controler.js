(function() {
    'use strict';

    var app = angular.module('todolist');
 app.controller('todoController', ['$scope', function($scope) {
    $scope.todos = [
        {
            id: 1,
            title : "Learning Angular JS",
            description: "Learning Angular JS..."
        },
        {
            id: 2,
            title : "Complete Todolist",
            description: "Complete Todolist..."
        },
        {
            id: 3,
            title : "Learning RestFul",
            description: "Learning RestFul..."
        }, 
        {
            id: 4,
            title : "Complete API",
            description: "Complete API..."
        }     
    ];
    $scope.isSaved = false;

    $scope.isDisableEditButton = true;

    $scope.addTodo = function () {
        $scope.isSaved = false;
        $scope.todos.push({title:$scope.formTodoText, description:$scope.formTodoDesc, done:false});
        $scope.formTodoText = '';
        $scope.formTodoDesc = '';
    };
  
    console.log($scope.addTodo);

    $scope.remove = function() {
        $scope.isSaved = false;
        var oldList = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldList, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };


    $scope.changeCheckbox = function(value){
        $scope.isSaved = false;
        console.log(value)
        $scope.isDisableEditButton = checkDisableEditButton();
    }

    function checkDisableEditButton(){   
        $scope.isSaved = false;
        let countDone = 0; 
        for(let i = 0; i < $scope.todos.length; i++){
            if($scope.todos[i].done == true){
                $scope.selectedItem = angular.copy($scope.todos[i]);
                countDone++;
            }
        }  
        if(countDone == 1){
            return false;
            
        }else{
            $scope.selectedItem = null;
            return true;
        }        
    };
    
    $scope.edit = function(){
        $scope.IsVisible =  !$scope.IsVisible;    
    }

    
    $scope.cancelEdit = function () {       
           $scope.IsVisible = false;
    };

    $scope.updateTodo = function(selectedItem) {
        console.log(selectedItem);
        $scope.isSaved = true;
        $scope.IsVisible = false;
        // todo.backupName = angular.copy(todo.title);

        for(var i=0; i < $scope.todos.length; i++){
            if(selectedItem.id === $scope.todos[i].id){
                $scope.todos[i].title = selectedItem.title;
                $scope.todos[i].description = selectedItem.description;
            }
        }
      };


  }]);
  })();
