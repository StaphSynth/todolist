
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  var ctrl = this;
  ctrl.list = [
    {
      thing: 'feed the cat',
      priority: "a_high"
    },
    {
      thing: 'wash the dishes',
      priority: "c_low"
    },
    {
      thing: "learn angular",
      priority: 'b_med'
    },
    {
      thing: "get a job",
      priority: 'a_high'
    },
    {
      thing: "watch paint dry",
      priority: 'c_low'
    },
    {
      thing: "aardvarks: advance",
      priority: 'c_low'
    }
  ];
  ctrl.order = 'priority';
  ctrl.userItem = null;
  ctrl.userPriority = 'a_high';

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
