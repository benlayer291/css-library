var angular = require('angular');

// Create module to inject into our app
var componentsModule = angular.module('app.components', []);

// UI-router
var ComponentsConfig = require('./components.config');

// Controllers
var ComponentsCtrl = require('./components.controller');
var ComponentsItemsCtrl = require('./components-items.controller');

componentsModule
  .config(ComponentsConfig)
  .controller('ComponentsCtrl', ComponentsCtrl)
  .controller('ComponentsItemsCtrl', ComponentsItemsCtrl);

module.exports = componentsModule;