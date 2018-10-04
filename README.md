# Titanium iOS Drawer
A sample app for displaying how to set up a drawer in iOS without the use of any modules. 

All the slide-in functionality is visible in the `menu` controller. The only thing done from the `index` controller is creating the `menu` controller and opening it. 

```js
Alloy.createController('menu', {handleNavigation: navigate, direction: 'right'}).getView().open();
```

A required `handleNavigation` callback function is required as well, which should contain the same arguments as the `Alloy.CreateController` method, as you can see in `index.js` 

```js
function navigate(controller, args) {
}
```

An optional `direction` can be given to the menu controller. It will default with `left`, the only other option is `right`. 

If you want to configure the width of the drawer, check out `config.json`. Here you can define the size you want. This value is inversed in `alloy.js` to be able to have a proper starting postion. The usage of this property is visible in `menu.tss` and `menu.js`.

## Future features
If you want to see any other features in this demo, create an issue! 

PR's welcome too!
