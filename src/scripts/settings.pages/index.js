var angular = require('angular');

// Create module to inject into our app
var settingsModule = angular.module('app.settingsPages', []);

// UI-router
var SettingsConfig = require('./settings.config');

// Controllers
var SettingsCtrl = require('./settings.controller');
var SettingsItemsCtrl = require('./settings-items.controller');

settingsModule
  .config(SettingsConfig)
  .controller('SettingsCtrl', SettingsCtrl)
  .controller('SettingsItemsCtrl', SettingsItemsCtrl);

module.exports = settingsModule;