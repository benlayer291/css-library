var angular = require('angular');

// Create module to inject into our app
var homeModule = angular.module('app.home', []);

// UI-router
var HomeConfig = require('./home.config');

// Controllers
var HomeCtrl = require('./home.controller');

homeModule
  .config(HomeConfig)
  .controller('HomeCtrl', HomeCtrl);

module.exports = homeModule;