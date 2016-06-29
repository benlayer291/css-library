var angular = require('angular');

// Create module to inject into our app
var baseModule = angular.module('app.base', []);

// UI-router
var BaseConfig = require('./base.config');

// Controllers
var BaseCtrl = require('./base.controller');

baseModule
  .config(BaseConfig)
  .controller('BaseCtrl', BaseCtrl);

module.exports = baseModule;