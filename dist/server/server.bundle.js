module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(14);










// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_4_compression__());
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_9__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/server.js.map

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(23);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(26);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/__2.1.1.workaround.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(19),
            styles: [__webpack_require__(15)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/about.component.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(20),
            styles: [__webpack_require__(16)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/app.component.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ring_ring_component__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_7__ring_ring_component__["a" /* RingComponent */]],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * NodeModule, NodeHttpModule, NodeJsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/app.node.module.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(21),
            styles: [__webpack_require__(17)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/header.component.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/index.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent() {
        this.sections = [{ name: 'Home', active: true, hashTag: 'home' }, { name: 'Skills', active: false, hashTag: 'skills' }];
        this.selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
        this.dropDownOpen = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.activeSection = this.sections[0];
    };
    NavigationComponent.prototype.changeSection = function (section) {
        this.activeSection.active = false;
        this.activeSection = section;
        this.activeSection.active = true;
    };
    NavigationComponent.prototype.onResize = function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__(event.target).width() > 767 && __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar-toggle').is(':hidden')) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(this.selected).removeClass('slide-active');
        }
        // console.log($('.navbar-toggle'));
        console.log(event.target.innerWidth);
    };
    NavigationComponent.prototype.dropToggle = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dropDownOpen = !this.dropDownOpen;
    };
    NavigationComponent.prototype.toggleMenu = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        //stick in the fixed 100% height behind the navbar but don't wrap it
        //$('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));
        // Enter your ids or classes
        var toggler = '.navbar-toggle';
        var pagewrapper = '#page-content';
        var navigationwrapper = '.navbar-header';
        var menuwidth = '100%'; // the menu inside the slide menu itself
        var slidewidth = '80%';
        var menuneg = '-100%';
        var slideneg = '-80%';
        var selected = __WEBPACK_IMPORTED_MODULE_1_jquery__($event.currentTarget).hasClass('slide-active');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__($event.currentTarget).toggleClass('slide-active', !selected);
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#slidemenu').toggleClass('slide-active');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#nav-icon2').toggleClass('open');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#page-content, .navbar, body, .navbar-header, .header').toggleClass('slide-active');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NavigationComponent.prototype, "onResize", null);
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(22),
            styles: [__webpack_require__(18)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/navigation.component.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/environment.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/polyfills.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [];
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/server.routes.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = ".about{\n    background-color: #b3a58b;\n    color: white;\n}\n\n.alignleft {\n    float: left;\n    margin: 5px 20px 10px 0;\n}\n\n.extra-block-1 p {\n    margin-bottom: 26px;\n}\n\nh2{\n    font: bold 66px/70px Orbitron;\n    color: #ffa05c;\n}\n.extra-block-1 h3 {\n    font-family: Open Sans;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin-bottom: 0;\n}\nh3 {\n    font: bold 18px/22px Orbitron;\n}\n.extra-block-1 h3:after {\n    content: '';\n    display: block;\n    max-width: 570px;\n    height: 5px;\n    margin: 26px auto 54px;\n    background-color: black;\n}\n.me-photo{\n    border-radius: 50% 50%;\n}\n\n@media (max-width: 767px){\n    .about{\n        margin: 0;\n    }\n    .me-photo{\n        max-width: 100%;\n    }\n}"

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = ".header {\n    background-image: url(../assets/header.jpg);\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-attachment: scroll;\n    min-height: 500px;\n}\n\n.header .logo_wrap .logo .logo_tagline {\n    font-size: 1.5em;\n    line-height: 1.6em;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: #ffa05c;\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);\n    letter-spacing: 1px;\n    margin: 0;\n}\n\n.header .logo_wrap {\n    position: relative;\n    text-align: center;\n    margin-top: 120px;\n    margin-bottom: 90px;\n}\n\n.container {\n    margin-right: auto;\n    margin-left: auto;\n    position: relative;\n}\n\n.header .logo_wrap .logo {\n    float: none !important;\n    display: inline-block;\n    padding: 0;\n}\n\n.header .logo_wrap .logo .logo_h {\n    position: relative;\n    display: inline-block;\n    margin-bottom: 6px;\n}\n\n.logo h1{\n    font: bold 5em Orbitron;\n    color: #ffa05c;\n    text-shadow: 0px 0px 18px rgba(0, 0, 0, 1);\n}\n\n/*wrap the entire page content but not nav inside this div if not a fixed top, don't add any top padding */\n#page-content {\n    position: relative;\n    padding-top: 70px;\n    left: 0;\n}\n#page-content.slide-active {\n    padding-top: 0\n}\n\n\n@media (min-width:768px) { \n\t#page-content {\n\t    left: 0!important;\n\t}\n}\n\n@media (max-width:767px){\n    .header{\n        overflow-x: hidden;\n    }\n    .header.slide-active{\n        overflow: hidden;\n    }\n    .logo h1{\n        font: bold 4em Orbitron;\n    }\n}"

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = ".navbar{\n    background: #424242;\n}\n\n.nav>li>a {\n    text-transform: uppercase;\n    border: none;\n    margin: 0 17px;\n    font: bold 14px/20px Orbitron;\n    color: #ffffff;\n}\n\n.nav>li.active>a {\n    color: #ffa05c;\n    background-color: transparent;\n}\n\n.social{\n    color: #ffffff;\n    margin-right: 0;\n}\n.social li{\n    margin: 0.4em 0.5em; \n}\n\n.social li a{\n    margin: 0;\n    padding: 0;\n}\n\n\n\n\n\n/*first child of #page-content so it doesn't shift around*/\n.no-margin-top {\n    margin-top: 0px!important\n}\n\n/* put toggle bars on the left :: not using button */\n#slide-nav .navbar-toggle {\n    cursor: pointer;\n    position: relative;\n    line-height: 0;\n    float: left;\n    margin: 0;\n    width: 30px;\n    height: 40px;\n    padding: 10px 0 0 0;\n    border: 0;\n    background: transparent;\n}\n/* icon bar prettyup - optional */\n#slide-nav .navbar-toggle > .icon-bar {\n    width: 100%;\n    display: block;\n    height: 3px;\n    margin: 5px 0 0 0;\n}\n#slide-nav .navbar-toggle.slide-active .icon-bar {\n    background: orange\n}\n.navbar-header {\n    position: relative\n}\n/* un fix the navbar when active so that all the menu items are accessible */\n.navbar.navbar-fixed-top.slide-active {\n    position: relative\n}\n\n@media (max-width:767px) { \n    .social{\n        float: none;\n        text-align: center;\n    }\n    #slidemenu.slide-active{\n        height: 500px;\n        overflow-y: scroll; \n    }\n    #slide-nav.navbar-inverse #navbar-height-col {\n        background: #333;\n        z-index: 1;\n        border: 0;\n    }\n    #slide-nav #navbar-height-col {\n        position: fixed;\n        top: 0;\n        height: 100%;\n        width: 80%;\n        left: -80%;\n        background: #eee;\n    }\n\n\t#slide-nav .container {\n\t    margin: 0;\n\t    padding: 0!important;\n\t}\n\t#slide-nav .navbar-header {\n\t    margin: 0 auto;\n\t    padding: 0 15px;\n\t}\n\t#slide-nav .navbar.slide-active {\n\t    position: absolute;\n\t    width: 80%;\n\t    top: -1px;\n\t    z-index: 1000;\n\t}\n\t#slide-nav #slidemenu {\n\t    background: #f7f7f7;\n\t    left: -100%;\n\t    width: 80%;\n\t    min-width: 0;\n\t    position: absolute;\n\t    padding-left: 0;\n\t    z-index: 2;\n\t    top: -8px;\n\t    margin: 0;\n\t}\n\t#slide-nav #slidemenu .navbar-nav {\n\t    min-width: 0;\n\t    width: 100%;\n\t    margin: 20px 0;\n\t}\n\t#slide-nav #slidemenu .navbar-nav .dropdown-menu li a {\n\t    min-width: 0;\n\t    width: 80%;\n\t    white-space: normal;\n\t}\n\t#slide-nav {\n\t    border-top: 0\n\t}\n    #slide-nav.slide-active {\n\t    position: fixed;\n\t}\n\t#slide-nav.navbar-inverse #slidemenu {\n\t    background: #333\n\t}\n\t/* this is behind the navigation but the navigation is not inside it so that the navigation is accessible and scrolls*/\n\t#slide-nav #navbar-height-col {\n\t    position: fixed;\n\t    top: 0;\n\t    height: 100%;\n\t    width: 80%;\n\t    left: -80%;\n\t    background: #eee;\n\t}\n\t#slide-nav.navbar-inverse #navbar-height-col {\n\t    background: #333;\n\t    z-index: 1;\n\t    border: 0;\n\t}\n\t#slide-nav .navbar-form {\n\t    width: 100%;\n\t    margin: 8px 0;\n\t    text-align: center;\n\t    overflow: hidden;\n\t    /*fast clearfixer*/\n\t}\n\t#slide-nav .navbar-form .form-control {\n\t    text-align: center\n\t}\n\t#slide-nav .navbar-form .btn {\n\t    width: 100%\n\t}\n\n    /*Menu button*/\n    #nav-icon2{\n        width: 60px;\n        /*height: 45px;*/\n        position: relative;\n        margin: 5px auto;\n        float: left;\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n        transition: .5s ease-in-out;\n        cursor: pointer;\n    }\n    \n    #nav-icon2 span {\n        display: block;\n        position: absolute;\n        width: 23px;\n        height: 5px;\n        background: white;\n        opacity: 1;\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n        transition: .25s ease-in-out;\n    }\n\n    #nav-icon2.open span {\n        background: #d3531a;\n    }\n\n    #nav-icon2 span:nth-child(even) {\n        left: 35%;\n        border-radius: 0 9px 9px 0;\n    }\n\n    #nav-icon2 span:nth-child(odd) {\n        left:0px;\n        border-radius: 9px 0 0 9px;\n    }\n\n    #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2) {\n        top: 0px;\n    }\n\n    #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4) {\n        top: 18px;\n    }\n\n    #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6) {\n        top: 36px;\n    }\n\n    #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6) {\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n\n    #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5) {\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n    }\n\n    #nav-icon2.open span:nth-child(1) {\n        left: 5px;\n        top: 7px;\n    }\n\n    #nav-icon2.open span:nth-child(2) {\n        left: calc(50% - 9px); /*50% -5 */\n        top: 9px; /* 7*/\n    }\n\n    #nav-icon2.open span:nth-child(3) {\n        left: -50%;\n        opacity: 0;\n    }\n\n    #nav-icon2.open span:nth-child(4) {\n        left: 100%;\n        opacity: 0;\n    }\n\n    #nav-icon2.open span:nth-child(5) {\n        left: 5px;\n        top: 25px; /*29*/\n    }\n\n    #nav-icon2.open span:nth-child(6) {\n        left: calc(50% - 7px); /*50% -5 */\n        top: 25px; /*29*/\n    }\n}\n@media (min-width:768px) { \n\t.navbar.navbar-fixed-top.slide-active {\n\t    position: fixed\n\t}\n\t.navbar-header {\n\t    left: 0!important\n\t}\n}\n\n"

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row about\">\n    <div class=\"col-md-1 col-xs-0\"></div>\n    <div class=\"extra-wrap extra-block-1 col-md-10 col-xs-12\">\n      <h2 style=\"text-align: center;\">About me</h2>\n      <h3 style=\"text-align: center;\">Sam Kromstain – a Web Designer &amp; Web Developer from Los Angeles</h3>\n      <p><img class=\"alignleft me-photo\" alt=\"about-photo\" src=\"../assets/me.jpg\"></p>\n      <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor.Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissimpulvin ar alorem. Vestibulum sed anonsectetur adipiscing elit.</p>\n      <p>Cras eros nulla, porta ut est in, cursus egestas velit. Cras quis bibendum odio, in condimentum ante. Aliquam gravida mauris sed imperdiet porttitor. Vestibulum feugiat nulla id massa porta varius. Phasellus dui sem, volutpat quis dignissim vitae, auc tor quis nunc. Duis malesuada, elit necfaucibus feugiat, ligula arcu porta erat, quis molestie justo nulla</p>\n      <a href=\"https://livedemo00.template-help.com/wordpress_49158/portfolio/portfolio-3/\" class=\"btn \">view my works</a>\n    </div>\n    <div class=\"col-md-1 col-xs-0\"></div>\n  </div>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = "<div class=\"\">\n    <app-header>Loading...</app-header>\n    <app-about></app-about>\n    <app-ring></app-ring>\n</div>"

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = "<header class=\"header\">\n  <app-navigation>Loading...</app-navigation>\n  <div class=\"container\" id=\"page-content\">\n    <div class=\"row\">\n      <div class=\"span12\">\n          <div class=\"hashAncor\" id=\"homePage\"></div>\n          <div class=\"logo_wrap\">\n            <div class=\"headerCover\">\n              <!--<img src=\"https://livedemo00.template-help.com/wordpress_49158/wp-content/themes/theme49158/images/header_extra_image.png\" alt=\"\">-->\n            </div>\n            <div class=\"logo pull-left\">\n              <h1>Leonardo D'Antoni</h1>\n              <p class=\"logo_tagline\">Construllendo maravillosas experiencias web</p>\n            </div>\n          </div>\n      </div>\n    </div>\n </div>\n</header>"

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"\" [ngClass]=\"{'active': section.active}\" *ngFor=\"let section of sections\">\n        <a href=\"#{{section.hashTag}}\" (click)=\"changeSection(section)\">{{section.name}}</a>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav social\">\n      <li> <a href=\"https://www.linkedin.com/in/leonardo-dantoni-93aba422/\" target=\"_blank\"><span class=\"fa fa-linkedin fa-3x\"></span></a> </li>\n      <li><a href=\"https://www.facebook.com/leonardo.dantoni\" target=\"_blank\"><span class=\"fa fa-facebook fa-3x\"></span></a></li>\n      <li><a href=\"https://twitter.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-twitter fa-3x\"></span></a></li>\n      <li><a href=\"https://github.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-github-alt fa-3x\"></span></a></li>\n    </ul>\n  </div>\n</nav>-->\n\n\n <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" id=\"slide-nav\">\n  <div class=\"container\">\n   <div class=\"navbar-header\">\n    <!--<a class=\"navbar-toggle\"  (click)=\"toggleMenu($event)\"> \n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n     </a>-->\n     <div id=\"nav-icon2\" (click)=\"toggleMenu($event)\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <a class=\"navbar-brand\" href=\"#\">LD</a>\n   </div>\n   <div id=\"slidemenu\">\n    <!--<form class=\"navbar-form navbar-right\" role=\"form\">\n      <div class=\"form-group\">\n        <input type=\"search\" placeholder=\"search\" class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </form>-->\n     \n    <ul class=\"nav navbar-nav\">\n      <li class=\"\" [ngClass]=\"{'active': section.active}\" *ngFor=\"let section of sections\">\n        <a href=\"#{{section.hashTag}}\" (click)=\"changeSection(section)\">{{section.name}}</a>\n      </li>\n     <!--<li class=\"active\"><a href=\"#\">Home</a></li>\n     <li><a href=\"#about\">About</a></li>\n     <li><a href=\"#contact\">Contact</a></li>\n     <li class=\"dropdown\" [class.open]=\"dropDownOpen\">\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"dropToggle($event)\">Dropdown <span class=\"caret\"></span></a>\n      <ul class=\"dropdown-menu\">\n       <li><a href=\"#\">Action</a></li>\n       <li><a href=\"#\">Another action</a></li>\n       <li><a href=\"#\">Something else here</a></li>\n       <li class=\"divider\"></li>\n       <li class=\"dropdown-header\">Nav header</li>\n       <li><a href=\"#\">Separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">Action</a></li>\n       <li><a href=\"#\">Another action</a></li>\n       <li><a href=\"#\">Something else here</a></li>\n       <li class=\"divider\"></li>\n       <li class=\"dropdown-header\">Nav header</li>\n       <li><a href=\"#\">Separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">Action</a></li>\n       <li><a href=\"#\">Another action</a></li>\n       <li><a href=\"#\">Something else here</a></li>\n       <li class=\"divider\"></li>\n       <li class=\"dropdown-header\">Nav header</li>\n       <li><a href=\"#\">Separated link test long title goes here</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n       <li><a href=\"#\">One more separated link</a></li>\n      </ul>\n     </li>-->\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right social\">\n      <li> <a href=\"https://www.linkedin.com/in/leonardo-dantoni-93aba422/\" target=\"_blank\"><span class=\"fa fa-linkedin fa-3x\"></span></a> </li>\n      <li><a href=\"https://www.facebook.com/leonardo.dantoni\" target=\"_blank\"><span class=\"fa fa-facebook fa-3x\"></span></a></li>\n      <li><a href=\"https://twitter.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-twitter fa-3x\"></span></a></li>\n      <li><a href=\"https://github.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-github-alt fa-3x\"></span></a></li>\n    </ul>\n          \n   </div>\n   <div id=\"navbar-height-col\"></div>\n  </div>\n </nav>"

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("jquery");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ },
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RingComponent = (function () {
    function RingComponent() {
    }
    RingComponent.prototype.ngOnInit = function () {
    };
    RingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ring',
            template: __webpack_require__(58),
            styles: [__webpack_require__(57)]
        }), 
        __metadata('design:paramtypes', [])
    ], RingComponent);
    return RingComponent;
}());
//# sourceMappingURL=/Users/leonardodantoni/Documents/Code/PortfolioUniversal/src/ring.component.js.map

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = "<p>\n  ring works!\n</p>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjNlODRlNzQxMzU0MDcwZDViMWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JpbmcvcmluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yaW5nL3JpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JpbmcvcmluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR3VCO0FBQ1M7QUFDSjtBQUNNO0FBQ1E7QUFDWTtBQUNSO0FBQ0c7QUFDTztBQUNoQjtBQUV4QyxNQUFNO0FBRU4sSUFBTSxHQUFHLEdBQUks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QUFHLDRCQUE0Qiw0Q0FBNEMsNEJBQTRCLG9CQUFvQiw4QkFBOEIsR0FBRyxLOzs7Ozs7QUNBOWlMLDhOQUE4Tix1REFBdUQsdUNBQXVDLCtvQzs7Ozs7O0FDQTVULDRJOzs7Ozs7QUNBQSxnd0I7Ozs7OztBQ0FBLGdMQUFnTCx5QkFBeUIsNkRBQTZELGlCQUFpQix3Q0FBd0MsY0FBYyw0cURBQTRxRCx5QkFBeUIsNkRBQTZELGlCQUFpQix3Q0FBd0MsY0FBYyxrbkY7Ozs7OztBQ0F0cEUsOEM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpRDtBQU9qRDtJQUVFO0lBQWdCLENBQUM7SUFFakIsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFWSDtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixpQ0FBb0M7WUFDcEMsaUNBQW1DO1NBQ3BDLENBQUM7O3FCQUFBO0lBUUYsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7O0FDZEQsbUI7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYzZTg0ZTc0MTM1NDA3MGQ1YjFlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcbiAqL1xuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xuXG4vLyBBcHBcblxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDIwMDtcblxuLyoqXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICovXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vKipcbiAqIEV4cHJlc3MgVmlld1xuICovXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuLyoqXG4gKiBFbmFibGUgY29tcHJlc3Npb25cbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLyoqXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcbiAqL1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XG5cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cbi8qKlxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxuICovXG5cbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xuXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xufVxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG5pZiAocGF0Y2gpIHtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmluZ0NvbXBvbmVudCB9IGZyb20gJy4vcmluZy9yaW5nLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgYXBwUm91dGVzIH0gZnJvbSAnLi9hcHAvYXBwLnJvdXRpbmcnO1xuXG4vKipcbiAqIFRvcC1sZXZlbCBOZ01vZHVsZSBcImNvbnRhaW5lclwiXG4gKi9cbkBOZ01vZHVsZSh7XG4gIC8qKiBSb290IEFwcCBDb21wb25lbnQgKi9cbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudCwgTmF2aWdhdGlvbkNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBBYm91dENvbXBvbmVudCwgUmluZ0NvbXBvbmVudCBdLFxuICBpbXBvcnRzOiBbXG4gICAgLyoqXG4gICAgICogTk9URTogTmVlZHMgdG8gYmUgeW91ciBmaXJzdCBpbXBvcnQgKCEpXG4gICAgICogTm9kZU1vZHVsZSwgTm9kZUh0dHBNb2R1bGUsIE5vZGVKc29ucE1vZHVsZSBhcmUgaW5jbHVkZWRcbiAgICAgKi9cbiAgICBVbml2ZXJzYWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgICAvKipcbiAgICAgKiB1c2luZyByb3V0ZXNcbiAgICAgKi9cbiAgICAvLyBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJleHBvcnQgKiBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL0lTZWN0aW9uJ1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2VjdGlvbnM6IElTZWN0aW9uW10gPSBbe25hbWU6ICdIb21lJywgYWN0aXZlOiB0cnVlLCBoYXNoVGFnOiAnaG9tZSd9LCB7bmFtZTogJ1NraWxscycsIGFjdGl2ZTogZmFsc2UsIGhhc2hUYWc6ICdza2lsbHMnfV1cbiAgYWN0aXZlU2VjdGlvbjogSVNlY3Rpb247XG4gIHNlbGVjdGVkID0gJyNzbGlkZW1lbnUsICNwYWdlLWNvbnRlbnQsIGJvZHksIC5uYXZiYXIsIC5uYXZiYXItaGVhZGVyJztcbiAgZHJvcERvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IFxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLnNlY3Rpb25zWzBdO1xuICB9XG5cbiAgY2hhbmdlU2VjdGlvbihzZWN0aW9uOiBJU2VjdGlvbil7XG4gICAgdGhpcy5hY3RpdmVTZWN0aW9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlU2VjdGlvbiA9IHNlY3Rpb247XG4gICAgdGhpcy5hY3RpdmVTZWN0aW9uLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBpZiAoJChldmVudC50YXJnZXQpLndpZHRoKCkgPiA3NjcgJiYgJCgnLm5hdmJhci10b2dnbGUnKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICQodGhpcy5zZWxlY3RlZCkucmVtb3ZlQ2xhc3MoJ3NsaWRlLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCQoJy5uYXZiYXItdG9nZ2xlJykpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoKTtcbiAgfVxuXG4gIGRyb3BUb2dnbGUoJGV2ZW50KXtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5kcm9wRG93bk9wZW4gPSAhdGhpcy5kcm9wRG93bk9wZW47XG4gIH1cblxuICB0b2dnbGVNZW51KCRldmVudCl7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy9zdGljayBpbiB0aGUgZml4ZWQgMTAwJSBoZWlnaHQgYmVoaW5kIHRoZSBuYXZiYXIgYnV0IGRvbid0IHdyYXAgaXRcbiAgICAvLyQoJyNzbGlkZS1uYXYubmF2YmFyIC5jb250YWluZXInKS5hcHBlbmQoJCgnPGRpdiBpZD1cIm5hdmJhci1oZWlnaHQtY29sXCI+PC9kaXY+JykpO1xuXG4gICAgLy8gRW50ZXIgeW91ciBpZHMgb3IgY2xhc3Nlc1xuICAgIHZhciB0b2dnbGVyID0gJy5uYXZiYXItdG9nZ2xlJztcbiAgICB2YXIgcGFnZXdyYXBwZXIgPSAnI3BhZ2UtY29udGVudCc7XG4gICAgdmFyIG5hdmlnYXRpb253cmFwcGVyID0gJy5uYXZiYXItaGVhZGVyJztcbiAgICB2YXIgbWVudXdpZHRoID0gJzEwMCUnOyAvLyB0aGUgbWVudSBpbnNpZGUgdGhlIHNsaWRlIG1lbnUgaXRzZWxmXG4gICAgdmFyIHNsaWRld2lkdGggPSAnODAlJztcbiAgICB2YXIgbWVudW5lZyA9ICctMTAwJSc7XG4gICAgdmFyIHNsaWRlbmVnID0gJy04MCUnO1xuICAgIHZhciBzZWxlY3RlZCA9ICQoJGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdzbGlkZS1hY3RpdmUnKTtcblxuICAgICQoJyNzbGlkZW1lbnUnKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgIGxlZnQ6IHNlbGVjdGVkID8gbWVudW5lZyA6ICcwcHgnXG4gICAgfSk7XG5cbiAgICAkKCcjbmF2YmFyLWhlaWdodC1jb2wnKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgIGxlZnQ6IHNlbGVjdGVkID8gc2xpZGVuZWcgOiAnMHB4J1xuICAgIH0pO1xuXG4gICAgJChwYWdld3JhcHBlcikuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICBsZWZ0OiBzZWxlY3RlZCA/ICcwcHgnIDogc2xpZGV3aWR0aFxuICAgIH0pO1xuXG4gICAgJChuYXZpZ2F0aW9ud3JhcHBlcikuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICBsZWZ0OiBzZWxlY3RlZCA/ICcwcHgnIDogc2xpZGV3aWR0aFxuICAgIH0pO1xuXG5cbiAgICAkKCRldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGVDbGFzcygnc2xpZGUtYWN0aXZlJywgIXNlbGVjdGVkKTtcbiAgICAkKCcjc2xpZGVtZW51JykudG9nZ2xlQ2xhc3MoJ3NsaWRlLWFjdGl2ZScpO1xuICAgICQoJyNuYXYtaWNvbjInKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG5cbiAgICAkKCcjcGFnZS1jb250ZW50LCAubmF2YmFyLCBib2R5LCAubmF2YmFyLWhlYWRlciwgLmhlYWRlcicpLnRvZ2dsZUNsYXNzKCdzbGlkZS1hY3RpdmUnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xuXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxuICpcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAqICdob21lJywgJ2Fib3V0J1xuICogXTtcbiAqKi9cbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmFib3V0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNhNThiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hbGlnbmxlZnQge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiA1cHggMjBweCAxMHB4IDA7XFxufVxcblxcbi5leHRyYS1ibG9jay0xIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xcbn1cXG5cXG5oMntcXG4gICAgZm9udDogYm9sZCA2NnB4LzcwcHggT3JiaXRyb247XFxuICAgIGNvbG9yOiAjZmZhMDVjO1xcbn1cXG4uZXh0cmEtYmxvY2stMSBoMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbmgzIHtcXG4gICAgZm9udDogYm9sZCAxOHB4LzIycHggT3JiaXRyb247XFxufVxcbi5leHRyYS1ibG9jay0xIGgzOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDU3MHB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgbWFyZ2luOiAyNnB4IGF1dG8gNTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5tZS1waG90b3tcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcXG4gICAgLmFib3V0e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5tZS1waG90b3tcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9oZWFkZXIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5sb2dvX3dyYXAgLmxvZ28gLmxvZ29fdGFnbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNmZmEwNWM7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIgLmxvZ29fd3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlYWRlciAubG9nb193cmFwIC5sb2dvIHtcXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGVhZGVyIC5sb2dvX3dyYXAgLmxvZ28gLmxvZ29faCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi5sb2dvIGgxe1xcbiAgICBmb250OiBib2xkIDVlbSBPcmJpdHJvbjtcXG4gICAgY29sb3I6ICNmZmEwNWM7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDE4cHggcmdiYSgwLCAwLCAwLCAxKTtcXG59XFxuXFxuLyp3cmFwIHRoZSBlbnRpcmUgcGFnZSBjb250ZW50IGJ1dCBub3QgbmF2IGluc2lkZSB0aGlzIGRpdiBpZiBub3QgYSBmaXhlZCB0b3AsIGRvbid0IGFkZCBhbnkgdG9wIHBhZGRpbmcgKi9cXG4jcGFnZS1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcXG4gICAgbGVmdDogMDtcXG59XFxuI3BhZ2UtY29udGVudC5zbGlkZS1hY3RpdmUge1xcbiAgICBwYWRkaW5nLXRvcDogMFxcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgeyBcXG5cXHQjcGFnZS1jb250ZW50IHtcXG5cXHQgICAgbGVmdDogMCFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG4gICAgLmhlYWRlci5zbGlkZS1hY3RpdmV7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuICAgIC5sb2dvIGgxe1xcbiAgICAgICAgZm9udDogYm9sZCA0ZW0gT3JiaXRyb247XFxuICAgIH1cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hdmJhcntcXG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcXG59XFxuXFxuLm5hdj5saT5hIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDAgMTdweDtcXG4gICAgZm9udDogYm9sZCAxNHB4LzIwcHggT3JiaXRyb247XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ubmF2PmxpLmFjdGl2ZT5hIHtcXG4gICAgY29sb3I6ICNmZmEwNWM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc29jaWFse1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uc29jaWFsIGxpe1xcbiAgICBtYXJnaW46IDAuNGVtIDAuNWVtOyBcXG59XFxuXFxuLnNvY2lhbCBsaSBhe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcblxcblxcblxcbi8qZmlyc3QgY2hpbGQgb2YgI3BhZ2UtY29udGVudCBzbyBpdCBkb2Vzbid0IHNoaWZ0IGFyb3VuZCovXFxuLm5vLW1hcmdpbi10b3Age1xcbiAgICBtYXJnaW4tdG9wOiAwcHghaW1wb3J0YW50XFxufVxcblxcbi8qIHB1dCB0b2dnbGUgYmFycyBvbiB0aGUgbGVmdCA6OiBub3QgdXNpbmcgYnV0dG9uICovXFxuI3NsaWRlLW5hdiAubmF2YmFyLXRvZ2dsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLyogaWNvbiBiYXIgcHJldHR5dXAgLSBvcHRpb25hbCAqL1xcbiNzbGlkZS1uYXYgLm5hdmJhci10b2dnbGUgPiAuaWNvbi1iYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBtYXJnaW46IDVweCAwIDAgMDtcXG59XFxuI3NsaWRlLW5hdiAubmF2YmFyLXRvZ2dsZS5zbGlkZS1hY3RpdmUgLmljb24tYmFyIHtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlXFxufVxcbi5uYXZiYXItaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxufVxcbi8qIHVuIGZpeCB0aGUgbmF2YmFyIHdoZW4gYWN0aXZlIHNvIHRoYXQgYWxsIHRoZSBtZW51IGl0ZW1zIGFyZSBhY2Nlc3NpYmxlICovXFxuLm5hdmJhci5uYXZiYXItZml4ZWQtdG9wLnNsaWRlLWFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCkgeyBcXG4gICAgLnNvY2lhbHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgICNzbGlkZW1lbnUuc2xpZGUtYWN0aXZle1xcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgXFxuICAgIH1cXG4gICAgI3NsaWRlLW5hdi5uYXZiYXItaW52ZXJzZSAjbmF2YmFyLWhlaWdodC1jb2wge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgIH1cXG4gICAgI3NsaWRlLW5hdiAjbmF2YmFyLWhlaWdodC1jb2wge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGxlZnQ6IC04MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICB9XFxuXFxuXFx0I3NsaWRlLW5hdiAuY29udGFpbmVyIHtcXG5cXHQgICAgbWFyZ2luOiAwO1xcblxcdCAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcXG5cXHR9XFxuXFx0I3NsaWRlLW5hdiAubmF2YmFyLWhlYWRlciB7XFxuXFx0ICAgIG1hcmdpbjogMCBhdXRvO1xcblxcdCAgICBwYWRkaW5nOiAwIDE1cHg7XFxuXFx0fVxcblxcdCNzbGlkZS1uYXYgLm5hdmJhci5zbGlkZS1hY3RpdmUge1xcblxcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ICAgIHdpZHRoOiA4MCU7XFxuXFx0ICAgIHRvcDogLTFweDtcXG5cXHQgICAgei1pbmRleDogMTAwMDtcXG5cXHR9XFxuXFx0I3NsaWRlLW5hdiAjc2xpZGVtZW51IHtcXG5cXHQgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG5cXHQgICAgbGVmdDogLTEwMCU7XFxuXFx0ICAgIHdpZHRoOiA4MCU7XFxuXFx0ICAgIG1pbi13aWR0aDogMDtcXG5cXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcdCAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuXFx0ICAgIHotaW5kZXg6IDI7XFxuXFx0ICAgIHRvcDogLThweDtcXG5cXHQgICAgbWFyZ2luOiAwO1xcblxcdH1cXG5cXHQjc2xpZGUtbmF2ICNzbGlkZW1lbnUgLm5hdmJhci1uYXYge1xcblxcdCAgICBtaW4td2lkdGg6IDA7XFxuXFx0ICAgIHdpZHRoOiAxMDAlO1xcblxcdCAgICBtYXJnaW46IDIwcHggMDtcXG5cXHR9XFxuXFx0I3NsaWRlLW5hdiAjc2xpZGVtZW51IC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IGxpIGEge1xcblxcdCAgICBtaW4td2lkdGg6IDA7XFxuXFx0ICAgIHdpZHRoOiA4MCU7XFxuXFx0ICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuXFx0fVxcblxcdCNzbGlkZS1uYXYge1xcblxcdCAgICBib3JkZXItdG9wOiAwXFxuXFx0fVxcbiAgICAjc2xpZGUtbmF2LnNsaWRlLWFjdGl2ZSB7XFxuXFx0ICAgIHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR9XFxuXFx0I3NsaWRlLW5hdi5uYXZiYXItaW52ZXJzZSAjc2xpZGVtZW51IHtcXG5cXHQgICAgYmFja2dyb3VuZDogIzMzM1xcblxcdH1cXG5cXHQvKiB0aGlzIGlzIGJlaGluZCB0aGUgbmF2aWdhdGlvbiBidXQgdGhlIG5hdmlnYXRpb24gaXMgbm90IGluc2lkZSBpdCBzbyB0aGF0IHRoZSBuYXZpZ2F0aW9uIGlzIGFjY2Vzc2libGUgYW5kIHNjcm9sbHMqL1xcblxcdCNzbGlkZS1uYXYgI25hdmJhci1oZWlnaHQtY29sIHtcXG5cXHQgICAgcG9zaXRpb246IGZpeGVkO1xcblxcdCAgICB0b3A6IDA7XFxuXFx0ICAgIGhlaWdodDogMTAwJTtcXG5cXHQgICAgd2lkdGg6IDgwJTtcXG5cXHQgICAgbGVmdDogLTgwJTtcXG5cXHQgICAgYmFja2dyb3VuZDogI2VlZTtcXG5cXHR9XFxuXFx0I3NsaWRlLW5hdi5uYXZiYXItaW52ZXJzZSAjbmF2YmFyLWhlaWdodC1jb2wge1xcblxcdCAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcblxcdCAgICB6LWluZGV4OiAxO1xcblxcdCAgICBib3JkZXI6IDA7XFxuXFx0fVxcblxcdCNzbGlkZS1uYXYgLm5hdmJhci1mb3JtIHtcXG5cXHQgICAgd2lkdGg6IDEwMCU7XFxuXFx0ICAgIG1hcmdpbjogOHB4IDA7XFxuXFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHQgICAgLypmYXN0IGNsZWFyZml4ZXIqL1xcblxcdH1cXG5cXHQjc2xpZGUtbmF2IC5uYXZiYXItZm9ybSAuZm9ybS1jb250cm9sIHtcXG5cXHQgICAgdGV4dC1hbGlnbjogY2VudGVyXFxuXFx0fVxcblxcdCNzbGlkZS1uYXYgLm5hdmJhci1mb3JtIC5idG4ge1xcblxcdCAgICB3aWR0aDogMTAwJVxcblxcdH1cXG5cXG4gICAgLypNZW51IGJ1dHRvbiovXFxuICAgICNuYXYtaWNvbjJ7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIC8qaGVpZ2h0OiA0NXB4OyovXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgICNuYXYtaWNvbjIgc3BhbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAyM3B4O1xcbiAgICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNkMzUzMWE7XFxuICAgIH1cXG5cXG4gICAgI25hdi1pY29uMiBzcGFuOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgICBsZWZ0OiAzNSU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDlweCA5cHggMDtcXG4gICAgfVxcblxcbiAgICAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgICAgbGVmdDowcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHggMCAwIDlweDtcXG4gICAgfVxcblxcbiAgICAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDEpLCAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuXFxuICAgICNuYXYtaWNvbjIgc3BhbjpudGgtY2hpbGQoMyksICNuYXYtaWNvbjIgc3BhbjpudGgtY2hpbGQoNCkge1xcbiAgICAgICAgdG9wOiAxOHB4O1xcbiAgICB9XFxuXFxuICAgICNuYXYtaWNvbjIgc3BhbjpudGgtY2hpbGQoNSksICNuYXYtaWNvbjIgc3BhbjpudGgtY2hpbGQoNikge1xcbiAgICAgICAgdG9wOiAzNnB4O1xcbiAgICB9XFxuXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCgxKSwjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoNikge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIH1cXG5cXG4gICAgI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDIpLCNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCg1KSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB9XFxuXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICBsZWZ0OiA1cHg7XFxuICAgICAgICB0b3A6IDdweDtcXG4gICAgfVxcblxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA5cHgpOyAvKjUwJSAtNSAqL1xcbiAgICAgICAgdG9wOiA5cHg7IC8qIDcqL1xcbiAgICB9XFxuXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICBsZWZ0OiAtNTAlO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoNCkge1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDUpIHtcXG4gICAgICAgIGxlZnQ6IDVweDtcXG4gICAgICAgIHRvcDogMjVweDsgLyoyOSovXFxuICAgIH1cXG5cXG4gICAgI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDYpIHtcXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gN3B4KTsgLyo1MCUgLTUgKi9cXG4gICAgICAgIHRvcDogMjVweDsgLyoyOSovXFxuICAgIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHsgXFxuXFx0Lm5hdmJhci5uYXZiYXItZml4ZWQtdG9wLnNsaWRlLWFjdGl2ZSB7XFxuXFx0ICAgIHBvc2l0aW9uOiBmaXhlZFxcblxcdH1cXG5cXHQubmF2YmFyLWhlYWRlciB7XFxuXFx0ICAgIGxlZnQ6IDAhaW1wb3J0YW50XFxuXFx0fVxcbn1cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWJvdXRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMSBjb2wteHMtMFxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImV4dHJhLXdyYXAgZXh0cmEtYmxvY2stMSBjb2wtbWQtMTAgY29sLXhzLTEyXFxcIj5cXG4gICAgICA8aDIgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkFib3V0IG1lPC9oMj5cXG4gICAgICA8aDMgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjtcXFwiPlNhbSBLcm9tc3RhaW4g4oCTIGEgV2ViIERlc2lnbmVyICZhbXA7IFdlYiBEZXZlbG9wZXIgZnJvbSBMb3MgQW5nZWxlczwvaDM+XFxuICAgICAgPHA+PGltZyBjbGFzcz1cXFwiYWxpZ25sZWZ0IG1lLXBob3RvXFxcIiBhbHQ9XFxcImFib3V0LXBob3RvXFxcIiBzcmM9XFxcIi4uL2Fzc2V0cy9tZS5qcGdcXFwiPjwvcD5cXG4gICAgICA8cD5GdXNjZSBldWlzbW9kIGNvbnNlcXVhdCBhbnRlLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHNlZCBkb2xvci5BbGlxdWFtIGNvbmd1ZSBmZXJtZW50dW0gbmlzbC4gTWF1cmlzIGFjY3Vtc2FuIG51bGxhIHZlbCBkaWFtLiBTZWQgaW4gbGFjdXMgdXQgZW5pbSBhZGlwaXNjaW5nIGFsaXF1ZXQuIE51bGxhIHZlbmVuYXRpcy4gSW4gcGVkZSBtaSwgYWxpcXVldCBzaXQgYW1ldCwgZXVpc21vZCBpbiwgYXVjdG9yIHV0LCBsaWd1bGEuIEFsaXF1YW0gZGFwaWJ1cyB0aW5jaWR1bnQgbWV0dXMuIFByYWVzZW50IGp1c3RvIGRvbG9yLCBsb2JvcnRpcyBxdWlzLCBsb2JvcnRpcyBkaWduaXNzaW1wdWx2aW4gYXIgYWxvcmVtLiBWZXN0aWJ1bHVtIHNlZCBhbm9uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cXG4gICAgICA8cD5DcmFzIGVyb3MgbnVsbGEsIHBvcnRhIHV0IGVzdCBpbiwgY3Vyc3VzIGVnZXN0YXMgdmVsaXQuIENyYXMgcXVpcyBiaWJlbmR1bSBvZGlvLCBpbiBjb25kaW1lbnR1bSBhbnRlLiBBbGlxdWFtIGdyYXZpZGEgbWF1cmlzIHNlZCBpbXBlcmRpZXQgcG9ydHRpdG9yLiBWZXN0aWJ1bHVtIGZldWdpYXQgbnVsbGEgaWQgbWFzc2EgcG9ydGEgdmFyaXVzLiBQaGFzZWxsdXMgZHVpIHNlbSwgdm9sdXRwYXQgcXVpcyBkaWduaXNzaW0gdml0YWUsIGF1YyB0b3IgcXVpcyBudW5jLiBEdWlzIG1hbGVzdWFkYSwgZWxpdCBuZWNmYXVjaWJ1cyBmZXVnaWF0LCBsaWd1bGEgYXJjdSBwb3J0YSBlcmF0LCBxdWlzIG1vbGVzdGllIGp1c3RvIG51bGxhPC9wPlxcbiAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93b3JkcHJlc3NfNDkxNTgvcG9ydGZvbGlvL3BvcnRmb2xpby0zL1xcXCIgY2xhc3M9XFxcImJ0biBcXFwiPnZpZXcgbXkgd29ya3M8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMSBjb2wteHMtMFxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIlxcXCI+XFxuICAgIDxhcHAtaGVhZGVyPkxvYWRpbmcuLi48L2FwcC1oZWFkZXI+XFxuICAgIDxhcHAtYWJvdXQ+PC9hcHAtYWJvdXQ+XFxuICAgIDxhcHAtcmluZz48L2FwcC1yaW5nPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICA8YXBwLW5hdmlnYXRpb24+TG9hZGluZy4uLjwvYXBwLW5hdmlnYXRpb24+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiIGlkPVxcXCJwYWdlLWNvbnRlbnRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwYW4xMlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhhc2hBbmNvclxcXCIgaWQ9XFxcImhvbWVQYWdlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb193cmFwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJDb3ZlclxcXCI+XFxuICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XFxcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93b3JkcHJlc3NfNDkxNTgvd3AtY29udGVudC90aGVtZXMvdGhlbWU0OTE1OC9pbWFnZXMvaGVhZGVyX2V4dHJhX2ltYWdlLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPi0tPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28gcHVsbC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMT5MZW9uYXJkbyBEJ0FudG9uaTwvaDE+XFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibG9nb190YWdsaW5lXFxcIj5Db25zdHJ1bGxlbmRvIG1hcmF2aWxsb3NhcyBleHBlcmllbmNpYXMgd2ViPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuIDwvZGl2PlxcbjwvaGVhZGVyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBzZWN0aW9uLmFjdGl2ZX1cXFwiICpuZ0Zvcj1cXFwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnNcXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiI3t7c2VjdGlvbi5oYXNoVGFnfX1cXFwiIChjbGljayk9XFxcImNoYW5nZVNlY3Rpb24oc2VjdGlvbilcXFwiPnt7c2VjdGlvbi5uYW1lfX08L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBzb2NpYWxcXFwiPlxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xlb25hcmRvLWRhbnRvbmktOTNhYmE0MjIvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluIGZhLTN4XFxcIj48L3NwYW4+PC9hPiA8L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGVvbmFyZG8uZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1mYWNlYm9vayBmYS0zeFxcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL2xmZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyIGZhLTN4XFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sZmRhbnRvbmlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViLWFsdCBmYS0zeFxcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuPC9uYXY+LS0+XFxuXFxuXFxuIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwic2xpZGUtbmF2XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxuICAgIDwhLS08YSBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgIChjbGljayk9XFxcInRvZ2dsZU1lbnUoJGV2ZW50KVxcXCI+IFxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgIDwvYT4tLT5cXG4gICAgIDxkaXYgaWQ9XFxcIm5hdi1pY29uMlxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgkZXZlbnQpXFxcIj5cXG4gICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgPHNwYW4+PC9zcGFuPlxcbiAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgPHNwYW4+PC9zcGFuPlxcbiAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPkxEPC9hPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgaWQ9XFxcInNsaWRlbWVudVxcXCI+XFxuICAgIDwhLS08Zm9ybSBjbGFzcz1cXFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJzZWFyY2hcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5TZWFyY2g8L2J1dHRvbj5cXG4gICAgPC9mb3JtPi0tPlxcbiAgICAgXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogc2VjdGlvbi5hY3RpdmV9XFxcIiAqbmdGb3I9XFxcImxldCBzZWN0aW9uIG9mIHNlY3Rpb25zXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiN7e3NlY3Rpb24uaGFzaFRhZ319XFxcIiAoY2xpY2spPVxcXCJjaGFuZ2VTZWN0aW9uKHNlY3Rpb24pXFxcIj57e3NlY3Rpb24ubmFtZX19PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgICA8IS0tPGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPjxhIGhyZWY9XFxcIiNcXFwiPkhvbWU8L2E+PC9saT5cXG4gICAgIDxsaT48YSBocmVmPVxcXCIjYWJvdXRcXFwiPkFib3V0PC9hPjwvbGk+XFxuICAgICA8bGk+PGEgaHJlZj1cXFwiI2NvbnRhY3RcXFwiPkNvbnRhY3Q8L2E+PC9saT5cXG4gICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIFtjbGFzcy5vcGVuXT1cXFwiZHJvcERvd25PcGVuXFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIChjbGljayk9XFxcImRyb3BUb2dnbGUoJGV2ZW50KVxcXCI+RHJvcGRvd24gPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9hPlxcbiAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5BY3Rpb248L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XFxuICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPk5hdiBoZWFkZXI8L2xpPlxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5BY3Rpb248L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XFxuICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPk5hdiBoZWFkZXI8L2xpPlxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5BY3Rpb248L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XFxuICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPk5hdiBoZWFkZXI8L2xpPlxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+U2VwYXJhdGVkIGxpbmsgdGVzdCBsb25nIHRpdGxlIGdvZXMgaGVyZTwvYT48L2xpPlxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgICA8L2xpPi0tPlxcbiAgICA8L3VsPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodCBzb2NpYWxcXFwiPlxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xlb25hcmRvLWRhbnRvbmktOTNhYmE0MjIvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluIGZhLTN4XFxcIj48L3NwYW4+PC9hPiA8L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGVvbmFyZG8uZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1mYWNlYm9vayBmYS0zeFxcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL2xmZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyIGZhLTN4XFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sZmRhbnRvbmlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViLWFsdCBmYS0zeFxcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICA8L3VsPlxcbiAgICAgICAgICBcXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGlkPVxcXCJuYXZiYXItaGVpZ2h0LWNvbFxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG4gPC9uYXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqcXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JpbmcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9yaW5nL3JpbmcuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3JpbmcvcmluZy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHA+XFxuICByaW5nIHdvcmtzIVxcbjwvcD5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9yaW5nL3JpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=