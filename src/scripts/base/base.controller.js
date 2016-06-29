BaseCtrl.$inject = ['$rootScope'];

function BaseCtrl($rootScope) {
 
  var self = this;

  self.pageTitle = $rootScope.pageTitle;

}

module.exports = BaseCtrl;