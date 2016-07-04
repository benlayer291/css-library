BaseConfig.$inject = ['$stateProvider'];

function BaseConfig($stateProvider) {

  $stateProvider
    .state('app.base', {
      url: '/base',
      abstract: true,
      controller: 'BaseCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base.pages/base.html',
    })

    .state('app.base.headings', {
      url: '/headings',
      controller: 'BaseItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base.pages/abstract-views/base-headings.html',
      title: 'Headings'
    })

    .state('app.base.links', {
      url: '/links',
      controller: 'BaseItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base.pages/abstract-views/base-links.html',
      title: 'Links'
    })

    .state('app.base.lists', {
      url: '/lists',
      controller: 'BaseItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'base.pages/abstract-views/base-lists.html',
      title: 'Lists'
    });
}

module.exports = BaseConfig;