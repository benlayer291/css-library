angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('components/components.html','<section class="hero hero--is-medium" style=" background: yellow;">\n  <div class="hero__body">\n    <div class="wrapper">\n      <h1 class="title">Styleguide - {{ $ctrl.pageTitle }}</h1>\n    </div>\n  </div>\n</section>\n\n<section class="section">\n  <div class="wrapper">\n    \n    <div class="tabs">\n      <ul class="tabs__list">\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.components.nav">\n            Nav\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.components.tabs">\n            Tabs\n          </a>\n        </li>\n      </ul>\n    </div>\n    \n    <h1 class="title">{{ $ctrl.pageTitle }}</h1>\n    <h4 class="subtitle subtitle--has-title">Default styles</h4>\n    <!-- Where the thing we\'re looking will render -->\n  </div>\n</section>\n\n<div ui-view></div>');
$templateCache.put('base/base.html','<section class="hero hero--is-medium" style=" background: yellow;">\n  <div class="hero__body">\n    <div class="wrapper">\n      <h1 class="title">Styleguide - {{ $ctrl.pageTitle }}</h1>\n    </div>\n  </div>\n</section>\n\n<section class="section">\n  <div class="wrapper">\n    \n    <div class="tabs">\n      <ul class="tabs__list">\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.base.headings({ slug: \'headings\'})">\n            Headings\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.base.links({ slug: \'links\'})">\n            Links\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.base.lists({ slug: \'lists\'})">\n            Lists\n          </a>\n        </li>\n      </ul>\n    </div>\n    \n    <h1 class="title">{{ $ctrl.pageTitle }}</h1>\n    <h4 class="subtitle subtitle--has-title">Default styles</h4>\n  </div>\n</section>\n\n<!-- Where the thing we\'re looking will render -->\n<div ui-view></div>');
$templateCache.put('layout/app-view.html','<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>');
$templateCache.put('layout/footer.html','<div class="footer" style="background: #f0f0f0;">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item">\n        <p>Styleguide, built by <a href="https://github.com/benlayer291">Ben</a></p>    \n        <p>Based on <a href="http://bulma.io/">bulma.io</a> and <a href="https://github.com/inuitcss">InuitCSS</a></p>    \n      </div>\n    </div>\n  </div>\n</div>');
$templateCache.put('layout/header.html','<div class="header" style="box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);">\n  <div class="wrapper">\n    <nav class="nav">\n      <div class="nav__left">\n        <a class="nav__brand"\n          ui-sref="app.home">\n         <h1>Styleguide</h1>\n        </a>\n      </div>\n\n      <span class="nav__toggle">\n        <span></span>\n        <span></span>\n        <span></span>\n      </span>\n\n      <div class="nav__right">\n        <a class="nav__item"\n          ui-sref-active="nav__item--active"\n          ui-sref="app.home">\n          <i class="ion-home"></i>&nbsp;Home\n        </a>\n        <a class="nav__item"\n          ui-sref-active="nav__item--active"\n          ui-sref="app.base.headings">\n          <i class="ion-gear-a"></i>&nbsp;Base\n        </a>\n        <a class="nav__item"\n          ui-sref-active="nav__item--active"\n          ui-sref="app.objects.header">\n          <i class="ion-settings"></i>&nbsp;Objects\n        </a>\n        <a class="nav__item"\n          ui-sref-active="nav__item--active"\n          ui-sref="app.components.nav">\n          <i class="ion-cube"></i>&nbsp;Components\n        </a>\n      </div>\n    </nav>\n  </div>\n</div>');
$templateCache.put('home/home.html','<section class="hero hero--is-medium" style=" background: yellow;">\n  <div class="hero__body">\n    <div class="wrapper">\n      <h1 ng-bind="::$ctrl.pageTitle"></h1>\n    </div>\n  </div> \n</section>\n\n<!-- <section class="section">\n  <div class="wrapper">\n\n    <div class="tabs">\n      <ul class="tabs__list">\n        <li class="tabs__item tabs__item--is-active">\n          <a href="">\n            Item 1\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 2\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 3\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class="tabs">\n      <ul class="tabs__list tabs__list--is-left">\n        <li class="tabs__item tabs__item--is-active">\n          <a href="">\n            Item 1\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 2\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 3\n          </a>\n        </li>\n      </ul>\n      <ul class="tabs__list tabs__list--is-center">\n        <li class="tabs__item">\n          <a href="">\n            Item 4\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 5\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 6\n          </a>\n        </li>\n      </ul>\n      <ul class="tabs__list tabs__list--is-right">\n        <li class="tabs__item">\n          <a href="">\n            Item 7\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 8\n          </a>\n        </li>\n        <li class="tabs__item">\n          <a href="">\n            Item 9\n          </a>\n        </li>\n      </ul>            \n    </div>\n\n  </div>\n</section> -->\n\n<section class="section">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item grid__item--is-one-third">\n        <a ui-sref="app.base.headings({ slug: headings })">\n          <h2 class="title">Base</h2>\n        </a>\n        <ul>\n          <li>\n            <a ui-sref="app.base.headings({ slug: headings })">Headings</a>\n          </li>\n          <li>\n            <a ui-sref="app.base.headings({ slug: links })">Links</a>\n          </li>\n          <li>\n            <a ui-sref="app.base.headings({ slug: lists })">Lists</a>\n          </li>\n        </ul>\n      </div>\n      <div class="grid__item grid__item--is-one-third">\n        <a ui-sref="app.objects.header({ slug: header })">\n          <h2 class="title">Objects</h2>\n        </a>\n        <ul>\n          <li>\n            <a ui-sref="app.objects.header({ slug: header })">Header</a>\n          </li>\n          <li>\n            <a ui-sref="app.objects.hero({ slug: hero })">Hero</a>\n          </li>\n          <li>\n            <a ui-sref="app.objects.section({ slug: section })">Section</a>\n          </li>\n          <li>\n            <a ui-sref="app.objects.wrapper({ slug: wrapper })">Wrapper</a>\n          </li>\n          <li>\n            <a ui-sref="app.objects.grid({ slug: grid })">Grid</a>\n          </li>\n          <li>\n            <a ui-sref="app.objects.footer({ slug: footer })">Footer</a>\n          </li>\n        </ul>\n      </div>\n      <div class="grid__item grid__item--is-one-third">\n        <a ui-sref="app.components.nav({ slug: nav })">\n          <h2 class="title">Components</h2>\n        </a>\n        <ul>\n          <li>\n            <a ui-sref="app.components.items({ slug: nav })">Nav</a>\n          </li>\n          <li>\n            <a ui-sref="app.components.items({ slug: tabs })">Tabs</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <div class="grid">\n  <div class="grid__item">\n    <p style="text-align: center; background: red; padding: 16px;">Grid Item 1</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: orange; padding: 16px;">Grid Item 2</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Grid Item 3</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: green; padding: 16px;">Grid Item 4</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: blue; padding: 16px;">Grid Item 5</p>\n  </div>\n</div>\n\n<div class="grid grid--is-mobile">\n  <div class="grid__item">\n    <p style="text-align: center; background: red; padding: 16px;">Grid Item 1</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: orange; padding: 16px;">Grid Item 2</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Grid Item 3</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: green; padding: 16px;">Grid Item 4</p>\n  </div>\n  <div class="grid__item">\n    <p style="text-align: center; background: blue; padding: 16px;">Grid Item 5</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-whole">\n    <p style="text-align: center; background: red; padding: 16px;">Whole</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-three-quarters">\n    <p style="text-align: center; background: pink; padding: 16px;">Three Quarters</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-two-thirds">\n    <p style="text-align: center; background: orange; padding: 16px;"">Two Thirds</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-half">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Half</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-one-third">\n    <p style="text-align: center; background: green; padding: 16px;">One Third</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-one-quarter">\n    <p style="text-align: center; background: blue; padding: 16px;">One Quarter</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-whole">\n    <p style="text-align: center; background: red; padding: 16px;">Whole</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-three-quarters">\n    <p style="text-align: center; background: pink; padding: 16px;">Offset Three Quarters</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-two-thirds">\n    <p style="text-align: center; background: orange; padding: 16px;"">Offset Two Thirds</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-half">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Offset Half</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-one-third">\n    <p style="text-align: center; background: green; padding: 16px;">Offset One Third</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-offset-one-quarter">\n    <p style="text-align: center; background: blue; padding: 16px;">Offset One Quarter</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-whole">\n    <p style="text-align: center; background: red; padding: 16px;">Whole</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-three-quarters">\n    <p style="text-align: center; background: pink; padding: 16px;">Three Quarters</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-two-thirds">\n    <p style="text-align: center; background: orange; padding: 16px;"">Two Thirds</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-half">\n    <p style="text-align: center; background: yellow; padding: 16px;"">Half</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-one-third">\n    <p style="text-align: center; background: green; padding: 16px;">One Third</p>\n  </div>\n</div>\n\n<div class="grid">\n  <div class="grid__item grid__item--is-mobile-one-quarter">\n    <p style="text-align: center; background: blue; padding: 16px;">One Quarter</p>\n  </div>\n</div>\n\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n\n<div class="wrapper">\n  <p style="text-align: center; background: orange; padding: 35px;">Wrapper</p>\n</div>\n\n<div class="section" style=" background: red;">\n  <p>Section</p>\n</div>\n\n<div class="section section--is-medium" style=" background: orange;">\n  <p>Section Medium</p>\n</div>\n\n<div class="section section--is-large" style=" background: yellow;">\n  <p>Section Large</p>\n</div>\n\n<div class="hero" style=" background: red;">\n  <div class="hero__head">\n    <p>Hero head</p>\n  </div> \n  <div class="hero__body">\n    <p>Hero body</p>\n  </div> \n  <div class="hero__foot">\n    <p>Hero foot</p>\n  </div> \n</div>\n\n<div class="hero" style=" background: orange;">\n  <div class="hero__body">\n    <p>Hero</p>\n  </div>  \n</div>\n\n<div class="hero hero--is-medium" style=" background: yellow;">\n  <div class="hero__body">\n    <p>Hero Medium</p>\n  </div> \n</div>\n\n<div class="hero hero--is-large" style=" background: green;">\n  <div class="hero__body">\n    <p>Hero Large</p>\n  </div> \n</div>\n\n<div class="footer" style="background: grey;">\n  <p>A footer, this can contain anything.</p>\n</div>\n\n<div class="header" style=" background: white;">\n  <p>A header, this can contain anything but typically a nav.</p>\n</div>\n\n<div class="header">\n  <div class="wrapper">\n    <nav class="nav">\n  <div class="nav__left">\n    <a class="nav__logo" href="#">\n     <img src="http://bulma.io/images/bulma.png" alt="logo">\n    </a>\n    <a class="nav__brand" href="#">\n     Brand\n    </a>\n  </div>\n  <div class="nav__center">\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n  </div>\n\n  <span class="nav__toggle">\n    <span></span>\n    <span></span>\n    <span></span>\n  </span>\n\n  <div class="nav__right">\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n    <a class="nav__item" href="#">\n      Nav Item\n    </a>\n  </div>\n</nav>\n  </div>\n</div> -->');
$templateCache.put('objects/objects.html','<section class="hero hero--is-medium" style=" background: yellow;">\n  <div class="hero__body">\n    <div class="wrapper">\n      <h1 class="title">Styleguide - {{ $ctrl.pageTitle }}</h1>\n    </div>\n  </div>\n</section>\n\n<section class="section">\n  <div class="wrapper">\n    \n    <div class="tabs">\n      <ul class="tabs__list">\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.objects.header({ slug: \'header\'})">\n            Header\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.objects.hero({ slug: \'hero\'})">\n            Hero\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.objects.section({ slug: \'section\'})">\n            Section\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.objects.wrapper({ slug: \'wrapper\'})">\n            Wrapper\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.objects.grid({ slug: \'grid\'})">\n            Grid\n          </a>\n        </li>\n        <li class="tabs__item" ui-sref-active="tabs__item--is-active">\n          <a ui-sref="app.objects.footer({ slug: \'footer\'})">\n            Footer\n          </a>\n        </li>\n      </ul>\n    </div>\n    \n    <h1 class="title">{{ $ctrl.pageTitle }}</h1>\n    <h4 class="subtitle subtitle--has-title">Default styles</h4>\n    <!-- Where the thing we\'re looking will render -->\n  </div>\n</section>\n\n<div ui-view></div>');
$templateCache.put('components/abstract-views/components-nav.html','<section class="section">\n  <div class="wrapper">\n  \n    <p>A simple responsive <strong>nav bar</strong> built using flexbox that can act as a starting point to building a more elaborate navigation</p>\n\n    <p>To get started with the nav is very straightforward:</p>\n\n    <ul>\n      <li>Decide which parts to include, the nav can have a total of <strong>three parts</strong>:</li>\n      <ul>  \n        <li><strong>nav__left</strong></li>\n        <li><strong>nav__center</strong></li>\n        <li><strong>nav__right</strong></li>\n      </ul>\n      <li>Add <strong>nav__item</strong> divs inside each part as required. Special types include the <strong>nav__logo</strong> and <strong>nav__brand</strong> items</li>\n      <li>The <strong>nav__item</strong> can have an active state by using the modifier <strong>nav__item--is-active</strong></li>\n    </ul>\n\n    <p>There is <strong>no javascript</strong> included with this nav bar so you can write your own as you wish</p>\n\n    <p>Example code goes here</p>\n    \n  </div>\n</section>');
$templateCache.put('components/abstract-views/components-tabs.html','<section class="section">\n  <div class="wrapper">\n  \n    <p>A simple responsive set of <strong>tabs</strong></p>\n\n    <p>To get started with the tabs is very straightforward:</p>\n\n    <ul>\n      <li>Create <strong>tabs</strong> container</li>\n      <li>Add a <strong>tabs__list</strong> ul element</li>\n      <li>Include as many <strong>tab__item</strong>s as required</li>\n      <li>The <strong>tab__item</strong>s can have an active state by using the modifier <strong>tab__item--is-active</strong></li>\n    </ul>\n\n    <p>Example code goes here</p>\n    \n  </div>\n</section>\n\n<section class="section">\n  <div class="wrapper">\n  \n    <p><strong>Tabs</strong> can be aligned differently using one of <strong>two modifiers</strong>:</p>\n\n    <ul>\n      <li><strong>tabs--is-center</strong></li>\n      <li><strong>tabs--is-right</strong></li>      \n    </ul>\n\n    <p>Example code goes here</p>\n\n    <p><strong>Tabs</strong> can have mulitple <strong>tab__lists</strong> aligned differently using one of <strong>three modifiers</strong>:</p>\n\n    <ul>\n      <li><strong>tabs__list--is-left</strong></li>\n      <li><strong>tabs__list--is-center</strong></li>\n      <li><strong>tabs__list--is-right</strong></li>      \n    </ul>\n\n    <p>Example code goes here</p>\n    \n  </div>\n</section>');
$templateCache.put('base/abstract-views/base-headings.html','<section class="section">\n  <div class="wrapper">\n\n    <div class="grid">\n      <div class="grid__item">\n        <p>There are 2 <strong>title</strong> styles</p>\n      </div>\n      <div class="grid__item">\n        <h1 class="title">Title</h1>\n        <h4 class="subtitle subtitle--has-title">Subtitle</h3>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n\n    <div class="grid">\n      <div class="grid__item">There are 6 <strong>title</strong> sizes</div>\n      <div class="grid__item">\n        <h1 class="title">Title 1</h1>\n        <h2 class="title">Title 2</h2>\n        <h3 class="title">Title 3</h3>\n        <h4 class="title">Title 4</h4>\n        <h5 class="title">Title 5</h5>\n        <h6 class="title">Title 6</h6>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n\n    <div class="grid">\n      <div class="grid__item"></div>\n      <div class="grid__item">\n        <h1 class="subtitle">Subtitle 1</h1>\n        <h2 class="subtitle">Subtitle 2</h2>\n        <h3 class="subtitle">Subtitle 3</h3>\n        <h4 class="subtitle">Subtitle 4</h4>\n        <h5 class="subtitle">Subtitle 5</h5>\n        <h6 class="subtitle">Subtitle 6</h6>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n    \n  </div>\n</section>\n');
$templateCache.put('base/abstract-views/base-links.html','<section class="section">\n  <div class="wrapper">\n\n    <div class="grid">\n      <div class="grid__item">\n        <p>link tags appear with a <strong>pointer</strong>, in the <strong>base text color</strong> and <strong>without text decoration</strong> by default</p>\n      </div>\n      <div class="grid__item">\n        <p>Example<a href=""> link</a></p>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n\n    <div class="grid">\n      <div class="grid__item">\n        <p>the <strong>attention</strong> mixin can be used to apply stylings for all link states i.e. hover, active, focus</p>\n      </div>\n    </div>\n    \n  </div>\n</section>');
$templateCache.put('base/abstract-views/base-lists.html','<section class="section">\n  <div class="wrapper">\n\n    <div class="grid">\n      <div class="grid__item">\n        <p>lists appear with a <strong>base-margin-left</strong> and <strong>disc</strong> and <strong>circle</strong> bullets by default</p>\n        <p>list items have <strong>1.25 x base-line-height</strong> by default</p>\n      </div>\n      <div class="grid__item">\n        <ul>\n          <li>List item</li>\n          <li>List item</li>\n          <li>List item</li>\n        </ul>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n\n    <div class="grid">\n      <div class="grid__item">\n      </div>\n      <div class="grid__item">\n        <ul>\n          <li>List item</li>\n          <ul>\n            <li>Embedded list item</li>\n            <li>Embedded list item</li>\n            <li>Embedded list item</li>\n          </ul>\n        </ul>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n    \n  </div>\n</section>');
$templateCache.put('objects/abstract-views/objects-footer.html','<section class="section">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item">\n        <p>The footer can contain anything and features a larger padding-bottom by default than standard sections</p>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n  </div>\n</section>');
$templateCache.put('objects/abstract-views/objects-grid.html','<section class="section">\n  <div class="wrapper">\n  \n    <p>A simple responsive grid built using flexbox. Unless specified the grid is only activated from <strong>small</strong> devices onwards. This means grid__items will stack on <strong>extra-small</strong> devices by default</p>\n\n    <p>To use the grid is very straightforward:</p>\n\n    <ul>\n      <li>Add a <strong>grid</strong> div</li>\n      <li>Add as many <strong>grid__item</strong> divs inside as required</li>\n    </ul>\n    \n    <p>The <strong>grid__items</strong> will automatically re-size with the number of <strong>grid__item</strong> divs added</p>\n\n    <p>Example code goes here</p>\n  </div>\n</section>\n\n<section class="section">\n  <div class="wrapper">\n    <h1 class="title">Grid sizes</h1>\n\n    <p>You can specify the <strong>width</strong> of a single grid__item using one of the following modifiers:</p>\n\n    <ul>\n      <li>grid__item<strong>--is-whole</strong></li>\n      <li>grid__item<strong>--is-three-quarters</strong></li>\n      <li>grid__item<strong>--is-two-thirds</strong></li>\n      <li>grid__item<strong>--is-half</strong></li>\n      <li>grid__item<strong>--is-one-third</strong></li>\n      <li>grid__item<strong>--is-one-quarter</strong></li>\n    </ul>\n\n    <p>Example code goes here</p>\n\n  </div>\n</section>\n\n<section class="section">\n  <div class="wrapper">\n    <h1 class="title">Grid offsets</h1>\n\n    <p>You can specify the <strong>offset</strong> of a sized single grid__item using one of the following modifiers:</p>\n\n    <ul>\n      <li>grid__item<strong>--is-offset-three-quarters</strong></li>\n      <li>grid__item<strong>--is-offset-two-thirds</strong></li>\n      <li>grid__item<strong>--is-offset-half</strong></li>\n      <li>grid__item<strong>--is-offset-one-third</strong></li>\n      <li>grid__item<strong>--is-offset-one-quarter</strong></li>\n    </ul>\n\n    <p>Example code goes here</p>\n\n  </div>\n</section>\n\n<section class="section">\n  <div class="wrapper">\n    <h1 class="title">Grid modifications</h1>\n\n    <p>To prevent stacking of grid__items on <strong>extra-small</strong> devices the modifier <strong>grid--is-mobile</strong> can be used</p>\n\n    <p>Example code goes here</p>\n\n    <p>To center grid__items within a grid the modifier <strong>grid--is-centered</strong> can be used</p>\n\n    <p>Example code goes here</p>\n\n    <p>To remove the gaps between grid__items the modifier <strong>grid--is-gapless</strong> can be used</p>\n\n    <p>Example code goes here</p>\n\n    <p>When using grid__items of defined size, to start a new line you can create a new <strong>grid</strong>. You can also use the modifier <strong>grid--is-multiline</strong> to add more column elements that would fit in a single row (useful for when displaying repeated content retrieved from a server)</p>\n\n    <p>Example code goes here</p>\n\n  </div>\n</section>');
$templateCache.put('objects/abstract-views/objects-header.html','<section class="section">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item">\n        <p>The header can contain anything but will typically used in conjunction with the <a><strong>nav</strong> component</a></p>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n  </div>\n</section>');
$templateCache.put('objects/abstract-views/objects-hero.html','<section>\n  <div class="wrapper">\n    <p>Hero banners can have three sections: <strong>hero__head</strong>, <strong>hero__body</strong> and <strong>hero__foot</strong></p>\n\n    <p>Example code goes here</p>\n\n    <p>Hero banners come in three sizes: <strong>default</strong>, <strong>medium</strong> and <strong>large</strong>. The size can be chosen by using the correct modifier on the hero__body element: i.e. <strong>hero__body--is-medium</strong>, <strong>hero__body--is-large</strong></p>\n\n    <p>Example code goes here</p>\n\n  </div>\n</section>');
$templateCache.put('objects/abstract-views/objects-section.html','<section class="section">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item">\n        <p>Sections can contain anything and are useful for dividing pages into parts</p>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n  </div>\n</section>');
$templateCache.put('objects/abstract-views/objects-wrapper.html','<section class="section">\n  <div class="wrapper">\n    <div class="grid">\n      <div class="grid__item">\n        <p>Wrappers are <strong>automatically centered</strong> containers with a default restricted width of <strong>1200px</strong></p>\n      </div>\n      <div class="grid__item">\n        <p>Example code goes here</p>\n      </div>\n    </div>\n  </div>\n</section>');}]);