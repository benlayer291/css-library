SettingsItemsCtrl.$inject = ['$rootScope', '$state'];

function SettingsItemsCtrl($rootScope, $state) {
  // Highlight any code on the page.
  Prism.highlightAll();
 
  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');

}

module.exports = SettingsItemsCtrl;