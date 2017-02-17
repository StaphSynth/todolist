
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  var ctrl = this;
  ctrl.list = [
    {
      task: 'feed the cat',
      priority: 0,
      complete: true
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
      priority: priorityVal,
      complete: false
    };
    ctrl.userTask = null;
    ctrl.list.push(item);
  };

  //returns the array index of the task found, else false.
  ctrl.find = function(task) {
    if(task) {
      for(var i = 0; i < ctrl.list.length; i++) {
        if(ctrl.list[i].task === task) {
          return i;
        }
      }
      return false;
    }
    return false;
  };

  //deletes a selected list item
  ctrl.delete = function(task) {
    if(task) {
      ctrl.list.splice(ctrl.find(task), 1);
      return true;
    } else {
      return false;
    }
  };

  ctrl.complete = function(task) {
    if(task) {
      var index = ctrl.find(task);
      ctrl.list[index].complete ? ctrl.list[index].complete = false : ctrl.list[index].complete = true;
      return true;
    }
    return false;
  };

}); //controller
