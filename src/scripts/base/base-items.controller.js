BaseItemsCtrl.$inject = ['$rootScope', '$state'];

function BaseItemsCtrl($rootScope, $state) {
  // Highlight any code on the page.
  Prism.highlightAll();

  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');
}

module.exports = BaseItemsCtrl;