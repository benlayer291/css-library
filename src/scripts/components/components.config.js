ComponentsConfig.$inject = ['$stateProvider'];

function ComponentsConfig($stateProvider) {

  $stateProvider
    .state('app.components', {
      url: '/components',
      abstract: true,
      controller: 'ComponentsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'components/components.html',
    })

    .state('app.components.nav', {
      url: '/nav',
      controller: 'ComponentsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'components/abstract-views/components-nav.html',
      title: 'Nav'
    })

    .state('app.components.tabs', {
      url: '/tabs',
      controller: 'ComponentsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'components/abstract-views/components-tabs.html',
      title: 'Tabs'
    })

    .state('app.components.card', {
      url: '/card',
      controller: 'ComponentsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'components/abstract-views/components-card.html',
      title: 'Card'
    });
}

module.exports = ComponentsConfig;