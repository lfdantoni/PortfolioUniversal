module.exports=function(n){function e(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=n,e.c=r,e.i=function(n){return n},e.d=function(n,e,r){Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=45)}([function(n,e){n.exports=require("@angular/core")},function(n,e,r){"use strict";function t(n,e){e.render("index",{req:n,res:e,ngModule:d.a,preboot:!1,baseUrl:"/",requestUrl:n.originalUrl,originUrl:n.hostname})}var a=r(12),i=(r.n(a),r(5)),o=(r.n(i),r(44)),s=(r.n(o),r(42)),l=(r.n(s),r(26)),c=(r.n(l),r(22)),p=(r.n(c),r(0)),d=(r.n(p),r(7)),u=r(11),f=r(13),h=s(),v=o.join(o.resolve(__dirname,"..")),g=process.env.PORT||4200;u.a.production&&r.i(p.enableProdMode)(),h.engine(".html",r.i(c.createEngine)({})),h.set("views",o.join(v,"client")),h.set("view engine","html"),h.use(l()),h.use("/",s.static(o.join(v,"client"),{index:!1})),h.get("/",t),f.a.forEach(function(n){h.get("/"+n,t),h.get("/"+n+"/*",t)}),h.get("*",function(n,e){e.setHeader("Content-Type","application/json");var r={status:404,message:"No Content"},t=JSON.stringify(r,null,2);e.status(404).send(t)}),h.listen(g,function(){console.log("Listening on port "+g)})},,,,function(n,e,r){var t=r(20),a=r(0),i=!1;a.hasOwnProperty("ViewUtils")||(i=!0,a.ViewUtils=a.view_utils),t.__compiler_private__||(i=!0,t.__compiler_private__={SelectorMatcher:t.SelectorMatcher,CssSelector:t.CssSelector});var o=r(23);i&&(o.ViewUtils=a.view_utils,o.CssSelector=t.CssSelector,o.SelectorMatcher=t.SelectorMatcher)},function(n,e,r){"use strict";var t=r(0);r.n(t);r.d(e,"a",function(){return o});var a=this&&this.__decorate||function(n,e,r,t){var a,i=arguments.length,o=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,r,t);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(o=(i<3?a(o):i>3?a(e,r,o):a(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},o=function(){function n(){}return n=a([r.i(t.Component)({selector:"app-root",template:r(17),styles:[r(14)]}),i("design:paramtypes",[])],n)}()},function(n,e,r){"use strict";var t=r(0),a=(r.n(t),r(24)),i=(r.n(a),r(21)),o=(r.n(i),r(9)),s=r(10),l=r(8);r.d(e,"a",function(){return d});var c=this&&this.__decorate||function(n,e,r,t){var a,i=arguments.length,o=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,r,t);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(o=(i<3?a(o):i>3?a(e,r,o):a(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},p=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},d=function(){function n(){}return n=c([r.i(t.NgModule)({bootstrap:[o.a],declarations:[o.a,s.a,l.a],imports:[a.UniversalModule,i.FormsModule]}),p("design:paramtypes",[])],n)}()},function(n,e,r){"use strict";var t=r(0);r.n(t);r.d(e,"a",function(){return o});var a=this&&this.__decorate||function(n,e,r,t){var a,i=arguments.length,o=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,r,t);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(o=(i<3?a(o):i>3?a(e,r,o):a(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},o=function(){function n(){}return n.prototype.ngOnInit=function(){},n=a([r.i(t.Component)({selector:"app-header",template:r(18),styles:[r(15)]}),i("design:paramtypes",[])],n)}()},function(n,e,r){"use strict";var t=r(6);r.d(e,"a",function(){return t.a})},function(n,e,r){"use strict";var t=r(0),a=(r.n(t),r(43));r.n(a);r.d(e,"a",function(){return s});var i=this&&this.__decorate||function(n,e,r,t){var a,i=arguments.length,o=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,r,t);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(o=(i<3?a(o):i>3?a(e,r,o):a(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},o=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},s=function(){function n(){this.sections=[{name:"Home",active:!0,hashTag:"home"},{name:"Skills",active:!1,hashTag:"skills"}],this.selected="#slidemenu, #page-content, body, .navbar, .navbar-header",this.dropDownOpen=!1}return n.prototype.ngOnInit=function(){this.activeSection=this.sections[0]},n.prototype.changeSection=function(n){this.activeSection.active=!1,this.activeSection=n,this.activeSection.active=!0},n.prototype.onResize=function(n){a(n.target).width()>767&&a(".navbar-toggle").is(":hidden")&&a(this.selected).removeClass("slide-active"),console.log(n.target.innerWidth)},n.prototype.dropToggle=function(n){n.preventDefault(),n.stopPropagation(),this.dropDownOpen=!this.dropDownOpen},n.prototype.toggleMenu=function(n){n.stopPropagation(),n.preventDefault();var e="#page-content",r=".navbar-header",t="80%",i="-100%",o="-80%",s=a(n.currentTarget).hasClass("slide-active");a("#slidemenu").stop().animate({left:s?i:"0px"}),a("#navbar-height-col").stop().animate({left:s?o:"0px"}),a(e).stop().animate({left:s?"0px":t}),a(r).stop().animate({left:s?"0px":t}),a(n.currentTarget).toggleClass("slide-active",!s),a("#slidemenu").toggleClass("slide-active"),a("#nav-icon2").toggleClass("open"),a("#page-content, .navbar, body, .navbar-header, .header").toggleClass("slide-active")},i([r.i(t.HostListener)("window:resize",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],n.prototype,"onResize",null),n=i([r.i(t.Component)({selector:"app-navigation",template:r(19),styles:[r(16)]}),o("design:paramtypes",[])],n)}()},function(n,e,r){"use strict";r.d(e,"a",function(){return t});var t={production:!0}},function(n,e,r){"use strict";var t=r(25),a=(r.n(t),r(40)),i=(r.n(a),r(33)),o=(r.n(i),r(29)),s=(r.n(o),r(35)),l=(r.n(s),r(34)),c=(r.n(l),r(32)),p=(r.n(c),r(31)),d=(r.n(p),r(39)),u=(r.n(d),r(28)),f=(r.n(u),r(27)),h=(r.n(f),r(37)),v=(r.n(h),r(30)),g=(r.n(v),r(38)),m=(r.n(g),r(36)),b=(r.n(m),r(41));r.n(b)},function(n,e,r){"use strict";r.d(e,"a",function(){return t});var t=[]},function(n,e){n.exports=""},function(n,e){n.exports=".header{\r\n    background-image:url(../assets/header.jpg);\r\n    background-repeat:no-repeat;\r\n    background-position:top center;\r\n    background-attachment:scroll;\r\n    min-height:500px;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_tagline{\r\n    font-size:1.5em;\r\n    line-height:1.6em;\r\n    text-transform:uppercase;\r\n    font-weight:600;\r\n    color:#ffa05c;\r\n    text-shadow:0px 0px 4px rgba(0, 0, 0, 1);\r\n    letter-spacing:1px;\r\n    margin:0;\r\n}\r\n\r\n.header .logo_wrap{\r\n    position:relative;\r\n    text-align:center;\r\n    margin-top:120px;\r\n    margin-bottom:90px;\r\n}\r\n\r\n.container{\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n    position:relative;\r\n}\r\n\r\n.header .logo_wrap .logo{\r\n    float:none !important;\r\n    display:inline-block;\r\n    padding:0;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_h{\r\n    position:relative;\r\n    display:inline-block;\r\n    margin-bottom:6px;\r\n}\r\n\r\n.logo h1{\r\n    font:bold 5em Orbitron;\r\n    color:#ffa05c;\r\n    text-shadow:0px 0px 18px rgba(0, 0, 0, 1);\r\n}\r\n#page-content{\r\n    position:relative;\r\n    padding-top:70px;\r\n    left:0;\r\n}\r\n#page-content.slide-active{\r\n    padding-top:0\r\n}\r\n\r\n\r\n@media (min-width:768px){ \r\n\t#page-content{\r\n\t    left:0!important;\r\n\t}\r\n}\r\n\r\n@media (max-width:767px){\r\n    .header{\r\n        overflow-x:hidden;\r\n    }\r\n    .header.slide-active{\r\n        overflow:hidden;\r\n    }\r\n    .logo h1{\r\n        font:bold 4em Orbitron;\r\n    }\r\n}"},function(n,e){n.exports=".navbar{\r\n    background:#424242;\r\n}\r\n\r\n.nav>li>a{\r\n    text-transform:uppercase;\r\n    border:none;\r\n    margin:0 17px;\r\n    font:bold 14px/20px Orbitron;\r\n    color:#ffffff;\r\n}\r\n\r\n.nav>li.active>a{\r\n    color:#ffa05c;\r\n    background-color:transparent;\r\n}\r\n\r\n.social{\r\n    float:right;\r\n    color:#ffffff;\r\n}\r\n.social li{\r\n    margin:0.4em 0.5em; \r\n}\r\n\r\n.social li a{\r\n    margin:0;\r\n    padding:0;\r\n}\r\n.no-margin-top{\r\n    margin-top:0px!important\r\n}\r\n#slide-nav .navbar-toggle{\r\n    cursor:pointer;\r\n    position:relative;\r\n    line-height:0;\r\n    float:left;\r\n    margin:0;\r\n    width:30px;\r\n    height:40px;\r\n    padding:10px 0 0 0;\r\n    border:0;\r\n    background:transparent;\r\n}\r\n#slide-nav .navbar-toggle > .icon-bar{\r\n    width:100%;\r\n    display:block;\r\n    height:3px;\r\n    margin:5px 0 0 0;\r\n}\r\n#slide-nav .navbar-toggle.slide-active .icon-bar{\r\n    background:orange\r\n}\r\n.navbar-header{\r\n    position:relative\r\n}\r\n.navbar.navbar-fixed-top.slide-active{\r\n    position:relative\r\n}\r\n\r\n@media (max-width:767px){ \r\n    #slide-nav.navbar-inverse #navbar-height-col{\r\n        background:#333;\r\n        z-index:1;\r\n        border:0;\r\n    }\r\n    #slide-nav #navbar-height-col{\r\n        position:fixed;\r\n        top:0;\r\n        height:100%;\r\n        width:80%;\r\n        left:-80%;\r\n        background:#eee;\r\n    }\r\n\r\n\t#slide-nav .container{\r\n\t    margin:0;\r\n\t    padding:0!important;\r\n\t}\r\n\t#slide-nav .navbar-header{\r\n\t    margin:0 auto;\r\n\t    padding:0 15px;\r\n\t}\r\n\t#slide-nav .navbar.slide-active{\r\n\t    position:absolute;\r\n\t    width:80%;\r\n\t    top:-1px;\r\n\t    z-index:1000;\r\n\t}\r\n\t#slide-nav #slidemenu{\r\n\t    background:#f7f7f7;\r\n\t    left:-100%;\r\n\t    width:80%;\r\n\t    min-width:0;\r\n\t    position:absolute;\r\n\t    padding-left:0;\r\n\t    z-index:2;\r\n\t    top:-8px;\r\n\t    margin:0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav{\r\n\t    min-width:0;\r\n\t    width:100%;\r\n\t    margin:0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav .dropdown-menu li a{\r\n\t    min-width:0;\r\n\t    width:80%;\r\n\t    white-space:normal;\r\n\t}\r\n\t#slide-nav{\r\n\t    border-top:0\r\n\t}\r\n\t#slide-nav.navbar-inverse #slidemenu{\r\n\t    background:#333\r\n\t}\r\n\t#slide-nav #navbar-height-col{\r\n\t    position:fixed;\r\n\t    top:0;\r\n\t    height:100%;\r\n\t    width:80%;\r\n\t    left:-80%;\r\n\t    background:#eee;\r\n\t}\r\n\t#slide-nav.navbar-inverse #navbar-height-col{\r\n\t    background:#333;\r\n\t    z-index:1;\r\n\t    border:0;\r\n\t}\r\n\t#slide-nav .navbar-form{\r\n\t    width:100%;\r\n\t    margin:8px 0;\r\n\t    text-align:center;\r\n\t    overflow:hidden;\r\n\t}\r\n\t#slide-nav .navbar-form .form-control{\r\n\t    text-align:center\r\n\t}\r\n\t#slide-nav .navbar-form .btn{\r\n\t    width:100%\r\n\t}\r\n    #nav-icon2{\r\n        width:60px;\r\n        position:relative;\r\n        margin:5px auto;\r\n        float:left;\r\n        -webkit-transform:rotate(0deg);\r\n        transform:rotate(0deg);\r\n        transition:.5s ease-in-out;\r\n        cursor:pointer;\r\n    }\r\n    \r\n    #nav-icon2 span{\r\n        display:block;\r\n        position:absolute;\r\n        width:23px;\r\n        height:5px;\r\n        background:white;\r\n        opacity:1;\r\n        -webkit-transform:rotate(0deg);\r\n        transform:rotate(0deg);\r\n        transition:.25s ease-in-out;\r\n    }\r\n\r\n    #nav-icon2.open span{\r\n        background:#d3531a;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(even){\r\n        left:35%;\r\n        border-radius:0 9px 9px 0;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(odd){\r\n        left:0px;\r\n        border-radius:9px 0 0 9px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2){\r\n        top:0px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4){\r\n        top:18px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6){\r\n        top:36px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6){\r\n        -webkit-transform:rotate(45deg);\r\n        transform:rotate(45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5){\r\n        -webkit-transform:rotate(-45deg);\r\n        transform:rotate(-45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1){\r\n        left:5px;\r\n        top:7px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2){\r\n        left:calc(50% - 9px);\r\n        top:9px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(3){\r\n        left:-50%;\r\n        opacity:0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(4){\r\n        left:100%;\r\n        opacity:0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(5){\r\n        left:5px;\r\n        top:25px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(6){\r\n        left:calc(50% - 7px);\r\n        top:25px;\r\n    }\r\n}\r\n@media (min-width:768px){ \r\n\t.navbar.navbar-fixed-top.slide-active{\r\n\t    position:fixed\r\n\t}\r\n\t.navbar-header{\r\n\t    left:0!important\r\n\t}\r\n}\r\n\r\n"},function(n,e){n.exports="<app-header>Loading...</app-header>"},function(n,e){n.exports='<header class="header">\n  <app-navigation>Loading...</app-navigation>\n  <div class="container" id="page-content">\n    <div class="row">\n      <div class="span12">\n          <div class="hashAncor" id="homePage"></div>\n          <div class="logo_wrap">\n            <div class="headerCover">\n              <!--<img src="https://livedemo00.template-help.com/wordpress_49158/wp-content/themes/theme49158/images/header_extra_image.png" alt="">-->\n            </div>\n            <div class="logo pull-left">\n              <h1>Leonardo D\'Antoni</h1>\n              <p class="logo_tagline">Construllendo maravillosas experiencias web</p>\n            </div>\n          </div>\n      </div>\n    </div>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quam animi voluptates delectus, nulla rem incidunt ab nostrum consequuntur, recusandae quod reiciendis a placeat, quia voluptatibus ullam ducimus, ratione molestiae?\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repellat rem similique cupiditate consectetur saepe necessitatibus consequatur quis, quibusdam mollitia dolorum modi in voluptas quia pariatur quod numquam enim animi!</p>\n  </div>\n</header>'},function(n,e){n.exports='<!--<nav class="navbar navbar-default navbar-fixed-top">\n  <div class="container">\n    <ul class="nav navbar-nav">\n      <li class="" [ngClass]="{\'active\': section.active}" *ngFor="let section of sections">\n        <a href="#{{section.hashTag}}" (click)="changeSection(section)">{{section.name}}</a>\n      </li>\n    </ul>\n\n    <ul class="nav navbar-nav social">\n      <li> <a href="https://www.linkedin.com/in/leonardo-dantoni-93aba422/" target="_blank"><span class="fa fa-linkedin fa-3x"></span></a> </li>\n      <li><a href="https://www.facebook.com/leonardo.dantoni" target="_blank"><span class="fa fa-facebook fa-3x"></span></a></li>\n      <li><a href="https://twitter.com/lfdantoni" target="_blank"><span class="fa fa-twitter fa-3x"></span></a></li>\n      <li><a href="https://github.com/lfdantoni" target="_blank"><span class="fa fa-github-alt fa-3x"></span></a></li>\n    </ul>\n  </div>\n</nav>-->\n\n\n <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">\n  <div class="container">\n   <div class="navbar-header">\n    <!--<a class="navbar-toggle"  (click)="toggleMenu($event)"> \n      <span class="sr-only">Toggle navigation</span>\n      <span class="icon-bar"></span>\n      <span class="icon-bar"></span>\n      <span class="icon-bar"></span>\n     </a>-->\n     <div id="nav-icon2" (click)="toggleMenu($event)">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <a class="navbar-brand" href="#">LD</a>\n   </div>\n   <div id="slidemenu">\n    <form class="navbar-form navbar-right" role="form">\n      <div class="form-group">\n        <input type="search" placeholder="search" class="form-control">\n      </div>\n      <button type="submit" class="btn btn-primary">Search</button>\n    </form>\n     \n    <ul class="nav navbar-nav">\n     <li class="active"><a href="#">Home</a></li>\n     <li><a href="#about">About</a></li>\n     <li><a href="#contact">Contact</a></li>\n     <li class="dropdown" [class.open]="dropDownOpen">\n      <a href="#" class="dropdown-toggle" data-toggle="dropdown" (click)="dropToggle($event)">Dropdown <span class="caret"></span></a>\n      <ul class="dropdown-menu">\n       <li><a href="#">Action</a></li>\n       <li><a href="#">Another action</a></li>\n       <li><a href="#">Something else here</a></li>\n       <li class="divider"></li>\n       <li class="dropdown-header">Nav header</li>\n       <li><a href="#">Separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">Action</a></li>\n       <li><a href="#">Another action</a></li>\n       <li><a href="#">Something else here</a></li>\n       <li class="divider"></li>\n       <li class="dropdown-header">Nav header</li>\n       <li><a href="#">Separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">Action</a></li>\n       <li><a href="#">Another action</a></li>\n       <li><a href="#">Something else here</a></li>\n       <li class="divider"></li>\n       <li class="dropdown-header">Nav header</li>\n       <li><a href="#">Separated link test long title goes here</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n       <li><a href="#">One more separated link</a></li>\n      </ul>\n     </li>\n    </ul>\n          \n   </div>\n   <div id="navbar-height-col"></div>\n  </div>\n </div>'},function(n,e){n.exports=require("@angular/compiler")},function(n,e){n.exports=require("@angular/forms")},function(n,e){n.exports=require("angular2-express-engine")},function(n,e){n.exports=require("angular2-platform-node/__private_imports__")},function(n,e){n.exports=require("angular2-universal")},function(n,e){n.exports=require("angular2-universal-polyfills")},function(n,e){n.exports=require("compression")},function(n,e){n.exports=require("core-js/es6/array")},function(n,e){n.exports=require("core-js/es6/date")},function(n,e){n.exports=require("core-js/es6/function")},function(n,e){n.exports=require("core-js/es6/map")},function(n,e){n.exports=require("core-js/es6/math")},function(n,e){n.exports=require("core-js/es6/number")},function(n,e){n.exports=require("core-js/es6/object")},function(n,e){n.exports=require("core-js/es6/parse-float")},function(n,e){n.exports=require("core-js/es6/parse-int")},function(n,e){n.exports=require("core-js/es6/reflect")},function(n,e){n.exports=require("core-js/es6/regexp")},function(n,e){n.exports=require("core-js/es6/set")},function(n,e){n.exports=require("core-js/es6/string")},function(n,e){n.exports=require("core-js/es6/symbol")},function(n,e){n.exports=require("core-js/es7/reflect")},function(n,e){n.exports=require("express")},function(n,e){n.exports=require("jquery")},function(n,e){n.exports=require("path")},function(n,e,r){n.exports=r(1)}]);
//# sourceMappingURL=server.bundle.js.map