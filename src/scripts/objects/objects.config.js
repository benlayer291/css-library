ObjectsConfig.$inject = ['$stateProvider'];

function ObjectsConfig($stateProvider) {

  $stateProvider
    .state('app.objects', {
      url: '/objects',
      abstract: true,
      controller: 'ObjectsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'objects/objects.html',
    })

    .state('app.objects.header', {
      url: '/header',
      controller: 'ObjectsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'objects/abstract-views/objects-header.html',
      title: 'Header'
    })

    .state('app.objects.hero', {
      url: '/hero',
      controller: 'ObjectsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'objects/abstract-views/objects-hero.html',
      title: 'Hero'
    })

    .state('app.objects.section', {
      url: '/section',
      controller: 'ObjectsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'objects/abstract-views/objects-section.html',
      title: 'Section'
    })

    .state('app.objects.wrapper', {
      url: '/wrapper',
      controller: 'ObjectsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'objects/abstract-views/objects-wrapper.html',
      title: 'Wrapper'
    })

    .state('app.objects.grid', {
      url: '/grid',
      controller: 'ObjectsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'objects/abstract-views/objects-grid.html',
      title: 'Grid'
    })

    .state('app.objects.footer', {
      url: '/footer',
      controller: 'ObjectsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'objects/abstract-views/objects-footer.html',
      title: 'Footer'
    });
}

module.exports = ObjectsConfig;