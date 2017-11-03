webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-download/add-download.module": [
		158
	],
	"../pages/download-list/download-list.module": [
		161
	],
	"../pages/settings/settings.module": [
		162
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDownloadPageModule", function() { return AddDownloadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_download__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDownloadPageModule = (function () {
    function AddDownloadPageModule() {
    }
    return AddDownloadPageModule;
}());
AddDownloadPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_download__["a" /* AddDownloadPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_download__["a" /* AddDownloadPage */]),
        ],
    })
], AddDownloadPageModule);

//# sourceMappingURL=add-download.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadListPageModule", function() { return DownloadListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download_list__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownloadListPageModule = (function () {
    function DownloadListPageModule() {
    }
    return DownloadListPageModule;
}());
DownloadListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__download_list__["a" /* DownloadListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__download_list__["a" /* DownloadListPage */]),
        ],
    })
], DownloadListPageModule);

//# sourceMappingURL=download-list.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_list_download_list__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_download_add_download__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(rest) {
        var _this = this;
        this.rest = rest;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__download_list_download_list__["a" /* DownloadListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__add_download_add_download__["a" /* AddDownloadPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.response = {};
        this.errorMessage = "";
        FCMPlugin.getToken(function (token) {
            _this.sendMobileToken(token);
        });
    }
    TabsPage.prototype.sendMobileToken = function (token) {
        var _this = this;
        var data = {
            "token": token
        };
        this.rest.init().then(function (values) {
            _this.rest.postMobileToken(data).subscribe(function (response) { return _this.response = response; }, function (error) { return _this.errorMessage = error; });
        });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Download List" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Add Download" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_download_list_download_list__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_download_list_download_list_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_download_add_download__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_download_add_download_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_progress_bar_progress_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_clipboard__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_8__pages_download_list_download_list_module__["DownloadListPageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_download_add_download_module__["AddDownloadPageModule"],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings_module__["SettingsPageModule"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-download/add-download.module#AddDownloadPageModule', name: 'AddDownloadPage', segment: 'add-download', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/download-list/download-list.module#DownloadListPageModule', name: 'DownloadListPage', segment: 'download-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydownloaderdb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_download_list_download_list__["a" /* DownloadListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_download_add_download__["a" /* AddDownloadPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_clipboard__["a" /* Clipboard */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        console.log("test");
    }
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("progress"),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/components/progress-bar/progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}%\n    </div>\n</div>\n'/*ion-inline-end:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/components/progress-bar/progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    RestProvider.prototype.init = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('apiUrl').then(function (val) {
            _this.apiUrl = val;
        }));
        return Promise.all(promiseList);
    };
    RestProvider.prototype.getDirectories = function (path) {
        return this.http.get(this.apiUrl + "/arbo?path=" + path)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.getServerInfos = function () {
        return this.http.get(this.apiUrl + "/serverinfos")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.getDownloads = function () {
        console.log(this.apiUrl);
        return this.http.get(this.apiUrl + "/downloads")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.getDownload = function (id) {
        return this.http.get(this.apiUrl + "/download/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.deleteDownload = function (id) {
        return this.http.delete(this.apiUrl + "/download/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.postDonwload = function (payload) {
        console.log(payload);
        return this.http.post(this.apiUrl + "/downloads", payload)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.postMobileToken = function (payload) {
        console.log(payload);
        return this.http.post(this.apiUrl + "/mobile/token", payload)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.extractData = function (res) {
        console.log("response");
        console.log(res);
        var body = res;
        return body || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddDownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddDownloadPage = (function () {
    function AddDownloadPage(navCtrl, navParams, rest, formBuilder, alertCtrl, clipboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.directories = {};
        this.response = {};
        this.errorMessage = "";
        this.currentDirectory = "";
        this.subDirectory = 0;
        this.serverInfos = {};
        this.isLoaded = false;
        this.inputValue = "";
        this.addDownloadForm = this.formBuilder.group({
            linkToDownload: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
        this.serverInfos["alive"] = true;
    }
    AddDownloadPage.prototype.getServerInfos = function () {
        var _this = this;
        this.rest.getServerInfos().subscribe(function (serverInfos) { return _this.serverInfos = serverInfos; }, function (error) { return _this.errorMessage = error; });
    };
    AddDownloadPage.prototype.getDirectories = function (path) {
        var _this = this;
        this.isLoaded = false;
        this.rest.init().then(function (values) {
            _this.rest.getDirectories(path).subscribe(function (directories) {
                _this.isLoaded = true;
                _this.directories = directories;
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    AddDownloadPage.prototype.sendLinkToDownload = function (data) {
        var _this = this;
        this.rest.postDonwload(data).subscribe(function (response) { return _this.response = response; }, function (error) { return _this.errorMessage = error; });
    };
    AddDownloadPage.prototype.ionViewDidLoad = function () {
        this.getDirectories("/");
    };
    AddDownloadPage.prototype.ionViewDidEnter = function () {
        this.getDirectories("/");
    };
    AddDownloadPage.prototype.addDownloadFormSubmit = function () {
        //this.addDownloadForm.value.linkToDownload = "http://ipv4.download.thinkbroadband.com/5MB.zip";
        var data = {
            "link": this.addDownloadForm.value.linkToDownload,
            "directory": this.currentDirectory
        };
        this.sendLinkToDownload(data);
        console.log(this.addDownloadForm.value.linkToDownload);
        this.presentAlert();
    };
    AddDownloadPage.prototype.goBack = function ($event) {
        this.getDirectories(this.directories["parentDirectory"]);
    };
    AddDownloadPage.prototype.goTo = function (event, directory) {
        this.getDirectories(this.directories["rootPathDirectory"] + "/" + directory);
    };
    AddDownloadPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Ok',
            subTitle: 'Your download has been started',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AddDownloadPage.prototype.pastLink = function () {
        var _this = this;
        this.clipboard.paste().then(function (resolve) {
            _this.inputValue = resolve;
            _this.addDownloadForm.value.linkToDownload = resolve;
        }, function (reject) {
            alert('Error: ' + reject);
        });
    };
    AddDownloadPage.prototype.resetInputValue = function () {
        this.inputValue = "";
    };
    return AddDownloadPage;
}());
AddDownloadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-download',template:/*ion-inline-start:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/add-download/add-download.html"*/'<!--\n  Generated template for the AddDownloadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Remote Download</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="displayDownloadList">\n\n      <ion-label color="primary">Select your path: {{ directories.rootPathDirectory }}</ion-label>\n      <ion-scroll scrollY="true" style="height:40vh;">\n\n      <div text-center *ngIf="!isLoaded">\n        <ion-spinner name="bubbles"></ion-spinner>\n      </div>\n\n      <div *ngIf="isLoaded">\n        <h2 (click)="goBack($event)">..</h2>\n        <ion-item *ngFor="let directory of directories.directories">\n          <h2 (click)="goTo($event, directory)">{{ directory }}</h2>\n        </ion-item>\n      </div>\n    </ion-scroll>\n\n    <form [formGroup]="addDownloadForm" (ngSubmit)="addDownloadFormSubmit()">\n      <ion-input type="text" formControlName="linkToDownload" placeholder="Your link" [(ngModel)]="inputValue"></ion-input><br>\n      <ion-icon name="clipboard" (click)="pastLink($event)"></ion-icon><br><br>\n      <ion-icon name="close" (click)="resetInputValue($event)"></ion-icon><br><br>\n      <button ion-button type="submit" [disabled]="!addDownloadForm.valid">Download</button>\n    </form>\n  </div>\n\n  <div id="displayError" *ngIf="!serverInfos.alive">\n    <h3>No connection established between server and app</h3>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/add-download/add-download.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */]])
], AddDownloadPage);

//# sourceMappingURL=add-download.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DownloadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownloadListPage = (function () {
    function DownloadListPage(navCtrl, navParams, rest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.downloads = {};
        this.deleteResponse = {};
        this.errorMessage = "";
        this.isLoaded = false;
    }
    DownloadListPage.prototype.getDownloads = function () {
        var _this = this;
        this.isLoaded = false;
        this.rest.init().then(function (values) {
            _this.rest.getDownloads().subscribe(function (downloads) {
                _this.isLoaded = true;
                _this.downloads = downloads;
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    DownloadListPage.prototype.deleteDownload = function (id) {
        var _this = this;
        this.rest.deleteDownload(id).subscribe(function (response) {
            _this.deleteResponse = response;
            _this.getDownloads();
        }, function (error) { return _this.errorMessage = error; });
    };
    DownloadListPage.prototype.ionViewDidEnter = function () {
        this.getDownloads();
    };
    DownloadListPage.prototype.syncDownloads = function (event) {
        this.getDownloads();
    };
    DownloadListPage.prototype.deleteDownloads = function (event, id) {
        this.deleteDownload(id);
    };
    DownloadListPage.prototype.ionSelected = function () {
        alert("ok");
    };
    return DownloadListPage;
}());
DownloadListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-download-list',template:/*ion-inline-start:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/download-list/download-list.html"*/'<!--\n  Generated template for the DownloadListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Downloads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-icon name="sync" (click)="syncDownloads($event)"></ion-icon>\n\n  <div text-center *ngIf="!isLoaded">\n    <ion-spinner name="bubbles"></ion-spinner>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let download of downloads.downloads">\n      <h2>{{ download.name }}</h2>\n      <!--<p>{{ download.path }}</p>-->\n      <p> {{ download.percentage }}%</p>\n      <ion-icon *ngIf="download.percentage == 100" (click)="deleteDownloads($event, download.id)" name="remove-circle" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/download-list/download-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
], DownloadListPage);

//# sourceMappingURL=download-list.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, formBuilder, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.settingsForm = this.formBuilder.group({
            apiUrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
        storage.get('apiUrl').then(function (val) {
            _this.setApiUrl(val);
        });
    }
    SettingsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Saved',
            subTitle: 'Your settings are being saved',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    SettingsPage.prototype.setApiUrl = function (value) {
        this.apiUrl = value;
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.settingsFormSubmit = function () {
        this.storage.set('apiUrl', this.settingsForm.value.apiUrl);
        this.presentAlert();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="settingsForm" (ngSubmit)="settingsFormSubmit()">\n    <ion-input\n      type="text"\n      formControlName="apiUrl"\n      placeholder="Api url"\n      value="{{apiUrl}}">\n    </ion-input>\n    <button ion-button type="submit" [disabled]="!settingsForm.valid">Save</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/peruss_l/Projects/epitech/RemoteDownloader/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map