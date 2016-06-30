ObjectsItemsCtrl.$inject = ['$rootScope', '$state'];

function ObjectsItemsCtrl($rootScope, $state) {
 
  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');

}

module.exports = ObjectsItemsCtrl;