ComponentsItemsCtrl.$inject = ['$rootScope', '$state'];

function ComponentsItemsCtrl($rootScope, $state) {
 
  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');

}

module.exports = ComponentsItemsCtrl;