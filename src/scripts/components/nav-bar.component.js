NavBarCtrl.$inject = [];

function NavBarCtrl() {

  var self = this;

  self.toggleMenu = toggleMenu;
  self.closeMenu = closeMenu;

  function toggleMenu() {
    self.mobileMenuShowing = self.mobileMenuShowing ? false : true;
  }

  function closeMenu() {
    self.mobileMenuShowing = false;
  }

}

var NavBar = {
  bindings: {

  },
  controller: NavBarCtrl,
  templateUrl: 'components/nav-bar.html'
};

module.exports = NavBar;