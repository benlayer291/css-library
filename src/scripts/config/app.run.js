AppRun.$inject = [
  'AppConstants',
  '$rootScope'
];

function AppRun(AppConstants, $rootScope) {

  // change the page title based on the page state
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.setPageTitle(toState.title);
  });

  // globally accesible function to change page title
  $rootScope.setPageTitle = function(title) {
    $rootScope.pageTitle = '';

    if (title) {
      $rootScope.pageTitle += AppConstants.appName + ' - ' + title;
    } else {
      $rootScope.pageTitle += AppConstants.appName;
    }
  };

}

module.exports = AppRun;