BaseConfig.$inject = ['$stateProvider'];

function BaseConfig($stateProvider) {

  $stateProvider
    .state('app.base', {
      url: '/base',
      abstract: true,
      controller: 'BaseCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base/base.html',
    })

    .state('app.base.headings', {
      url: '/headings',
      controller: 'BaseItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base/abstract-views/base-headings.html',
      title: 'Headings'
    })

    .state('app.base.links', {
      url: '/links',
      controller: 'BaseItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base/abstract-views/base-links.html',
      title: 'Links'
    })

    .state('app.base.lists', {
      url: '/lists',
      controller: 'BaseItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base/abstract-views/base-lists.html',
      title: 'Lists'
    });
}

module.exports = BaseConfig;