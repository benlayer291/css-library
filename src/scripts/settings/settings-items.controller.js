SettingsItemsCtrl.$inject = ['$rootScope', '$state'];

function SettingsItemsCtrl($rootScope, $state) {
 
  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');

}

module.exports = SettingsItemsCtrl;