var angular = require('angular');

// Create module to inject into our app
var objectsModule = angular.module('app.objectsPages', []);

// UI-router
var ObjectsConfig = require('./objects.config');

// Controllers
var ObjectsCtrl = require('./objects.controller');
var ObjectsItemsCtrl = require('./objects-items.controller');

objectsModule
  .config(ObjectsConfig)
  .controller('ObjectsCtrl', ObjectsCtrl)
  .controller('ObjectsItemsCtrl', ObjectsItemsCtrl);

module.exports = objectsModule;