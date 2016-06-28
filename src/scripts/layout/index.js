var angular = require('angular');

// Create module to inject into our app
var layoutModule = angular.module('app.layout', []);

// Components
var AppHeader = require('./header.component');
var AppFooter = require('./footer.component');

layoutModule
  .component('appHeader', AppHeader)
  .component('appFooter', AppFooter);

module.exports = layoutModule;