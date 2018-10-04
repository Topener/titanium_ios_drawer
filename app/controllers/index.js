$.getView().open();

function showMenu(e){
  var direction;
  if (e.hasOwnProperty('source')){
    direction = e.source.direction;
  } else if (e.direction){
    direction = e.direction;
  }
  Alloy.createController('menu', {handleNavigation: navigate, direction: direction}).getView().open();
}

function navigate(controller, args){
  $.navwin.openWindow(Alloy.createController(controller, args).getView());
}

var startX = false;
var swipeInDirection;
function handleTouchstart(e){
  var threshold = 30;
  if (e.x < threshold){
    startX = e.x;
    swipeInDirection = 'left';
  } else if (Ti.Platform.displayCaps.platformWidth - threshold < e.x){
    swipeInDirection = 'right';
    startX = e.x;
  }
}

function handleTouchmove(e){
  if (startX === false) return;
  
  if (swipeInDirection === 'left' && e.x - startX > 50){
    startX = false;
    showMenu({direction: 'left'});
    swipeInDirection = false;
  }
  if (swipeInDirection === 'right' && startX - e.x > 50){
    startX = false;
    showMenu({direction: 'right'});
    swipeInDirection = false;
  }
}
