;(function(){
  'use strict';
  
  angular.module('todoApp',[])
  .controller('TodoController',function(){

    var vm = this;
    vm.name = 'Beck';
    vm.tasks = [
      {
        category: 'School',
        name: 'Learn Angular',
        desc: 'Learn how to use angular and implement in app',
        priority: 'high',
        due: 'Today'
      },
      {
        category: 'School',
        name: 'Learn Firebase',
        desc: 'master the basics of Firebase',
        priority: 'medium',
        due: 'Tomorrow',
      },
     {
       category: 'School',
       name: 'Learn MCV & MVP Patterns', 
      desc: 'read OReily book and practice different patterns',
      priority: 'low',
      due: 'Next Friday'
     },
    ];

  vm.addNewTask = function(){
    vm.tasks.push(vm.newTask);
    vm.newTask = null;
  };

  vm.removeTask = function(item){
    var index = vm.tasks.indexOf(item);
    vm.tasks.splice(index,1);
  }
  });
})();

