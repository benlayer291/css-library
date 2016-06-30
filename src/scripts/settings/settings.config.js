SettingsConfig.$inject = ['$stateProvider'];

function SettingsConfig($stateProvider) {

  $stateProvider
    .state('app.settings', {
      url: '/settings',
      abstract: true,
      controller: 'SettingsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'settings/settings.html',
    })

    .state('app.settings.breakpoints', {
      url: '/breakpoints',
      controller: 'SettingsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'settings/abstract-views/settings-breakpoints.html',
      title: 'Breakpoints'
    })

    .state('app.settings.typography', {
      url: '/typography',
      controller: 'SettingsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'settings/abstract-views/settings-typography.html',
      title: 'Typography'
    })

    .state('app.settings.colors', {
      url: '/colors',
      controller: 'SettingsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'settings/abstract-views/settings-colors.html',
      title: 'Colors'
    })

    .state('app.settings.units', {
      url: '/units',
      controller: 'SettingsItemsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'settings/abstract-views/settings-units.html',
      title: 'Units'
    });
}

module.exports = SettingsConfig;