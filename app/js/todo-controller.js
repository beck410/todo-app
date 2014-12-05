;(function(){
  'use strict';
  
  angular.module('todoApp',[])
  .controller('TodoController',function(){

    var vm = this;
    vm.tasks = [
      {
        name: 'Learn Angular',
        desc: 'Learn how to use angular and implement in app',
        due: 'Today'
      },
      {
        name: 'Learn Firebase',
        desc: 'master the basics of Firebase',
        due: 'Tomorrow'
      },
     {
       name: 'Learn MCV & MVP Patterns', 
      desc: 'read OReily book and practice different patterns',
      due: 'Next Friday'
     },
    ];

  vm.addNewTask = function(){
    vm.tasks.push(vm.newTask);
    vm.newTask = null;
  }

  vm.removeTask = function(item){
    var index = vm.tasks.indexOf(item);
    vm.tasks.splice(index,1);
  }
  });
})();

