ComponentsItemsCtrl.$inject = ['$rootScope', '$state'];

function ComponentsItemsCtrl($rootScope, $state) {
   // Highlight any code on the page.
  Prism.highlightAll();
  
  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');

}

module.exports = ComponentsItemsCtrl;