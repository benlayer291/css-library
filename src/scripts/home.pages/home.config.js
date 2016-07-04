HomeConfig.$inject = ['$stateProvider'];

function HomeConfig($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'home.pages/home.html',
      title: 'Home'
    });
}

module.exports = HomeConfig;