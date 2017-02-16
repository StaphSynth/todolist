
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  this.list = [
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
  this.order = 'priority';
}); //controller
