webpackJsonp([0,3],{330:function(n,r){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=330},331:function(n,r,e){"use strict";var t=e(440),a=(e.n(t),e(432)),i=(e.n(a),e(0)),o=e(439),l=e(289),s=(e.n(l),e(434));o.a.production&&e.i(i.enableProdMode)();var c=e.i(l.platformUniversalDynamic)();c.bootstrapModule(s.a)},432:function(n,r,e){var t=e(58),a=e(0),i=!1;a.hasOwnProperty("ViewUtils")||(i=!0,a.ViewUtils=a.view_utils),t.__compiler_private__||(i=!0,t.__compiler_private__={SelectorMatcher:t.SelectorMatcher,CssSelector:t.CssSelector});var o=e(441);i&&(o.ViewUtils=a.view_utils,o.CssSelector=t.CssSelector,o.SelectorMatcher=t.SelectorMatcher)},433:function(n,r,e){"use strict";var t=e(0);e.d(r,"a",function(){return o});var a=this&&this.__decorate||function(n,r,e,t){var a,i=arguments.length,o=i<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,r,e,t);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(o=(i<3?a(o):i>3?a(r,e,o):a(r,e))||o);return i>3&&o&&Object.defineProperty(r,e,o),o},i=this&&this.__metadata||function(n,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,r)},o=function(){function n(){}return n.prototype.ngOnInit=function(){},n=a([e.i(t.Component)({selector:"app-about",template:e(607),styles:[e(603)]}),i("design:paramtypes",[])],n)}()},434:function(n,r,e){"use strict";var t=e(0),a=e(289),i=(e.n(a),e(406)),o=e(437),l=e(438),s=e(436),c=e(433);e.d(r,"a",function(){return f});var p=this&&this.__decorate||function(n,r,e,t){var a,i=arguments.length,o=i<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,r,e,t);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(o=(i<3?a(o):i>3?a(r,e,o):a(r,e))||o);return i>3&&o&&Object.defineProperty(r,e,o),o},d=this&&this.__metadata||function(n,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,r)},f=function(){function n(){}return n=p([e.i(t.NgModule)({bootstrap:[o.a],declarations:[o.a,l.a,s.a,c.a],imports:[a.UniversalModule,i.a]}),d("design:paramtypes",[])],n)}()},435:function(n,r,e){"use strict";var t=e(0);e.d(r,"a",function(){return o});var a=this&&this.__decorate||function(n,r,e,t){var a,i=arguments.length,o=i<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,r,e,t);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(o=(i<3?a(o):i>3?a(r,e,o):a(r,e))||o);return i>3&&o&&Object.defineProperty(r,e,o),o},i=this&&this.__metadata||function(n,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,r)},o=function(){function n(){}return n=a([e.i(t.Component)({selector:"app-root",template:e(608),styles:[e(604)]}),i("design:paramtypes",[])],n)}()},436:function(n,r,e){"use strict";var t=e(0);e.d(r,"a",function(){return o});var a=this&&this.__decorate||function(n,r,e,t){var a,i=arguments.length,o=i<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,r,e,t);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(o=(i<3?a(o):i>3?a(r,e,o):a(r,e))||o);return i>3&&o&&Object.defineProperty(r,e,o),o},i=this&&this.__metadata||function(n,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,r)},o=function(){function n(){}return n.prototype.ngOnInit=function(){},n=a([e.i(t.Component)({selector:"app-header",template:e(609),styles:[e(605)]}),i("design:paramtypes",[])],n)}()},437:function(n,r,e){"use strict";var t=e(435);e.d(r,"a",function(){return t.a})},438:function(n,r,e){"use strict";var t=e(0),a=e(600);e.n(a);e.d(r,"a",function(){return l});var i=this&&this.__decorate||function(n,r,e,t){var a,i=arguments.length,o=i<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,r,e,t);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(o=(i<3?a(o):i>3?a(r,e,o):a(r,e))||o);return i>3&&o&&Object.defineProperty(r,e,o),o},o=this&&this.__metadata||function(n,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,r)},l=function(){function n(){this.sections=[{name:"Home",active:!0,hashTag:"home"},{name:"Skills",active:!1,hashTag:"skills"}],this.selected="#slidemenu, #page-content, body, .navbar, .navbar-header",this.dropDownOpen=!1}return n.prototype.ngOnInit=function(){this.activeSection=this.sections[0]},n.prototype.changeSection=function(n){this.activeSection.active=!1,this.activeSection=n,this.activeSection.active=!0},n.prototype.onResize=function(n){a(n.target).width()>767&&a(".navbar-toggle").is(":hidden")&&a(this.selected).removeClass("slide-active"),console.log(n.target.innerWidth)},n.prototype.dropToggle=function(n){n.preventDefault(),n.stopPropagation(),this.dropDownOpen=!this.dropDownOpen},n.prototype.toggleMenu=function(n){n.stopPropagation(),n.preventDefault();var r="#page-content",e=".navbar-header",t="80%",i="-100%",o="-80%",l=a(n.currentTarget).hasClass("slide-active");a("#slidemenu").stop().animate({left:l?i:"0px"}),a("#navbar-height-col").stop().animate({left:l?o:"0px"}),a(r).stop().animate({left:l?"0px":t}),a(e).stop().animate({left:l?"0px":t}),a(n.currentTarget).toggleClass("slide-active",!l),a("#slidemenu").toggleClass("slide-active"),a("#nav-icon2").toggleClass("open"),a("#page-content, .navbar, body, .navbar-header, .header").toggleClass("slide-active")},i([e.i(t.HostListener)("window:resize",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],n.prototype,"onResize",null),n=i([e.i(t.Component)({selector:"app-navigation",template:e(610),styles:[e(606)]}),o("design:paramtypes",[])],n)}()},439:function(n,r,e){"use strict";e.d(r,"a",function(){return t});var t={production:!0}},440:function(n,r,e){"use strict";var t=e(442),a=(e.n(t),e(460)),i=(e.n(a),e(453)),o=(e.n(i),e(449)),l=(e.n(o),e(455)),s=(e.n(l),e(454)),c=(e.n(s),e(452)),p=(e.n(c),e(451)),d=(e.n(p),e(459)),f=(e.n(d),e(448)),h=(e.n(f),e(447)),u=(e.n(h),e(457)),v=(e.n(u),e(450)),g=(e.n(v),e(458)),m=(e.n(g),e(456)),b=(e.n(m),e(461));e.n(b)},603:function(n,r){n.exports=".about{\r\n    background-color:#b3a58b;\r\n    color:white;\r\n}\r\n\r\n.alignleft{\r\n    float:left;\r\n    margin:5px 20px 10px 0;\r\n}\r\n\r\n.extra-block-1 p{\r\n    margin-bottom:26px;\r\n}\r\n\r\nh2{\r\n    font:bold 66px/70px Orbitron;\r\n    color:#ffa05c;\r\n}\r\n.extra-block-1 h3{\r\n    font-family:Open Sans;\r\n    font-weight:600;\r\n    text-transform:uppercase;\r\n    margin-bottom:0;\r\n}\r\nh3{\r\n    font:bold 18px/22px Orbitron;\r\n}\r\n.extra-block-1 h3:after{\r\n    content:'';\r\n    display:block;\r\n    max-width:570px;\r\n    height:5px;\r\n    margin:26px auto 54px;\r\n    background-color:black;\r\n}\r\n.me-photo{\r\n    border-radius:50% 50%;\r\n}\r\n\r\n@media (max-width: 767px){\r\n    .about{\r\n        margin:0;\r\n    }\r\n    .me-photo{\r\n        max-width:100%;\r\n    }\r\n}"},604:function(n,r){n.exports=""},605:function(n,r){n.exports=".header{\r\n    background-image:url(../assets/header.jpg);\r\n    background-repeat:no-repeat;\r\n    background-position:top center;\r\n    background-attachment:scroll;\r\n    min-height:500px;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_tagline{\r\n    font-size:1.5em;\r\n    line-height:1.6em;\r\n    text-transform:uppercase;\r\n    font-weight:600;\r\n    color:#ffa05c;\r\n    text-shadow:0px 0px 4px rgba(0, 0, 0, 1);\r\n    letter-spacing:1px;\r\n    margin:0;\r\n}\r\n\r\n.header .logo_wrap{\r\n    position:relative;\r\n    text-align:center;\r\n    margin-top:120px;\r\n    margin-bottom:90px;\r\n}\r\n\r\n.container{\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n    position:relative;\r\n}\r\n\r\n.header .logo_wrap .logo{\r\n    float:none !important;\r\n    display:inline-block;\r\n    padding:0;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_h{\r\n    position:relative;\r\n    display:inline-block;\r\n    margin-bottom:6px;\r\n}\r\n\r\n.logo h1{\r\n    font:bold 5em Orbitron;\r\n    color:#ffa05c;\r\n    text-shadow:0px 0px 18px rgba(0, 0, 0, 1);\r\n}\r\n#page-content{\r\n    position:relative;\r\n    padding-top:70px;\r\n    left:0;\r\n}\r\n#page-content.slide-active{\r\n    padding-top:0\r\n}\r\n\r\n\r\n@media (min-width:768px){ \r\n\t#page-content{\r\n\t    left:0!important;\r\n\t}\r\n}\r\n\r\n@media (max-width:767px){\r\n    .header{\r\n        overflow-x:hidden;\r\n    }\r\n    .header.slide-active{\r\n        overflow:hidden;\r\n    }\r\n    .logo h1{\r\n        font:bold 4em Orbitron;\r\n    }\r\n}"},606:function(n,r){n.exports=".navbar{\r\n    background:#424242;\r\n}\r\n\r\n.nav>li>a{\r\n    text-transform:uppercase;\r\n    border:none;\r\n    margin:0 17px;\r\n    font:bold 14px/20px Orbitron;\r\n    color:#ffffff;\r\n}\r\n\r\n.nav>li.active>a{\r\n    color:#ffa05c;\r\n    background-color:transparent;\r\n}\r\n\r\n.social{\r\n    float:right;\r\n    color:#ffffff;\r\n}\r\n.social li{\r\n    margin:0.4em 0.5em; \r\n}\r\n\r\n.social li a{\r\n    margin:0;\r\n    padding:0;\r\n}\r\n.no-margin-top{\r\n    margin-top:0px!important\r\n}\r\n#slide-nav .navbar-toggle{\r\n    cursor:pointer;\r\n    position:relative;\r\n    line-height:0;\r\n    float:left;\r\n    margin:0;\r\n    width:30px;\r\n    height:40px;\r\n    padding:10px 0 0 0;\r\n    border:0;\r\n    background:transparent;\r\n}\r\n#slide-nav .navbar-toggle > .icon-bar{\r\n    width:100%;\r\n    display:block;\r\n    height:3px;\r\n    margin:5px 0 0 0;\r\n}\r\n#slide-nav .navbar-toggle.slide-active .icon-bar{\r\n    background:orange\r\n}\r\n.navbar-header{\r\n    position:relative\r\n}\r\n.navbar.navbar-fixed-top.slide-active{\r\n    position:relative\r\n}\r\n\r\n@media (max-width:767px){ \r\n    .social{\r\n        float:none;\r\n        text-align:center;\r\n    }\r\n    #slidemenu.slide-active{\r\n        height:500px;\r\n        overflow-y:scroll; \r\n    }\r\n    #slide-nav.navbar-inverse #navbar-height-col{\r\n        background:#333;\r\n        z-index:1;\r\n        border:0;\r\n    }\r\n    #slide-nav #navbar-height-col{\r\n        position:fixed;\r\n        top:0;\r\n        height:100%;\r\n        width:80%;\r\n        left:-80%;\r\n        background:#eee;\r\n    }\r\n\r\n\t#slide-nav .container{\r\n\t    margin:0;\r\n\t    padding:0!important;\r\n\t}\r\n\t#slide-nav .navbar-header{\r\n\t    margin:0 auto;\r\n\t    padding:0 15px;\r\n\t}\r\n\t#slide-nav .navbar.slide-active{\r\n\t    position:absolute;\r\n\t    width:80%;\r\n\t    top:-1px;\r\n\t    z-index:1000;\r\n\t}\r\n\t#slide-nav #slidemenu{\r\n\t    background:#f7f7f7;\r\n\t    left:-100%;\r\n\t    width:80%;\r\n\t    min-width:0;\r\n\t    position:absolute;\r\n\t    padding-left:0;\r\n\t    z-index:2;\r\n\t    top:-8px;\r\n\t    margin:0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav{\r\n\t    min-width:0;\r\n\t    width:100%;\r\n\t    margin:20px 0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav .dropdown-menu li a{\r\n\t    min-width:0;\r\n\t    width:80%;\r\n\t    white-space:normal;\r\n\t}\r\n\t#slide-nav{\r\n\t    border-top:0\r\n\t}\r\n    #slide-nav.slide-active{\r\n\t    position:fixed;\r\n\t}\r\n\t#slide-nav.navbar-inverse #slidemenu{\r\n\t    background:#333\r\n\t}\r\n\t#slide-nav #navbar-height-col{\r\n\t    position:fixed;\r\n\t    top:0;\r\n\t    height:100%;\r\n\t    width:80%;\r\n\t    left:-80%;\r\n\t    background:#eee;\r\n\t}\r\n\t#slide-nav.navbar-inverse #navbar-height-col{\r\n\t    background:#333;\r\n\t    z-index:1;\r\n\t    border:0;\r\n\t}\r\n\t#slide-nav .navbar-form{\r\n\t    width:100%;\r\n\t    margin:8px 0;\r\n\t    text-align:center;\r\n\t    overflow:hidden;\r\n\t}\r\n\t#slide-nav .navbar-form .form-control{\r\n\t    text-align:center\r\n\t}\r\n\t#slide-nav .navbar-form .btn{\r\n\t    width:100%\r\n\t}\r\n    #nav-icon2{\r\n        width:60px;\r\n        position:relative;\r\n        margin:5px auto;\r\n        float:left;\r\n        -webkit-transform:rotate(0deg);\r\n        transform:rotate(0deg);\r\n        transition:.5s ease-in-out;\r\n        cursor:pointer;\r\n    }\r\n    \r\n    #nav-icon2 span{\r\n        display:block;\r\n        position:absolute;\r\n        width:23px;\r\n        height:5px;\r\n        background:white;\r\n        opacity:1;\r\n        -webkit-transform:rotate(0deg);\r\n        transform:rotate(0deg);\r\n        transition:.25s ease-in-out;\r\n    }\r\n\r\n    #nav-icon2.open span{\r\n        background:#d3531a;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(even){\r\n        left:35%;\r\n        border-radius:0 9px 9px 0;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(odd){\r\n        left:0px;\r\n        border-radius:9px 0 0 9px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2){\r\n        top:0px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4){\r\n        top:18px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6){\r\n        top:36px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6){\r\n        -webkit-transform:rotate(45deg);\r\n        transform:rotate(45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5){\r\n        -webkit-transform:rotate(-45deg);\r\n        transform:rotate(-45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1){\r\n        left:5px;\r\n        top:7px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2){\r\n        left:calc(50% - 9px);\r\n        top:9px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(3){\r\n        left:-50%;\r\n        opacity:0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(4){\r\n        left:100%;\r\n        opacity:0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(5){\r\n        left:5px;\r\n        top:25px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(6){\r\n        left:calc(50% - 7px);\r\n        top:25px;\r\n    }\r\n}\r\n@media (min-width:768px){ \r\n\t.navbar.navbar-fixed-top.slide-active{\r\n\t    position:fixed\r\n\t}\r\n\t.navbar-header{\r\n\t    left:0!important\r\n\t}\r\n}\r\n\r\n"},607:function(n,r){n.exports='<div class="row about">\r\n  <div class="col-md-1 col-xs-0"></div>\r\n  <div class="extra-wrap extra-block-1 col-md-10 col-xs-12">\r\n    <h2 style="text-align: center;">About me</h2>\r\n    <h3 style="text-align: center;">Sam Kromstain – a Web Designer &amp; Web Developer from Los Angeles</h3>\r\n    <p><img class="alignleft me-photo" alt="about-photo" src="../assets/me.jpg"></p>\r\n    <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor.Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissimpulvin ar alorem. Vestibulum sed anonsectetur adipiscing elit.</p>\r\n    <p>Cras eros nulla, porta ut est in, cursus egestas velit. Cras quis bibendum odio, in condimentum ante. Aliquam gravida mauris sed imperdiet porttitor. Vestibulum feugiat nulla id massa porta varius. Phasellus dui sem, volutpat quis dignissim vitae, auc tor quis nunc. Duis malesuada, elit necfaucibus feugiat, ligula arcu porta erat, quis molestie justo nulla</p>\r\n    <a href="https://livedemo00.template-help.com/wordpress_49158/portfolio/portfolio-3/" class="btn ">view my works</a>\r\n  </div>\r\n  <div class="col-md-1 col-xs-0"></div>\r\n</div>\r\n'},608:function(n,r){n.exports="<app-header>Loading...</app-header>\r\n<app-about></app-about>"},609:function(n,r){n.exports='<header class="header">\r\n  <app-navigation>Loading...</app-navigation>\r\n  <div class="container" id="page-content">\r\n    <div class="row">\r\n      <div class="span12">\r\n          <div class="hashAncor" id="homePage"></div>\r\n          <div class="logo_wrap">\r\n            <div class="headerCover">\r\n              <!--<img src="https://livedemo00.template-help.com/wordpress_49158/wp-content/themes/theme49158/images/header_extra_image.png" alt="">-->\r\n            </div>\r\n            <div class="logo pull-left">\r\n              <h1>Leonardo D\'Antoni</h1>\r\n              <p class="logo_tagline">Construllendo maravillosas experiencias web</p>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n </div>\r\n</header>'},610:function(n,r){n.exports='<!--<nav class="navbar navbar-default navbar-fixed-top">\r\n  <div class="container">\r\n    <ul class="nav navbar-nav">\r\n      <li class="" [ngClass]="{\'active\': section.active}" *ngFor="let section of sections">\r\n        <a href="#{{section.hashTag}}" (click)="changeSection(section)">{{section.name}}</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class="nav navbar-nav social">\r\n      <li> <a href="https://www.linkedin.com/in/leonardo-dantoni-93aba422/" target="_blank"><span class="fa fa-linkedin fa-3x"></span></a> </li>\r\n      <li><a href="https://www.facebook.com/leonardo.dantoni" target="_blank"><span class="fa fa-facebook fa-3x"></span></a></li>\r\n      <li><a href="https://twitter.com/lfdantoni" target="_blank"><span class="fa fa-twitter fa-3x"></span></a></li>\r\n      <li><a href="https://github.com/lfdantoni" target="_blank"><span class="fa fa-github-alt fa-3x"></span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>-->\r\n\r\n\r\n <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">\r\n  <div class="container">\r\n   <div class="navbar-header">\r\n    <!--<a class="navbar-toggle"  (click)="toggleMenu($event)"> \r\n      <span class="sr-only">Toggle navigation</span>\r\n      <span class="icon-bar"></span>\r\n      <span class="icon-bar"></span>\r\n      <span class="icon-bar"></span>\r\n     </a>-->\r\n     <div id="nav-icon2" (click)="toggleMenu($event)">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <a class="navbar-brand" href="#">LD</a>\r\n   </div>\r\n   <div id="slidemenu">\r\n    <!--<form class="navbar-form navbar-right" role="form">\r\n      <div class="form-group">\r\n        <input type="search" placeholder="search" class="form-control">\r\n      </div>\r\n      <button type="submit" class="btn btn-primary">Search</button>\r\n    </form>-->\r\n     \r\n    <ul class="nav navbar-nav">\r\n      <li class="" [ngClass]="{\'active\': section.active}" *ngFor="let section of sections">\r\n        <a href="#{{section.hashTag}}" (click)="changeSection(section)">{{section.name}}</a>\r\n      </li>\r\n     <!--<li class="active"><a href="#">Home</a></li>\r\n     <li><a href="#about">About</a></li>\r\n     <li><a href="#contact">Contact</a></li>\r\n     <li class="dropdown" [class.open]="dropDownOpen">\r\n      <a href="#" class="dropdown-toggle" data-toggle="dropdown" (click)="dropToggle($event)">Dropdown <span class="caret"></span></a>\r\n      <ul class="dropdown-menu">\r\n       <li><a href="#">Action</a></li>\r\n       <li><a href="#">Another action</a></li>\r\n       <li><a href="#">Something else here</a></li>\r\n       <li class="divider"></li>\r\n       <li class="dropdown-header">Nav header</li>\r\n       <li><a href="#">Separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">Action</a></li>\r\n       <li><a href="#">Another action</a></li>\r\n       <li><a href="#">Something else here</a></li>\r\n       <li class="divider"></li>\r\n       <li class="dropdown-header">Nav header</li>\r\n       <li><a href="#">Separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">Action</a></li>\r\n       <li><a href="#">Another action</a></li>\r\n       <li><a href="#">Something else here</a></li>\r\n       <li class="divider"></li>\r\n       <li class="dropdown-header">Nav header</li>\r\n       <li><a href="#">Separated link test long title goes here</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n       <li><a href="#">One more separated link</a></li>\r\n      </ul>\r\n     </li>-->\r\n    </ul>\r\n    <ul class="nav navbar-nav social">\r\n      <li> <a href="https://www.linkedin.com/in/leonardo-dantoni-93aba422/" target="_blank"><span class="fa fa-linkedin fa-3x"></span></a> </li>\r\n      <li><a href="https://www.facebook.com/leonardo.dantoni" target="_blank"><span class="fa fa-facebook fa-3x"></span></a></li>\r\n      <li><a href="https://twitter.com/lfdantoni" target="_blank"><span class="fa fa-twitter fa-3x"></span></a></li>\r\n      <li><a href="https://github.com/lfdantoni" target="_blank"><span class="fa fa-github-alt fa-3x"></span></a></li>\r\n    </ul>\r\n          \r\n   </div>\r\n   <div id="navbar-height-col"></div>\r\n  </div>\r\n </div>'},626:function(n,r){},627:function(n,r,e){n.exports=e(331)}},[627]);
//# sourceMappingURL=client.349e9aedfd1573a46503.bundle.map