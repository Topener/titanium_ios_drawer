
Alloy.Globals.isIphoneX = (Ti.Platform.displayCaps.platformWidth === 375 && Ti.Platform.displayCaps.platformHeight === 812 && Ti.Platform.displayCaps.logicalDensityFactor === 3);
Alloy.Globals.events = _.clone(Backbone.Events);
Alloy.CFG.drawerStartPosition = -Alloy.CFG.drawerWidth;