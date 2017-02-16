
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  var ctrl = this;
  ctrl.list = [
    {
      task: 'feed the cat',
      priority: 0,
      complete: false
    },
    {
      task: 'wash the dishes',
      priority: 2,
      complete: true
    },
    {
      task: "learn angular",
      priority: 1,
      complete: false
    },
    {
      task: "get a job",
      priority: 0,
      complete: false
    },
    {
      task: "watch paint dry",
      priority: 2,
      complete: false
    },
    {
      task: "aardvarks: advance",
      priority: 2,
      complete: true
    }
  ];
  ctrl.order = 'priority';
  ctrl.userTask = null;
  ctrl.userPriority = 0;

  ctrl.add = function() {
    if(ctrl.userTask == null)
      return false;

    priorityVal = parseInt(ctrl.userPriority);
    var item = {
      task: ctrl.userTask,
      priority: priorityVal
    };
    ctrl.userTask = null;
    ctrl.list.push(item);
  };

}); //controller
