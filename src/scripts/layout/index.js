var angular = require('angular');

// Create module to inject into our app
var layoutModule = angular.module('app.layout', []);

// Components
var AppHeader = require('./header.component');
var AppFooter = require('./footer.component');
var PageSection = require('./page-section.component');
var Hero = require('./hero.component');

layoutModule
  .component('appHeader', AppHeader)
  .component('appFooter', AppFooter)
  .component('pageSection', PageSection)
  .component('hero', Hero);

module.exports = layoutModule;