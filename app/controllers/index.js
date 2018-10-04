$.getView().open();

function showMenu(e){
  Alloy.createController('menu', {handleNavigation: navigate, direction: e.source.direction}).getView().open();
}

function navigate(controller, args){
  $.navwin.openWindow(Alloy.createController(controller, args).getView());
}