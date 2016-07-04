// Grab Angular for our app
var angular = require('angular');

// Grab app functionality
var appConstants = require('./config/app.constants');
var appConfig = require('./config/app.config');
var appRun = require('./config/app.run');
var uiRouter = require('angular-ui-router');

var templates = require('./config/app.templates');
var layout = require('./layout');
var components = require('./components');

var homePages = require('./home.pages');
var settingsPages = require('./settings.pages');
var basePages = require('./base.pages');
var objectsPages = require('./objects.pages');
var componentsPages = require('./components.pages');

// Modules to inject into our Angular app
var requires = [
  'ui.router',
  'templates',
  'app.layout',
  'app.components',
  'app.homePages',
  'app.settingsPages',
  'app.basePages',
  'app.objectsPages',
  'app.componentsPages'
];

// Angular app set-up
angular.module('app', requires);

angular.module('app').constant('AppConstants', appConstants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

// Manually bootstrap the Angular app (due to use of custom modules) with strict mode
angular.bootstrap(document, ['app'], {
  strictDi: true
});

