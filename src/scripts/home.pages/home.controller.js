HomeCtrl.$inject = ['$rootScope'];

function HomeCtrl($rootScope) {
 
  var self = this;

  self.pageTitle = $rootScope.pageTitle;

}

module.exports = HomeCtrl;