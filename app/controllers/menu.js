var menuVisible = false;
var animationSpeed = 500;
var fromRight = ($.args.hasOwnProperty('direction') && $.args.direction === 'right') ? true : false;

if (fromRight){
  $.menuView.applyProperties({
    right: Alloy.CFG.drawerStartPosition 
  });
} else {
  $.menuView.applyProperties({
    left: Alloy.CFG.drawerStartPosition 
  });
}

function toggleMenu(){
  if (menuVisible) return hideMenu();
  menuVisible = true;
  
  var animationProperties = { duration: animationSpeed };
  if (fromRight){
    animationProperties.right = 0;
  } else {
    animationProperties.left = 0;
  }
  
  $.menuView.animate( Ti.UI.createAnimation(animationProperties) );
  
}
exports.toggleMenu = toggleMenu;

function clickBackground(){
  hideMenu();
}

function hideMenu(speed){
  var hideSpeed = speed || animationSpeed;
  menuVisible = false;

  $.background.animate(Ti.UI.createAnimation({
    opacity: 0,
    duration: hideSpeed
  }));

  var animationProperties = { duration: hideSpeed };
  if (fromRight){
    animationProperties.right = Alloy.CFG.drawerStartPosition;
  } else {
    animationProperties.left = Alloy.CFG.drawerStartPosition;
  }

  $.menuView.animate( Ti.UI.createAnimation(animationProperties), function(){
    $.getView().close();
  });
}

function clickMenuItem(e){
  $.args.handleNavigation(e.source.controller);
  hideMenu(300);
}

function handleOpen(){
  $.background.animate(Ti.UI.createAnimation({
    opacity: 1,
    duration: animationSpeed
  }));
  toggleMenu();
}
