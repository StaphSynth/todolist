
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  var ctrl = this;
  ctrl.list = [
    {
      task: 'feed the cat, water the cat, take the cat for a walk, skin the cat',
      priority: 0,
      complete: true,
      editing: false
    },
    {
      task: 'wash the dishes',
      priority: 2,
      complete: true,
      editing: false
    },
    {
      task: "learn angular",
      priority: 1,
      complete: false,
      editing: false
    },
    {
      task: "get a job",
      priority: 0,
      complete: false,
      editing: false
    },
    {
      task: "watch paint dry",
      priority: 2,
      complete: false,
      editing: false
    },
    {
      task: "aardvarks: advance",
      priority: 2,
      complete: true,
      editing: false
    }
  ];
  ctrl.order = 'priority';
  ctrl.userTask = null;
  ctrl.userPriority = 0;

  //adds an item to the list
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
    ctrl.list.unshift(item);
  };

  //deletes a selected list item.
  //pass it an item object to delete,
  //or pass "all" string to clear list
  ctrl.delete = function(item) {
    if(item === "all") { //obviosly for all items
      ctrl.list = [];
      return true;
    } else { //for specific items. search list for correct item and remove
      for(var i = 0; i < ctrl.list.length; i++) {
        if(ctrl.list[i].task === item.task) {
          ctrl.list.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  };

  //mark list item as complete
  //pass a list item object to mark
  ctrl.complete = function(item) {
    item.complete ? item.complete = false : item.complete = true;
  };

  //edit the task member of a list item
  ctrl.editTask = function(task) {
    if(task) {
      var index = ctrl.find(task);
      console.log('Item editing: ', ctrl.list[index].task);
      ctrl.list[index].editing = true;
    } else {
      return false;
    }
  };

  //reset edit flags after finished editing item
  ctrl.editComplete = function(item) {
    item.editing = false;
  };

}); //controller
