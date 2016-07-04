var angular = require('angular');

var componentsModule = angular.module('app.components', []);

// Components
var NavBar = require('./nav-bar.component');

componentsModule
  .component('navBar', NavBar);

module.exports = componentsModule;