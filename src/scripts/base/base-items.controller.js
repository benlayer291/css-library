BaseItemsCtrl.$inject = ['$rootScope', '$state'];

function BaseItemsCtrl($rootScope, $state) {
 
  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');

}

module.exports = BaseItemsCtrl;