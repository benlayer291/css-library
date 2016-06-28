AppConfig.$inject = [
  '$locationProvider', 
  '$stateProvider', 
  '$urlRouterProvider'
];

function AppConfig($locationProvider, $stateProvider, $urlRouterProvider) {

  // Do not use # routing
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: true,
  // });

  // Set initial state for the app
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'layout/app-view.html'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = AppConfig;