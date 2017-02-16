
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  var ctrl = this;
  ctrl.list = [
    {
      thing: 'feed the cat',
      priority: 0
    },
    {
      thing: 'wash the dishes',
      priority: 2
    },
    {
      thing: "learn angular",
      priority: 1
    },
    {
      thing: "get a job",
      priority: 0
    },
    {
      thing: "watch paint dry",
      priority: 2
    },
    {
      thing: "aardvarks: advance",
      priority: 2
    }
  ];
  ctrl.order = 'priority';
  ctrl.userItem = null;
  ctrl.userPriority = 0;

  ctrl.add = function() {
    if(ctrl.userItem == null)
      return false;

    var item = {
      thing: ctrl.userItem,
      priority: ctrl.userPriority
    };
    ctrl.userItem = null;
    ctrl.list.push(item);
  };

}); //controller
