var angular = require('angular');

// Create module to inject into our app
var objectsModule = angular.module('app.objects', []);

// UI-router
var ObjectsConfig = require('./objects.config');

// Controllers
var ObjectsCtrl = require('./objects.controller');
var ObjectsItemsCtrl = require('./objects-items.controller');

baseModule
  .config(ObjectsConfig)
  .controller('ObjectsCtrl', ObjectsCtrl)
  .controller('ObjectsItemsCtrl', ObjectsItemsCtrl);

module.exports = objectsModule;