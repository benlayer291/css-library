ComponentsCtrl.$inject = ['AppConstants', '$rootScope'];

function ComponentsCtrl(AppConstants, $rootScope) {

  var self = this;

  self.pageTitle = $rootScope.pageTitle.replace('Styleguide - ', '');

  self.setPageTitle = self.setPageTitle;

  $rootScope.$on('$stateChangeSuccess', function(event, current) {
    self.setPageTitle(current.title);
  });

  self.setPageTitle = function(title) {
    self.pageTitle = '';

    if (title) {
      self.pageTitle += title;
    }
  };

}

module.exports = ComponentsCtrl;