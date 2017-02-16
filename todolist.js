
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  var ctrl = this;
  ctrl.list = [
    {
      thing: 'feed the cat',
      priority: 0,
      complete: false
    },
    {
      thing: 'wash the dishes',
      priority: 2,
      complete: true
    },
    {
      thing: "learn angular",
      priority: 1,
      complete: false
    },
    {
      thing: "get a job",
      priority: 0,
      complete: false
    },
    {
      thing: "watch paint dry",
      priority: 2,
      complete: false
    },
    {
      thing: "aardvarks: advance",
      priority: 2,
      complete: true
    }
  ];
  ctrl.order = 'priority';
  ctrl.userItem = null;
  ctrl.userPriority = 0;

  ctrl.add = function() {
    if(ctrl.userItem == null)
      return false;

    priorityVal = parseInt(ctrl.userPriority);
    var item = {
      thing: ctrl.userItem,
      priority: priorityVal
    };
    ctrl.userItem = null;
    ctrl.list.push(item);
  };

}); //controller
