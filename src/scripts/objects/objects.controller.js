ObjectsCtrl.$inject = ['AppConstants', '$rootScope'];

function ObjectsCtrl(AppConstants, $rootScope) {

  var self = this;

  self.pageTitle = $rootScope.pageTitle;

  self.pageTitle    = $rootScope.pageTitle;
  self.setPageTitle = self.setPageTitle;

  $rootScope.$on('$stateChangeSuccess', function(event, current) {
    self.setPageTitle(current.title);
  });

  self.setPageTitle = function(title) {
    self.pageTitle = '';

    if (title) {
      self.pageTitle += AppConstants.appName + ' - ' + title;
    }
  };

}

module.exports = ObjectsCtrl;