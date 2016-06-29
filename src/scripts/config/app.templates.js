angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('home/home.html','<section class="hero hero--is-medium" style=" background: yellow;">\n  <div class="hero__body">\n    <div class="wrapper">\n      <h1>Styleguide library</h1>\n    </div>\n  </div> \n</section>\n\n<section class="section">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item grid__item--is-one-third">\n        <h2>Base</h2>\n        <ul>\n          <li>\n            <a href="">Headings</a>\n          </li>\n          <li>\n            <a href="">Links</a>\n          </li>\n          <li>\n            <a href="">Lists</a>\n          </li>\n        </ul>\n      </div>\n      <div class="grid__item grid__item--is-one-third">\n        <h2>Objects</h2>\n        <ul>\n          <li>\n            <a href="">Header</a>\n          </li>\n          <li>\n            <a href="">Hero</a>\n          </li>\n          <li>\n            <a href="">Section</a>\n          </li>\n          <li>\n            <a href="">Wrapper</a>\n          </li>\n          <li>\n            <a href="">Grid</a>\n          </li>\n          <li>\n            <a href="">Footer</a>\n          </li>\n        </ul>\n      </div>\n      <div class="grid__item grid__item--is-one-third">\n        <h2>Components</h2>\n        <ul>\n          <li>\n            <a href="">Nav</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <div class="grid">\n  <div class="grid__item">\n    <p style="text-align: center; background: red; padding: 16px;">Grid Item 1</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: orange; padding: 16px;">Grid Item 2</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Grid Item 3</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: green; padding: 16px;">Grid Item 4</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: blue; padding: 16px;">Grid Item 5</p>\n  </div>\n</div>\n\n<div class="grid grid--is-mobile">\n  <div class="grid__item">\n    <p style="text-align: center; background: red; padding: 16px;">Grid Item 1</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: orange; padding: 16px;">Grid Item 2</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Grid Item 3</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: green; padding: 16px;">Grid Item 4</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: blue; padding: 16px;">Grid Item 5</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-whole">\n    <p style="text-align: center; background: red; padding: 16px;">Whole</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-three-quarters">\n    <p style="text-align: center; background: pink; padding: 16px;">Three Quarters</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-two-thirds">\n    <p style="text-align: center; background: orange; padding: 16px;"">Two Thirds</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-half">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Half</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-one-third">\n    <p style="text-align: center; background: green; padding: 16px;">One Third</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-one-quarter">\n    <p style="text-align: center; background: blue; padding: 16px;">One Quarter</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-whole">\n    <p style="text-align: center; background: red; padding: 16px;">Whole</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-three-quarters">\n    <p style="text-align: center; background: pink; padding: 16px;">Offset Three Quarters</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-two-thirds">\n    <p style="text-align: center; background: orange; padding: 16px;"">Offset Two Thirds</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-half">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Offset Half</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-one-third">\n    <p style="text-align: center; background: green; padding: 16px;">Offset One Third</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-one-quarter">\n    <p style="text-align: center; background: blue; padding: 16px;">Offset One Quarter</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-whole">\n    <p style="text-align: center; background: red; padding: 16px;">Whole</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-three-quarters">\n    <p style="text-align: center; background: pink; padding: 16px;">Three Quarters</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-two-thirds">\n    <p style="text-align: center; background: orange; padding: 16px;"">Two Thirds</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-half">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Half</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-one-third">\n    <p style="text-align: center; background: green; padding: 16px;">One Third</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-one-quarter">\n    <p style="text-align: center; background: blue; padding: 16px;">One Quarter</p>\n  </div>\n</div>\n\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n\n<div class="wrapper">\n  <p style="text-align: center; background: orange; padding: 35px;">Wrapper</p>\n</div>\n\n<div class="section" style=" background: red;">\n  <p>Section</p>\n</div>\n\n<div class="section section--is-medium" style=" background: orange;">\n  <p>Section Medium</p>\n</div>\n\n<div class="section section--is-large" style=" background: yellow;">\n  <p>Section Large</p>\n</div>\n\n<div class="hero" style=" background: red;">\n  <div class="hero__head">\n    <p>Hero head</p>\n  </div> \n  <div class="hero__body">\n    <p>Hero body</p>\n  </div> \n  <div class="hero__foot">\n    <p>Hero foot</p>\n  </div> \n</div>\n\n<div class="hero" style=" background: orange;">\n  <div class="hero__body">\n    <p>Hero</p>\n  </div>  \n</div>\n\n<div class="hero hero--is-medium" style=" background: yellow;">\n  <div class="hero__body">\n    <p>Hero Medium</p>\n  </div> \n</div>\n\n<div class="hero hero--is-large" style=" background: green;">\n  <div class="hero__body">\n    <p>Hero Large</p>\n  </div> \n</div>\n\n<div class="footer" style="background: grey;">\n  <p>A footer, this can contain anything.</p>\n</div>\n\n<div class="header" style=" background: white;">\n  <p>A header, this can contain anything but typically a nav.</p>\n</div>\n\n<div class="header">\n  <div class="wrapper">\n    <nav class="nav">\n  <div class="nav__left">\n    <a class="nav__logo" href="#">\n     <img src="http://bulma.io/images/bulma.png" alt="logo">\n    </a>\n    <a class="nav__brand" href="#">\n     Brand\n    </a>\n  </div>\n  <div class="nav__center">\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n  </div>\n\n  <span class="nav__toggle">\n    <span></span>\n    <span></span>\n    <span></span>\n  </span>\n\n  <div class="nav__right">\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n  </div>\n</nav>\n  </div>\n</div> -->');
$templateCache.put('layout/app-view.html','<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>');
$templateCache.put('layout/footer.html','<div class="footer" style="background: grey;">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item">\n    \n      </div>\n      <div class="grid__item">\n        <p>Site made with <i class="ion-heart"></i>&nbsp;by Ben Layer</p>    \n        <p>Based on Bulma.io and InuitCSS</p>    \n      </div>\n      <div class="grid__item">\n        \n      </div>\n    </div>\n  </div>\n</div>');
$templateCache.put('layout/header.html','<div class="header">\n  <div class="wrapper">\n    <nav class="nav">\n      <div class="nav__left">\n        <a class="nav__logo" href="#">\n         <img src="http://bulma.io/images/bulma.png" alt="logo">\n        </a>\n        <a class="nav__brand" href="#">\n         Brand\n        </a>\n      </div>\n      <div class="nav__center">\n        <a class="nav__item" href="#">\n          Nav Item\n        </a>\n        <a class="nav__item" href="#">\n          Nav Item\n        </a>\n      </div>\n\n      <span class="nav__toggle">\n        <span></span>\n        <span></span>\n        <span></span>\n      </span>\n\n      <div class="nav__right">\n        <a class="nav__item" href="#">\n          Nav Item\n        </a>\n        <a class="nav__item" href="#">\n          Nav Item\n        </a>\n        <a class="nav__item" href="#">\n          Nav Item\n        </a>\n      </div>\n    </nav>\n  </div>\n</div>');}]);