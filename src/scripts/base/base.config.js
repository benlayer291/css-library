BaseConfig.$inject = ['$stateProvider'];

function BaseConfig($stateProvider) {

  $stateProvider
    .state('app.base', {
      url: '/base',
      controller: 'BaseCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base/base.html',
      title: 'Base'
    });
}

module.exports = BaseConfig;