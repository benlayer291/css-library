var angular = require('angular');

// Create module to inject into our app
var baseModule = angular.module('app.basePages', []);

// UI-router
var BaseConfig = require('./base.config');

// Controllers
var BaseCtrl = require('./base.controller');
var BaseItemsCtrl = require('./base-items.controller');

baseModule
  .config(BaseConfig)
  .controller('BaseCtrl', BaseCtrl)
  .controller('BaseItemsCtrl', BaseItemsCtrl);

module.exports = baseModule;