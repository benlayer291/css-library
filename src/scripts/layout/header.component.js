AppHeaderCtrl.$inject = ['AppConstants'];

function AppHeaderCtrl(AppConstants) {
  var self = this;

  self.appName = AppConstants.appName;
  
}

var AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

module.exports = AppHeader;