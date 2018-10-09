(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-main/user-main.component */ "./src/app/user-main/user-main.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-details/role-details.component */ "./src/app/role-details/role-details.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _log_main_log_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./log-main/log-main.component */ "./src/app/log-main/log-main.component.ts");
/* harmony import */ var _log_details_log_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./log-details/log-details.component */ "./src/app/log-details/log-details.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { OverviewComponent } from './overview/overview.component';











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { roles: ['Admin'] } },
    { path: 'user-main', component: _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_5__["UserMainComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { roles: ['Admin'] } },
    { path: 'user-details/:id', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { roles: ['Admin'] } },
    { path: 'role-main', component: _role_role_component__WEBPACK_IMPORTED_MODULE_8__["RoleComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { roles: ['Admin'] } },
    { path: 'role-details/:id', component: _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_7__["RoleDetailsComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { roles: ['Admin'] } },
    { path: 'log-main', component: _log_main_log_main_component__WEBPACK_IMPORTED_MODULE_9__["LogMainComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { roles: ['Admin', 'User'], permission: ['1', '3', '5', '7'] } },
    { path: 'log-details/:id', component: _log_details_log_details_component__WEBPACK_IMPORTED_MODULE_10__["LogDetailsComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { roles: ['Admin', 'User'], permission: ['1', '3', '5', '7'] } },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__["ForbiddenComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-share-layout>\n        <router-outlet></router-outlet>\n</app-share-layout>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WebApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _share_layout_share_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./share-layout/share-layout.component */ "./src/app/share-layout/share-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-main/user-main.component */ "./src/app/user-main/user-main.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _log_main_log_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./log-main/log-main.component */ "./src/app/log-main/log-main.component.ts");
/* harmony import */ var _log_details_log_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./log-details/log-details.component */ "./src/app/log-details/log-details.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role-details/role-details.component */ "./src/app/role-details/role-details.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _service_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/auth.interceptor */ "./src/app/service/auth.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_12__["OverviewComponent"],
                _share_layout_share_layout_component__WEBPACK_IMPORTED_MODULE_13__["ShareLayoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_15__["UserMainComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_23__["NotfoundComponent"],
                _log_main_log_main_component__WEBPACK_IMPORTED_MODULE_17__["LogMainComponent"],
                _log_details_log_details_component__WEBPACK_IMPORTED_MODULE_18__["LogDetailsComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_19__["RoleComponent"],
                _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_20__["RoleDetailsComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_25__["ForbiddenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__["AngularEditorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _service_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!--HEADER-->\n  <div class=\"dashboard-header db-shadow w-100\">\n    <h4>Dashboard</h4>\n  </div>\n  <!--FEATURES-->\n  <div class=\"dashboard-features db-shadow\">\n    <div class=\"row \">\n      <div class=\"col-lg-3 col-12\">\n        <div id=\"db-users\" class=\"dashboard-cards\" title=\"Number of users in database\">\n          <i class=\"fas fa-users\"></i>\n          <p>USERS</p>\n          <p>{{userCount}}</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-12\">\n        <div id=\"db-logs\" class=\"dashboard-cards\" title=\"Number of logs in database\">\n          <i class=\"fas fa-book-open\"></i>\n          <p>LOGS</p>\n          <p>{{logCount}}</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-12\">\n        <div id=\"db-roles\" class=\"dashboard-cards\" title=\"Number of roles in database\">\n          <i class=\"fas fa-clipboard-list\"></i>\n          <p>ROLES</p>\n          <p>{{roleCount}}</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-12\">\n        <div id=\"db-news\" class=\"dashboard-cards\" title=\"Number of today log\"> \n          <i class=\"far fa-calendar-check\"></i>\n          <p>NEWS</p>\n          <p>{{newsCount}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <!--TABLE-->\n    <div class=\"col-lg-9\">\n      <table class=\"db-shadow my-4\">\n        <thead>\n            <tr>\n              <th>Log Name</th>\n              <th>Created At</th>\n              <th>Modified At</th>\n              <th>By</th>\n              <th>Status</th>\n            </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let log of Logs\">\n            <td>{{log.LogName}}</td>\n            <td>{{log.CreateDate | date:'short'}}</td>\n            <td>{{log.ModifyDate | date:'short'}}</td>\n            <td>{{log.FullName}}</td>\n            <td [ngClass]=\"{\n              'text-primary': log.Status == 'Open',\n              'text-danger': log.Status == 'Processing',\n              'text-success': log.Status == 'Done'\n          }\">{{log.Status}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-lg-3\">\n      <!--Chart of log data-->\n      <div class=\"dashboard-chart db-shadow my-4\">\n        <div class=\"chart-header\">\n          <h4>Log Data</h4>\n        </div>\n        <p>Open</p>\n        <div class=\"progress my-2\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" attr.aria-valuenow=\"{{openPercent}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': openPercent+'%'}\"></div>\n          <span>{{openPercent}}%</span>\n        </div>\n        <p>Processing</p>\n        <div class=\"progress my-2\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\" role=\"progressbar\" attr.aria-valuenow=\"{{processPercent}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': processPercent+'%'}\"></div>\n          <span>{{processPercent}}%</span>\n        </div>\n        <p>Done</p>\n        <div class=\"progress my-2\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" role=\"progressbar\" attr.aria-valuenow=\"{{donePercent}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': donePercent+'%'}\"></div>\n          <span>{{donePercent }}%</span>\n        </div><br>\n      </div>\n      <!--Chart of daily logs-->\n      <canvas id=\"myChart\" width=\"400\" height=\"400\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700\");\n.db-shadow {\n  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);\n  background: #fff; }\n.dashboard-header {\n  padding: 18px 10px 10px 10px;\n  margin-bottom: 15px;\n  font-family: 'Raleway', sans-serif; }\n.dashboard-header h4 {\n  margin-left: 10px; }\n.dashboard-cards {\n  display: flex;\n  padding: 15px;\n  width: 100%;\n  border-right: 1px solid #eee;\n  font-family: 'Raleway', sans-serif; }\n.dashboard-cards i {\n  font-size: 1.5em;\n  padding: 5px;\n  min-width: 50px;\n  max-width: 50px;\n  text-align: center;\n  min-height: 50px;\n  max-height: 50px;\n  border-radius: 100%;\n  color: white;\n  padding-top: 10px; }\n#db-users i {\n  background: #5d2693; }\n#db-logs i {\n  background: #bf0955; }\n#db-roles i {\n  background: #159689; }\n#db-news i {\n  background: #a8a321; }\n.dashboard-cards p:nth-child(2) {\n  font-weight: 300;\n  font-size: 1.5em;\n  margin-left: 15px; }\n.dashboard-cards p:nth-child(3) {\n  font-weight: bold;\n  min-width: 30px;\n  max-width: 30px;\n  min-height: 30px;\n  max-height: 30px;\n  color: red;\n  text-align: center; }\ntable {\n  width: 100%;\n  font-weight: 300; }\ntd, th {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  padding: 20px;\n  border-bottom: 1px solid #eee; }\n.dashboard-chart {\n  height: auto; }\n.dashboard-chart h4, p {\n  margin-left: 15px;\n  font-family: 'Raleway', sans-serif; }\n.dashboard-chart h4 {\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n  margin-right: 15px; }\n.progress {\n  width: 90%;\n  margin-left: 15px; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/log.service */ "./src/app/service/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_logService) {
        this._logService = _logService;
        this.newsCount = 0;
        //Daily log
        this.Labels = [];
        this.Data = [];
    }
    DashboardComponent.prototype.GetCountTotal = function () {
        var _this = this;
        this._logService.GetCountTotal().subscribe(function (x) {
            _this.userCount = x[0].TotalUsers;
            _this.logCount = x[0].TotalLogs;
            _this.roleCount = x[0].TotalRoles;
        });
    };
    DashboardComponent.prototype.GetAllLog = function () {
        var _this = this;
        this._logService.GetLogOverview().subscribe(function (x) {
            /*Process the LOG DATA */
            _this.Logs = x;
            var openCount = 0;
            var processCount = 0;
            var doneCount = 0;
            _this.Logs.forEach(function (i) {
                if (i.Status == 'Open') {
                    openCount++;
                }
                else if (i.Status == 'Processing') {
                    processCount++;
                }
                else {
                    doneCount++;
                }
                /** LOG DATA */
                var dateString = new Date(i.CreateDate);
                var dateNow = new Date();
                if (dateString.getDate() == dateNow.getDate()
                    && dateString.getMonth() == dateNow.getMonth()
                    && dateString.getFullYear() == dateNow.getFullYear()) {
                    _this.newsCount++;
                }
                /** DAILY LOG */
                var label = dateString.getDate() + "/" + (dateString.getMonth() + 1);
                var countLabel = 0;
                if (_this.Labels.indexOf(label) == -1) {
                    _this.Labels.unshift(label);
                    _this.Logs.forEach(function (j) {
                        var dateSubString = new Date(j.CreateDate);
                        var dateLabel = dateSubString.getDate() + "/" + (dateSubString.getMonth() + 1);
                        if (dateLabel === label) {
                            countLabel++;
                        }
                    });
                    _this.Data.unshift(countLabel);
                }
                if (_this.Labels.length > 5) {
                    _this.Labels.slice(0, 5);
                    _this.Data.slice(0, 5);
                }
                _this.DrawChart();
            });
            var allLogs = openCount + processCount + doneCount;
            _this.openPercent = (openCount * 100) / allLogs;
            _this.processPercent = (processCount * 100) / allLogs;
            _this.donePercent = (doneCount * 100) / allLogs;
        });
    };
    DashboardComponent.prototype.CountPercentLogData = function () {
    };
    DashboardComponent.prototype.DrawChart = function () {
        var ctx = document.getElementById("myChart"); //.getContext('2d');
        var Chart;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.Labels,
                datasets: [{
                        label: 'Daily Logs',
                        data: this.Data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.GetCountTotal();
        this.GetAllLog();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")],
            providers: [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forbidden/forbidden.component.html":
/*!****************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style=\"margin-top: 100px;\">\n  <img src=\"/src/assets/image403.jpg\" >\n</div>"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.scss":
/*!****************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.scss */ "./src/app/forbidden/forbidden.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/log-details/log-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/log-details/log-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <i class=\"fas fa-chevron-circle-left float-right\" title=\"Back to Log management\" routerLink=\"/log-main\"></i>\n    <h4><span id=\"status\">Title</span> {{ log.LogName }} \n      <i class=\"far fa-edit\" title=\"Edit this log\" data-target=\"#EditLogModal\" data-toggle=\"modal\" (click)=\"InitalDescriptionNgModel()\"></i>\n    </h4>\n      <div class=\"info\">\n      <p><span>Create Date:</span> {{log.CreateDate | date: 'dd/MM/yyyy hh:mm'}}</p>\n      <p><span>Modify Date:</span> {{ log.ModifyDateLog | date: 'dd/MM/yyyy hh:mm' }}</p>\n      <p><span>Log Type:</span> {{ log.LogType }}</p>\n      <p><span>Status:</span> <q id=\"status\">{{ log.Status }}</q></p>\n      <div class=\"desc w-100\">\n          <p class=\"w-100 d-inline\"><span>Description: </span></p>\n          <div class=\"d-inline\" [innerHTML]=\"log.Description\"></div>\n      </div>\n    </div>\n</div>\n<table class=\"db-shadow my-4\">\n    <thead>\n        <tr>\n          <th>Fullname</th>\n          <th>Username</th>\n          <th>Modified Date</th>\n        </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of userlogs\">\n        <td>{{ item.FullName }}</td>\n        <td>{{ item.UserName }}</td>\n        <td>{{ item.ModifyDateUserLog | date: 'dd/MM/yyyy hh:mm' }}</td>\n      </tr>\n    </tbody>\n  </table>\n<!-- <h2>Log Details</h2>\n<hr />\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered\">\n    <tbody id=\"tbodyLogMain\">\n      <tr>\n        <th>Log Name</th>\n        <td>{{ log?.LogName }}</td>\n      </tr>\n      <tr>\n        <th>Create Date</th>\n        <td>{{ log?.CreateDate | date: 'dd/MM/yyyy hh:mm' }}</td>\n      </tr>\n      <tr>\n        <th>Last Modified Date</th>\n        <td>{{ log?.ModifyDateLog | date: 'dd/MM/yyyy hh:mm' }}</td>\n      </tr>\n      <tr>\n          <th>Type</th>\n          <td>{{ log?.LogType }}</td>\n        </tr>\n      <tr>\n        <th>Status</th>\n        <td>{{ log?.Status }}</td>\n      </tr>\n      <tr>\n        <th>Description</th>\n        <td [innerHTML]=\"log?.Description\"></td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"userlogs?.length > 0\" class=\"table-responsive row d-flex justify-content-center\">\n    <table class=\"table table-bordered table-hover col-lg-7\" style=\"text-align: center\">\n      <thead class=\"bg-info\">\n        <tr>\n          <th>FullName</th>\n          <th>UserName</th>\n          <th>Modified Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of userlogs\">\n          <td>{{ item.FullName }}</td>\n          <td>{{ item.UserName }}</td>\n          <td>{{ item.ModifyDateUserLog | date: 'dd/MM/yyyy hh:mm' }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br>\n  <div class=\"bnt-add\">\n    <button class=\"btn btn-danger mr-1\" routerLink=\"/log-main\"><i class=\"fa fa-reply\"></i></button>\n    <button data-target=\"#EditLogModal\" data-toggle=\"modal\" class=\"btn btn-success\" (click)=\"InitalDescriptionNgModel()\"><i class=\"fa fa-edit\"></i>Edit</button>\n  </div>\n</div> -->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"EditLogModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"max-width: 50%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"border-radius:5px 5px 0px 0px;background-color:#474747;color:white\">\n        <h5 class=\"modal-title\">Are you sure you want to edit log information?</h5>\n        <button type=\"button\" class=\"close text-light\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <form (ngSubmit)=\"OnSubmit(formEditLog);\" #formEditLog=\"ngForm\">\n        <div class=\"modal-body\">\n          <div class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Log Name</label>\n                <div class=\"col-lg-9\">\n                  <input class=\"form-control\" type=\"text\" ngModel=\"{{ log?.LogName }}\" name=\"logName\" #logName=\"ngModel\"\n                    required maxlength=\"50\" />\n                  <div *ngIf=\"(logName.errors?.maxlength || logName.errors?.required) && (logName.touched || logName.dirty)\"\n                    class=\"alert alert-danger\" role=\"alert\">\n                    <div [hidden]=\"!logName.errors?.required\">\n                      LogName is required\n                    </div>\n                    <div [hidden]=\"!logName.errors?.maxlength\">\n                      LogName cannot be more than 50 characters long\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Log Type</label>\n                <div class=\"col-lg-9\">\n                  <select class=\"form-control\" id=\"logType\" ngModel=\"{{ log?.LogType }}\" name=\"logType\" #logType=\"ngModel\">\n                    <option value=\"Info\">\n                      Info\n                    </option>\n                    <option value=\"Error\">\n                      Error\n                    </option>\n                    <option value=\"Auto Log\">\n                      Auto Log\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Status</label>\n                <div class=\"col-lg-9\">\n                  <select class=\"form-control\" id=\"status\" ngModel=\"{{ log?.Status }}\" name=\"status\" #status=\"ngModel\">\n                    <option value=\"Open\">\n                      Open\n                    </option>\n                    <option value=\"Processing\">\n                      Processing\n                    </option>\n                    <option value=\"Done\">\n                      Done\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Description</label>\n                <div class=\"col-lg-9\">\n                  <angular-editor [config]=\"editorConfig\" [(ngModel)]=\"descriptionNgModel\" name=\"description\"></angular-editor>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer text-center\">\n          <div class=\"form-actions no-color text-center\">\n            <input class=\"btn btn-outline-dark mr-1\" type=\"submit\" value=\"Save\" />\n            <input class=\"btn btn-outline-dark\" data-dismiss=\"modal\" value=\"Cancel\" />\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/log-details/log-details.component.scss":
/*!********************************************************!*\
  !*** ./src/app/log-details/log-details.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid h4 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-weight: 300;\n  border-bottom: 1px solid #eee; }\n\n.container-fluid .fa-chevron-circle-left {\n  font-size: 2em;\n  margin-top: 10px;\n  transition: all 0.3s; }\n\n.container-fluid .fa-edit {\n  margin-left: 15px; }\n\n.container-fluid i:hover {\n  color: #c4c4c4;\n  cursor: pointer; }\n\n.container-fluid i:active {\n  outline: none; }\n\n.container-fluid span {\n  font-weight: 500;\n  margin-right: 10px; }\n\n.container-fluid #status {\n  color: white;\n  background: #333333;\n  padding: 5px 10px;\n  border-radius: 5px; }\n\n.info {\n  border-bottom: 1px solid #eee;\n  width: 100%;\n  padding-bottom: 10px;\n  margin-left: 20px; }\n\n.db-shadow {\n  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);\n  background: #fff; }\n\ntable {\n  width: 100%;\n  font-weight: 300; }\n\ntd, th {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  padding: 20px;\n  border-bottom: 1px solid #eee; }\n"

/***/ }),

/***/ "./src/app/log-details/log-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/log-details/log-details.component.ts ***!
  \******************************************************/
/*! exports provided: LogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDetailsComponent", function() { return LogDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/log.service */ "./src/app/service/log.service.ts");
/* harmony import */ var src_app_service_userLog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/userLog.service */ "./src/app/service/userLog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogDetailsComponent = /** @class */ (function () {
    function LogDetailsComponent(logService, userLogService, activatedRouter, router) {
        this.logService = logService;
        this.userLogService = userLogService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.userID = localStorage.getItem('userID');
        this.httpSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.paramSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.editorConfig = {
            editable: true,
            height: '25px'
        };
    }
    LogDetailsComponent.prototype.ngOnInit = function () {
        this.GetLogByID();
    };
    LogDetailsComponent.prototype.ngOnDestroy = function () {
        this.httpSubscription.unsubscribe();
        this.paramSubscription.unsubscribe();
    };
    LogDetailsComponent.prototype.GetLogByID = function () {
        var _this = this;
        this.paramSubscription = this.activatedRouter.params.subscribe(function (params) { return _this.logID = params['id']; });
        if (!isNaN(Math.round(this.logID))) {
            this.httpSubscription.add(this.logService.GetLogByID(this.logID)
                .subscribe(function (result) {
                if (result) {
                    _this.log = result[0];
                    _this.tempDescriptionNgModel = result[0].Description;
                }
                else {
                    _this.router.navigate(['/not-found']);
                }
            }));
            this.httpSubscription.add(this.userLogService.GetAllUserLogs(this.logID)
                .subscribe(function (result) {
                _this.userlogs = result;
            }));
        }
        else {
            this.router.navigate(['/not-found']);
        }
    };
    LogDetailsComponent.prototype.InitalDescriptionNgModel = function () {
        this.descriptionNgModel = this.tempDescriptionNgModel;
    };
    LogDetailsComponent.prototype.OnSubmit = function (formEditLog) {
        var _this = this;
        this.httpSubscription.add(this.logService.UpdateLog(this.logID, this.userID, formEditLog.value)
            .subscribe(function (result) {
            _this.GetLogByID();
            $('#EditLogModal').modal('hide');
        }));
    };
    LogDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-details',
            template: __webpack_require__(/*! ./log-details.component.html */ "./src/app/log-details/log-details.component.html"),
            styles: [__webpack_require__(/*! ./log-details.component.scss */ "./src/app/log-details/log-details.component.scss")],
            providers: [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"], src_app_service_userLog_service__WEBPACK_IMPORTED_MODULE_2__["UserLogService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"],
            src_app_service_userLog_service__WEBPACK_IMPORTED_MODULE_2__["UserLogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogDetailsComponent);
    return LogDetailsComponent;
}());



/***/ }),

/***/ "./src/app/log-main/log-main.component.html":
/*!**************************************************!*\
  !*** ./src/app/log-main/log-main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h4>Log Management  <i class=\"fas fa-plus-circle add\" title=\"Add new log\" data-target=\"#CreateLogModal\" data-toggle=\"modal\"></i></h4>\n  <form (ngSubmit)=\"SearchLog();\">\n    <mat-form-field class=\"example-full-width\">\n        <input id=\"search-form\" name=\"username\" type=\"text\" class=\"form-control d-inline\" placeholder=\"Search by log name...\"\n          size=\"40px\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"autocomplete\">\n        <mat-autocomplete #autocomplete=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of filteredOption | async\" [value]=\"option.LogName\">\n            {{ option.LogName }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <button id=\"search-button\" class=\"btn btn-outline-secondary\"><i class=\"fas fa-search\"></i></button>\n    </form><br>\n  <div class=\"log-table\">\n    <div [attr.id]=\"item.LogId\" class=\"log db-shadow\" *ngFor=\"let item of logs | filter: filter | paginate: { itemsPerPage: 5, currentPage: p }\">\n      <div class=\"head\">\n          <i class=\"fas fa-info-circle text-warning\" title=\"This log type is info\" *ngIf=\"item.LogType == 'Info'\"></i>\n          <i class=\"fas fa-exclamation-triangle text-danger\" title=\"This log type is error\" *ngIf=\"item.LogType == 'Error'\"></i>\n          <i class=\"fas fa-laptop-code text-secondary\" title=\"This log type is Auto\" *ngIf=\"item.LogType == 'Auto Log'\"></i>\n        <a routerLink=\"/log-details/{{ item.LogId }}\" id=\"title\">{{item.LogName}}</a>\n        <p id=\"status\" [ngClass]=\"{\n          'bg-primary': item.Status == 'Open',\n          'bg-danger': item.Status == 'Processing',\n          'bg-success': item.Status == 'Done'\n        }\">{{ item.Status }}</p>\n      </div>\n      <div class=\"date\">\n        <p><span class=\"font-weight-bold\">Created at: </span>{{ item.CreateDate | date: 'dd/MM/yyyy hh:mm' }}</p>\n        <p><span class=\"font-weight-bold\">Modified at: </span>{{ item.ModifyDate | date: 'dd/MM/yyyy hh:mm' }}</p>\n        <i title=\"Remove this log\" class=\"fas fa-trash-alt\" (click)=\"setId(item.LogId)\" data-target=\"#deleteModal\" data-toggle=\"modal\"></i>\n      </div>\n    </div>\n  </div>\n  <br>\n  <pagination-controls class=\"d-flex justify-content-end\" (pageChange)=\"p = $event\"></pagination-controls>\n  <div *ngIf=\"logs?.length == 0\">\n    <h2>Sorry No Result Found</h2>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"CreateLogModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"max-width: 50%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"border-radius:5px 5px 0px 0px;background-color:#474747;color:white\">\n        <h5 class=\"modal-title\">Create new log</h5>\n        <button type=\"button\" class=\"close text-light\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <form (ngSubmit)=\"OnSubmit(formAddLog);\" #formAddLog=\"ngForm\">\n        <div class=\"modal-body\">\n          <div class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Log Name</label>\n                <div class=\"col-lg-9\">\n                  <input id=\"logName\" class=\"form-control\" type=\"text\" ngModel name=\"logName\" #logName=\"ngModel\"\n                    required maxlength=\"50\" />\n                  <div *ngIf=\"(logName.errors?.maxlength || logName.errors?.required) && (logName.touched || logName.dirty)\"\n                    class=\"alert alert-danger\" role=\"alert\">\n                    <div [hidden]=\"!logName.errors?.required\">\n                      LogName is required\n                    </div>\n                    <div [hidden]=\"!logName.errors?.maxlength\">\n                      LogName cannot be more than 50 characters long\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Log Type</label>\n                <div class=\"col-lg-9\">\n                  <select id=\"logType\" class=\"form-control\" id=\"logType\" [(ngModel)]=\"logTypeNgModel\" name=\"logType\"\n                    #logType=\"ngModel\">\n                    <option value=\"Info\">\n                      Info\n                    </option>\n                    <option value=\"Error\">\n                      Error\n                    </option>\n                    <option value=\"Auto Log\">\n                      Auto Log\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Status</label>\n                <div class=\"col-lg-9\">\n                  <select id=\"status\" class=\"form-control\" id=\"status\" [(ngModel)]=\"statusNgModel\" name=\"status\"\n                    #status=\"ngModel\">\n                    <option value=\"Open\">\n                      Open\n                    </option>\n                    <option value=\"Processing\">\n                      Processing\n                    </option>\n                    <option value=\"Done\">\n                      Done\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-lg-2\">Description</label>\n                <div class=\"col-lg-9\">\n                  <angular-editor [config]=\"editorConfig\" [(ngModel)]=\"descriptionNgModel\" name=\"description\"></angular-editor>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer text-center\">\n          <div class=\"form-actions no-color text-center\">\n            <input class=\"btn btn-outline-dark mr-1\" type=\"submit\" value=\"Save\" />\n            <input class=\"btn btn-outline-dark\" data-dismiss=\"modal\" value=\"Cancel\" />\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Modal Delete -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Confirm Delete?</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    <span class=\"sr-only\">Close</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Do you really wanna delete this log ?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n                <button type=\"button\" class=\"btn btn-primary-outline\" (click)=\"DeleteLog(LogIdPicked)\" data-dismiss=\"modal\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/log-main/log-main.component.scss":
/*!**************************************************!*\
  !*** ./src/app/log-main/log-main.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n\n#search-form {\n  width: calc(100% - 60px);\n  display: inline-block; }\n\n#search-button {\n  float: right;\n  width: 60px; }\n\n.container-fluid h4 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-weight: 300;\n  border-bottom: 1px solid #eee; }\n\n.add {\n  font-size: 1.2em;\n  color: #76c26c;\n  transition: all 0.2s; }\n\n.add:hover {\n  cursor: pointer;\n  color: #78ce6c; }\n\ntable {\n  width: 100%; }\n\n.db-shadow {\n  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);\n  background: #fff; }\n\n.log {\n  margin-top: 5px; }\n\n.log .head i {\n  font-size: 1.3em;\n  display: inline-block;\n  padding: 10px; }\n\n.log .head {\n  width: 100%; }\n\n.log #title {\n  display: inline-block;\n  margin-left: 10px;\n  text-decoration: none; }\n\n.log #status {\n  display: inline-block;\n  margin-left: 15px;\n  font-size: 0.8em;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px; }\n\n.log .date {\n  font-size: 0.8em;\n  display: flex;\n  width: 100%;\n  text-align: right; }\n\n.log .date p {\n  margin-left: 15px; }\n\n.log .date i {\n  font-size: 1.4em;\n  margin-left: 15px;\n  color: #b12323;\n  transition: all 0.2s; }\n\n.log .date i:hover {\n  cursor: pointer;\n  color: #e60f0f; }\n"

/***/ }),

/***/ "./src/app/log-main/log-main.component.ts":
/*!************************************************!*\
  !*** ./src/app/log-main/log-main.component.ts ***!
  \************************************************/
/*! exports provided: LogMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogMainComponent", function() { return LogMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/log.service */ "./src/app/service/log.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogMainComponent = /** @class */ (function () {
    function LogMainComponent(logService) {
        this.logService = logService;
        this.logTypeNgModel = 'Info';
        this.statusNgModel = 'Open';
        this.p = 1;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.userID = localStorage.getItem('userID');
        this.httpSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.editorConfig = {
            editable: true,
            height: '25px'
        };
    }
    LogMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetAllLogs();
        this.filteredOption = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return value.length > 0 ? _this._filter(value.toString()) : []; }));
    };
    LogMainComponent.prototype.ngOnDestroy = function () {
        this.httpSubscription.unsubscribe();
    };
    LogMainComponent.prototype.setId = function (id) {
        this.LogIdPicked = id;
    };
    LogMainComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.logs.filter(function (result) { return result['LogName'].toLowerCase().includes(filterValue); });
    };
    LogMainComponent.prototype.GetAllLogs = function () {
        var _this = this;
        this.httpSubscription.add(this.logService.GetAllLogs()
            .subscribe(function (result) { return _this.logs = result; }));
    };
    LogMainComponent.prototype.SearchLog = function () {
        var _this = this;
        if (this.myControl.value === '') {
            this.GetAllLogs();
        }
        else {
            this.httpSubscription.add(this.logService.SearchLog(this.myControl.value)
                .subscribe(function (result) { return _this.logs = result; }));
        }
    };
    LogMainComponent.prototype.OnSubmit = function (formAddLog) {
        var _this = this;
        this.httpSubscription.add(this.logService.CreateLog(this.userID, formAddLog.value)
            .subscribe(function (result) {
            _this.GetAllLogs();
            $('#logName').val('');
            _this.logTypeNgModel = 'Info';
            _this.statusNgModel = 'Open';
            _this.descriptionNgModel = '';
            $('#CreateLogModal').modal('hide');
        }));
    };
    LogMainComponent.prototype.DeleteLog = function (logID) {
        this.httpSubscription.add(this.logService.DeleteLog(logID)
            .subscribe(function (success) {
            $('#' + logID).hide();
        }));
    };
    LogMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-main',
            template: __webpack_require__(/*! ./log-main.component.html */ "./src/app/log-main/log-main.component.html"),
            styles: [__webpack_require__(/*! ./log-main.component.scss */ "./src/app/log-main/log-main.component.scss")],
            providers: [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], LogMainComponent);
    return LogMainComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style=\"margin-top:200px;\"><h1>Login</h1></div>\n<div class=\"\">\n  <form (ngSubmit)=\"OnSubmit(formSignIn)\" #formSignIn=\"ngForm\" class=\"form-signin\">\n    <input type=\"text\" placeholder=\"Enter your username\" ngModel name=\"userName\" class=\"form-control\" #username=\"ngModel\" required>\n    <div *ngIf=\"(!isExistUsername || username.errors?.required) && (username.touched || username.dirty)\" class=\"alert alert-danger\" role=\"alert\">\n      <div [hidden]=\"!username.errors?.required\">\n        Username is required\n      </div>\n      <div *ngIf=\"!isExistUsername\">\n        Username is incorrected\n      </div>\n    </div> \n    <br>\n    <input type=\"password\" placeholder=\"Enter your password\" ngModel name=\"password\" class=\"form-control\" #password=\"ngModel\" required>\n    <div *ngIf=\"(!isExistPassword || password.errors?.required) && (password.touched || password.dirty)\" class=\"alert alert-danger\" role=\"alert\">\n        <div [hidden]=\"!password.errors?.required\">\n            Password is required\n        </div>\n        <div *ngIf=\"!isExistPassword\">\n            Password is incorrected\n        </div>\n      </div> \n    <button [disabled]=\"formSignIn.invalid\" class=\"btn btn-primary\" style=\"margin-top: 10px; float: right;\">Login</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  margin: 0 auto;\n  max-width: 330px;\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isExistUsername = true;
        this.isExistPassword = true;
        this.httpSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.IsLoggedIn()) {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.httpSubscription.unsubscribe();
    };
    LoginComponent.prototype.OnSubmit = function (formSignIn) {
        var _this = this;
        this.httpSubscription.add(this.authService.Login(formSignIn.value.userName, formSignIn.value.password)
            .subscribe(function (result) {
            if (result == 0) {
                _this.isExistPassword = false;
            }
            else if (result == -1) {
                _this.isExistUsername = false;
                _this.isExistPassword = false;
            }
            else {
                _this.authService.SetSession(formSignIn.value.userName, result);
                if (JSON.parse(result.role) == "Admin") {
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.router.navigate(['/log-main']);
                }
            }
        }));
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style=\"margin-top: 100px;\">\n  <img src=\"/src/assets/image404.jpg\" >\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 d-none d-sm-block\">\n    Log Management System Dashboard\n</h1>\n<br>\n<div class=\"row mb-3\">\n    <div class=\"col-xl-4 col-sm-6 py-2\">\n        <div class=\"card bg-success text-white h-100\">\n            <div class=\"card-body bg-success\">\n                <h6 class=\"text-uppercase\">Users</h6>\n                <h1 class=\"display-4\">{{ countInfo?.TotalUsers }}</h1>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-4 col-sm-6 py-2\">\n        <div class=\"card text-white bg-danger h-100\">\n            <div class=\"card-body bg-danger\">\n                <h6 class=\"text-uppercase\">Logs</h6>\n                <h1 class=\"display-4\">{{ countInfo?.TotalLogs }}</h1>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-4 col-sm-6 py-2\">\n        <div class=\"card text-white bg-info h-100\">\n            <div class=\"card-body bg-info\">\n                <h6 class=\"text-uppercase\">Roles</h6>\n                <h1 class=\"display-4\">{{ countInfo?.TotalRoles }}</h1>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--/row-->\n<a id=\"features\"></a>\n<hr>\n<div class=\"row my-4\">\n    <div class=\"col-lg-12 col-md-8\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-hover\">\n                <thead class=\"bg-info\">\n                    <tr>\n                        <th>Log Name</th>\n                        <th>Create Date</th>\n                        <th>Modified Date</th>\n                        <th>By</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of logOverview\">\n                        <td>{{ item.LogName }}</td>\n                        <td>{{ item.CreateDate | date: 'dd/MM/yyyy hh:mm' }}</td>\n                        <td>{{ item.ModifyDate | date: 'dd/MM/yyyy hh:mm' }}</td>\n                        <td>{{ item.FullName }}</td>\n                        <td [ngClass]=\"{\n                            'bg-success': item.Status == 'Open',\n                            'bg-warning': item.Status == 'Processing',\n                            'bg-primary': item.Status == 'Done'\n                        }\">{{ item.Status }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/overview/overview.component.scss":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_service_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/log.service */ "./src/app/service/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(logService) {
        this.logService = logService;
        this.httpSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.GetCountTotal();
        this.GetLogOverview();
    };
    OverviewComponent.prototype.ngOnDestroy = function () {
        this.httpSubscription.unsubscribe();
    };
    OverviewComponent.prototype.GetCountTotal = function () {
        var _this = this;
        this.httpSubscription.add(this.logService.GetCountTotal()
            .subscribe(function (result) { return _this.countInfo = result[0]; }));
    };
    OverviewComponent.prototype.GetLogOverview = function () {
        var _this = this;
        this.httpSubscription.add(this.logService.GetLogOverview()
            .subscribe(function (result) { return _this.logOverview = result; }));
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/overview/overview.component.scss")],
            providers: [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/role-details/role-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/role-details/role-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ROLES DETAILS</h2>\n<hr />\n<div class=\"table table-responsive\">\n  <table class=\"table table-bordered\">\n    <tbody class=\"table-striped\">\n      <tr>\n        <th>RoleName</th>\n        <td>{{ roleDetails?.RoleName }}</td>\n      </tr>\n      <tr>\n        <th>Permissions</th>\n        <td>{{ roleDetails?.Permissions }}</td>\n      </tr>\n      <tr>\n        <th>CreateDate</th>\n        <td>{{ roleDetails?.CreateDate | date:'dd/MM/yyyy hh:mm' }}</td>\n      </tr>\n      <tr>\n        <th>ModifyDate</th>\n        <td>{{ roleDetails?.ModifyDate | date:'dd/MM/yyyy hh:mm' }}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"roleDetails?.FullName\" class=\" table-responsive table-striped\">\n    <table class=\"table table-bordered col-md-12\">\n      <tbody>\n        <tr>\n          <th>FullName</th>\n          <th>UserName</th>\n        </tr>\n        <tr *ngFor=\"let item of userRoles\">\n          <td>{{ item.FullName }}</td>\n          <td>{{ item.UserName }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br>\n  <div class=\"bnt-add\">\n    <a routerLink='/role-main/' class=\"btn btn-danger\"><i class=\"zmdi zmdi-long-arrow-left\"></i>Back</a>\n    <a href=\"#\" data-target=\"#EditRoleModal\" data-toggle=\"modal\" class=\"btn btn-success\" (click)=\"InitialPermissionValue();\"><i\n        class=\"zmdi zmdi-long-arrow-right\"></i>Edit</a>\n  </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"EditRoleModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"border-radius:5px 5px 0px 0px;background-color:#5cb85c;color:white\">\n        <h5 class=\"modal-title\">Are you sure you want to edit this role?</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          <span aria-hidden=\"true\">&times;</span>\n          <span class=\"sr-only\">Close</span>\n        </button>\n      </div>\n      <div class=\"modal-body table table-striped\">\n        <form #formEditRole=\"ngForm\">\n          <div class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">RoleName</span>\n                <div class=\"col-md-9\">\n                  <input name=\"RoleName\" ngModel=\"{{roleDetails?.RoleName}}\" class=\"form-control\" type=\"text\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Permissions</span>\n                <div class=\"col-md-9\" id=\"checkboxes\">\n                  <input type=\"checkbox\" name=\"1\" [checked]=\"viewPermission == true\"> View\n                  <input type=\"checkbox\" name=\"2\" [checked]=\"createPermission == true\"> Create\n                  <input type=\"checkbox\" name=\"4\" [checked]=\"modifyPermission == true\"> Modify\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer text-center\">\n            <div class=\"form-actions no-color text-center\">\n              <input data-dismiss=\"modal\" class=\"btn btn-success\" type=\"submit\" value=\"Save\" (click)=\"onSubmit(formEditRole,roleDetails?.RoleId)\" />\n              <button class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/role-details/role-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/role-details/role-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role-details/role-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/role-details/role-details.component.ts ***!
  \********************************************************/
/*! exports provided: RoleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailsComponent", function() { return RoleDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/role.service */ "./src/app/service/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleDetailsComponent = /** @class */ (function () {
    function RoleDetailsComponent(roleService, router) {
        this.roleService = roleService;
        this.router = router;
    }
    RoleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.rid = +params['id'];
        });
        this.GetRoledata(this.rid);
    };
    RoleDetailsComponent.prototype.GetRoledata = function (id) {
        var _this = this;
        this.roleService.GetRoleDetails(id).subscribe(function (x) {
            _this.roleDetails = x[0];
            _this.tempPermissionValue = x[0].Permissions;
            _this.userRoles = x;
        });
    };
    RoleDetailsComponent.prototype.onSubmit = function (formEditRole, rid) {
        this.newRole = formEditRole.value;
        this.newRole.Permissions = this.GetPermission();
        this.newRole.RoleId = rid;
        this.UpdateRoles();
    };
    RoleDetailsComponent.prototype.GetPermission = function () {
        var permission = 0;
        $('#checkboxes input:checked').each(function () {
            permission += parseInt($(this).attr('name'));
        });
        return permission;
    };
    RoleDetailsComponent.prototype.UpdateRoles = function () {
        this.roleService.UpdateRole(this.newRole).subscribe(function (success) {
            alert("You updates roles successful!");
            window.location.reload();
        }, function (error) { return alert(error); });
    };
    RoleDetailsComponent.prototype.InitialPermissionValue = function () {
        this.permissionValue = this.tempPermissionValue;
        this.CheckedByPermission();
    };
    RoleDetailsComponent.prototype.CheckedByPermission = function () {
        if (this.permissionValue === 1 || this.permissionValue === 3 || this.permissionValue === 5 || this.permissionValue === 7) {
            this.viewPermission = true;
        }
        if (this.permissionValue === 2 || this.permissionValue === 3 || this.permissionValue === 6 || this.permissionValue === 7) {
            this.createPermission = true;
        }
        if (this.permissionValue === 4 || this.permissionValue === 5 || this.permissionValue === 6 || this.permissionValue === 7) {
            this.modifyPermission = true;
        }
    };
    RoleDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-details',
            template: __webpack_require__(/*! ./role-details.component.html */ "./src/app/role-details/role-details.component.html"),
            styles: [__webpack_require__(/*! ./role-details.component.scss */ "./src/app/role-details/role-details.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RoleDetailsComponent);
    return RoleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search{\r\n  width: calc(100% - 100px);\r\n}\r\n"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"display-4 d-none d-sm-block\">\n  Role Management\n</h2>\n<button class=\"btn btn-outline-success\" data-target=\"#AddRoleModal\" data-toggle=\"modal\">\n    <i class=\"fas fa-user\"></i> Create New\n  </button>\n<div class=\"row my-4\">\n  <div class=\"col-lg-12 col-md-8\">\n    <div class=\"form-group\">\n      <input id=\"search\" name=\"name\" type=\"text\" class=\"form-control d-inline\" placeholder=\"Search roles by name\">\n      <button class=\"btn btn-outline-dark float-right\"><i class=\"fas fa-search\"></i>Search</button>\n    </div>\n    <div class=\"table-responsive my-5\">\n      <table class=\"table table-bordered\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th>RoleName</th>\n            <th>Permissions</th>\n            <th>CreateDate</th>\n            <th>ModifyDate</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of roles\">\n            <td>{{item.RoleName}}</td>\n            <td>{{item.Permissions}}</td>\n            <td>{{item.CreateDate | date:'dd/MM/yyyy hh:mm'}}</td>\n            <td>{{item.ModifyDate | date:'dd/MM/yyyy hh:mm'}}</td>\n            <td>\n              <input type=\"button\" value=\"Delete\" class=\"btn btn-outline-danger mr-1\" (click)=\"getRolePicked(item.RoleName,item.RoleId)\"\n                data-target=\"#roleDeleteModal\" data-toggle=\"modal\">\n              <input type=\"button\" value=\"Details\" class=\"btn btn-outline-primary\" routerLink=\"/role-details/{{ item.RoleId }}\">\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<!-- Modal Add Role-->\n<div class=\"modal fade\" id=\"AddRoleModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"border-radius:5px 5px 0px 0px;background-color:#5cb85c;color:white\">\n        <h5 class=\"modal-title ml-auto\">Please enter full information of the role.</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          <span aria-hidden=\"true\">&times;</span>\n          <span class=\"sr-only\">Close</span>\n        </button>\n      </div>\n      <div class=\"modal-body table table-striped\">\n        <form #formAddRole=\"ngForm\">\n          <div class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">RoleName</span>\n                <div class=\"col-md-9\">\n                  <input ngModel name=\"roleName\" class=\"form-control\" type=\"text\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Permissions</span>\n                <div class=\"col-md-9\" id=\"checkboxes\">\n                  <input type=\"checkbox\" name=\"1\"> View\n                  <input type=\"checkbox\" name=\"2\"> Create\n                  <input type=\"checkbox\" name=\"4\"> Modify\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer text-center\">\n              <div class=\"form-actions no-color text-center\">\n                <input data-dismiss=\"modal\" class=\"btn btn-success\" type=\"submit\" value=\"Save\" (click)=\"onSubmit(formAddRole)\" />\n                <button class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal Delete Role -->\n<div class=\"modal fade\" id=\"roleDeleteModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{rolenamePicked}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n          <span class=\"sr-only\">Close</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Do you really wanna delete this role ?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary-outline\" (click)=\"DeleteRole(roleIdPicked)\" data-dismiss=\"modal\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/role.service */ "./src/app/service/role.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleComponent = /** @class */ (function () {
    function RoleComponent(_roleService) {
        this._roleService = _roleService;
    }
    RoleComponent.prototype.getRolePicked = function (rn, rid) {
        this.rolenamePicked = rn;
        this.roleIdPicked = rid;
    };
    RoleComponent.prototype.ngOnInit = function () {
        this.GetAllRoles();
    };
    RoleComponent.prototype.GetAllRoles = function () {
        var _this = this;
        this._roleService.GetAllRoles().subscribe(function (data) { return _this.roles = data; });
    };
    RoleComponent.prototype.onSubmit = function (formAddRole) {
        this.newRole = formAddRole.value;
        this.AddRoles();
    };
    RoleComponent.prototype.AddRoles = function () {
        this.newRole.Permissions = this.GetPermission();
        this._roleService.AddRole(this.newRole).subscribe(function (success) {
            alert("You add roles successful!");
            window.location.reload();
        }, function (error) { return alert(error); });
    };
    RoleComponent.prototype.DeleteRole = function (id) {
        this._roleService.DeleteRole(id).subscribe(function (success) {
            $("#" + id).hide();
            alert("You delete roles successful!");
            window.location.reload();
        }, function (error) { return alert(error); });
    };
    RoleComponent.prototype.GetPermission = function () {
        var permission = 0;
        $('#checkboxes input:checked').each(function () {
            permission += parseInt($(this).attr('name'));
        });
        return permission;
    };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_role_service__WEBPACK_IMPORTED_MODULE_0__["RoleService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (next) {
        var isLoggedIn = this.authService.IsLoggedIn();
        if (isLoggedIn) {
            var roles = next.data['roles'];
            var permissions = next.data['permission'];
            if (roles) {
                var isMatchPermission;
                if (permissions) {
                    isMatchPermission = this.authService.permissionMatch(permissions);
                }
                else {
                    isMatchPermission = true;
                }
                var isMatchRole = this.authService.roleMatch(roles);
                if (isMatchRole && isMatchPermission) {
                    return true;
                }
                else {
                    this.router.navigate(['/forbidden']);
                    return false;
                }
            }
            else {
                return true;
            }
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/auth.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/service/auth.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (succ) { }, function (err) {
                if (err.status === 401)
                    _this.router.navigateByUrl('/login');
            }));
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.Login = function (UserName, Password) {
        var data = "username=" + UserName + "&password=" + Password + "&grant_type=password";
        return this.http.post("http://www.c135m36.somee.com/token", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.SetSession = function (username, result) {
        localStorage.setItem('userName', username);
        localStorage.setItem('userID', result.userID);
        localStorage.setItem('userToken', result.access_token);
        localStorage.setItem('userRole', result.role);
        localStorage.setItem('permission', result.permission);
    };
    AuthService.prototype.IsLoggedIn = function () {
        return localStorage.getItem('userToken');
    };
    AuthService.prototype.Logout = function () {
        localStorage.removeItem('userToken');
    };
    AuthService.prototype.roleMatch = function (allowedRoles) {
        var userRole = JSON.parse(localStorage.getItem('userRole'));
        if (allowedRoles.indexOf(userRole) > -1) {
            return true;
        }
        return false;
    };
    AuthService.prototype.permissionMatch = function (allowedPermission) {
        var permission = JSON.parse(localStorage.getItem('permission'));
        if (allowedPermission.indexOf(permission) > -1) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/log.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/log.service.ts ***!
  \****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogService = /** @class */ (function () {
    function LogService(http) {
        this.http = http;
        this.url = "http://www.c135m36.somee.com/api/Logs";
    }
    LogService.prototype.GetAllLogs = function () {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url + '/GetAllLogs');
    };
    LogService.prototype.GetLogByID = function (id) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url + '/' + id);
    };
    LogService.prototype.SearchLog = function (dataSearch) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url + '/search/' + dataSearch);
    };
    LogService.prototype.CreateLog = function (userID, log) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.post(this.url + '/add/' + userID, log);
    };
    LogService.prototype.UpdateLog = function (logID, userID, log) {
        log.LogID = logID;
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.put(this.url + '/edit/' + userID, log);
    };
    LogService.prototype.DeleteLog = function (logID) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.delete(this.url + '/delete/' + logID);
    };
    LogService.prototype.GetCountTotal = function () {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url + '/GetCountTotal', { headers: reqHeader });
    };
    LogService.prototype.GetLogOverview = function () {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url + '/GetLogOverview', { headers: reqHeader });
    };
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/service/role.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/role.service.ts ***!
  \*****************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.url = "http://www.c135m36.somee.com/api/roles";
    }
    RoleService.prototype.GetAllRoles = function () {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url);
    };
    RoleService.prototype.AddRole = function (role) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.post(this.url, role);
    };
    RoleService.prototype.DeleteRole = function (id) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.delete(this.url, id);
    };
    RoleService.prototype.UpdateRole = function (role) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.put(this.url, role);
    };
    RoleService.prototype.GetRoleDetails = function (id) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        var url = "http://www.c135m36.somee.com/api/roles?uid=";
        return this.http.get(url + id);
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://www.c135m36.somee.com/api/users/";
    }
    UserService.prototype.GetAllUsers = function () {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url);
    };
    UserService.prototype.GetUserDetails = function (uid) {
        var url = "http://www.c135m36.somee.com/api/users?uid=";
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url + uid);
    };
    UserService.prototype.AddUser = function (user) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.post(this.url, user);
    };
    UserService.prototype.DeleteUser = function (id) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.delete(this.url + id);
    };
    UserService.prototype.UpdateUser = function (user) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.put(this.url, user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/service/userLog.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/userLog.service.ts ***!
  \********************************************/
/*! exports provided: UserLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogService", function() { return UserLogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserLogService = /** @class */ (function () {
    function UserLogService(http) {
        this.http = http;
        this.url = "http://www.c135m36.somee.com/api/UserLogs";
    }
    UserLogService.prototype.GetAllUserLogs = function (logID) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'False' });
        return this.http.get(this.url + '/' + logID);
    };
    UserLogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserLogService);
    return UserLogService;
}());



/***/ }),

/***/ "./src/app/share-layout/share-layout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/share-layout/share-layout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--NAVBAR-->\n<nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-main mb-3\">\n    <div class=\"flex-row d-flex\">\n        <button type=\"button\" class=\"navbar-toggler mr-2 \" data-toggle=\"offcanvas\" title=\"Toggle responsive left sidebar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n            <a class=\"navbar-brand\" *ngIf=\"isLoggedIn()\" routerLink='/home'><i class=\"fas fa-address-book\"></i>Log Management</a>\n            <a class=\"navbar-brand\" *ngIf=\"!isLoggedIn()\" routerLink='/login'><i class=\"fas fa-address-book\"></i>Log Management</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"collapse\">Hi, {{ username }}!</a>\n            </li>\n            <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\" data-target=\"#myModal\" data-toggle=\"modal\">\n                    <i class=\"fas fa-sign-out-alt\"></i>Logout\n                </a>\n            </li>\n            <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/login\">\n                        <i class=\"fas fa-sign-in-alt\"></i> Login\n                    </a>\n                </li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"container-fluid\" id=\"main\">\n    <div class=\"row row-offcanvas row-offcanvas-left\">\n        <!--SIDEBAR-->\n        <div *ngIf=\"isLoggedIn()\" class=\"col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0\" id=\"sidebar\" role=\"navigation\">\n            <ul class=\"nav flex-column sticky-top pl-0 pt-5 mt-3\">\n                <li class=\"nav-item\"><a class=\"nav-link bg-info text-light\" href=\"#\"><i class=\"far fa-eye\"></i>Overview</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\"><i class=\"fas fa-pen-fancy\"></i>My Logs</a></li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#submenu1\" data-toggle=\"collapse\" data-target=\"#submenu1\">\n                        <i class=\"fas fa-desktop\"></i>Admin▾\n                    </a>\n                    <ul class=\"list-unstyled flex-column pl-3 collapse\" id=\"submenu1\" aria-expanded=\"false\">\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/user-main\" routerLinkActive=\"active\"><i class=\"fas fa-users\"></i>Users</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link\"routerLink=\"/role-main\" routerLinkActive=\"active\"><i class=\"fas fa-pencil-ruler\"></i>Roles</a></li>\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/log-main\" routerLinkActive=\"active\"><i class=\"fas fa-clipboard-list\"></i>Logs</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n        <!--/col-->\n\n        <div class=\"col main pt-5 mt-3\">\n            <ng-content></ng-content>\n        </div>\n            <!--/row-->\n    </div>\n\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Logout</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                    <span class=\"sr-only\">Close</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Do you really wanna logout ?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" (click)=\"logout()\" class=\"btn btn-primary-outline\" data-dismiss=\"modal\">OK</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/share-layout/share-layout.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/share-layout/share-layout.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 992px) {\n  .row-offcanvas {\n    position: relative;\n    transition: all 0.25s ease-out; }\n  .row-offcanvas-left\n.sidebar-offcanvas {\n    left: -33%; }\n  .row-offcanvas-left.active {\n    left: 33%;\n    margin-left: -6px; }\n  .sidebar-offcanvas {\n    position: absolute;\n    top: 0;\n    width: 33%;\n    height: 100%; } }\n\n/*\r\n* Off Canvas wider at sm breakpoint\r\n* --------------------------------------------------\r\n*/\n\n@media screen and (max-width: 34em) {\n  .row-offcanvas-left\n.sidebar-offcanvas {\n    left: -45%; }\n  .row-offcanvas-left.active {\n    left: 45%;\n    margin-left: -6px; }\n  .sidebar-offcanvas {\n    width: 45%; } }\n\n.card {\n  overflow: hidden; }\n\n.bg-main {\n  background: #48A9E6; }\n"

/***/ }),

/***/ "./src/app/share-layout/share-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/share-layout/share-layout.component.ts ***!
  \********************************************************/
/*! exports provided: ShareLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLayoutComponent", function() { return ShareLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShareLayoutComponent = /** @class */ (function () {
    function ShareLayoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.username = localStorage.getItem('userName');
    }
    ShareLayoutComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('[data-toggle=offcanvas]').click(function () {
                $('.row-offcanvas').toggleClass('active');
            });
        });
    };
    ShareLayoutComponent.prototype.isLoggedIn = function () {
        return this.authService.IsLoggedIn();
    };
    ShareLayoutComponent.prototype.logout = function () {
        this.authService.Logout();
        this.router.navigate(['/login']);
    };
    ShareLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-layout',
            template: __webpack_require__(/*! ./share-layout.component.html */ "./src/app/share-layout/share-layout.component.html"),
            styles: [__webpack_require__(/*! ./share-layout.component.scss */ "./src/app/share-layout/share-layout.component.scss")],
            providers: [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShareLayoutComponent);
    return ShareLayoutComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>DETAILS USER</h2>\n<hr />\n<div class=\"table table-responsive table-striped \">\n  <table class=\"table table-bordered\">\n    <tbody>\n      <tr>\n        <th>UserName</th>\n        <td>{{ userDetails?.UserName }}</td>\n      </tr>\n      <tr>\n        <th>FullName</th>\n        <td>{{ userDetails?.FullName }}</td>\n      </tr>\n      <tr>\n        <th>Birthdate</th>\n        <td>{{ userDetails?.Birthdate | date:'dd/MM/yyyy'}}</td>\n      </tr>\n      <tr>\n        <th>Gender</th>\n        <td>{{ userDetails?.Gender?'Male':'Female' }}</td>\n      </tr>\n      <tr>\n        <th>Phone</th>\n        <td>{{ userDetails?.Phone }}</td>\n      </tr>\n      <tr>\n        <th>Address</th>\n        <td>{{ userDetails?.Address}}</td>\n      </tr>\n      <tr>\n        <th>CreateDate</th>\n        <td>{{ userDetails?.CreateDate | date:'dd/MM/yyyy hh:mm' }}</td>\n      </tr>\n      <tr>\n        <th>ModifyDate</th>\n        <td>{{ userDetails?.ModifyDate | date:'dd/MM/yyyy hh:mm'}}</td>\n      </tr>\n      <tr>\n        <th>RoleName</th>\n        <td>{{ userDetails?.RoleName }}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"userLog?.length > 0\" class=\" table-responsive table-striped\">\n    <table class=\"table table-bordered col-md-12\">\n      <thead>\n        <tr>\n          <th>LogName</th>\n          <th>LogType</th>\n          <th>CreateDateLog</th>\n          <th>ModifyDateLog</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let log of userLog\">\n          <td>{{ log.LogName }}</td>\n          <td>{{ log.LogType }}</td>\n          <td>{{ log.CreateDateLog | date:'dd/MM/yyyy hh:mm'}}</td>\n          <td>{{ log.ModifyDateLog | date:'dd/MM/yyyy hh:mm'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br>\n  <div class=\"bnt-add\">\n    <a routerLink='/user-main/' class=\"btn btn-danger \"><i class=\"fa fa-reply\"></i> Back</a>\n    <a href='' data-target=\"#EditUserModal\" data-toggle=\"modal\" class=\"btn btn-success \"><i class=\"fa fa-edit\"></i>\n      Edit</a>\n  </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"EditUserModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"border-radius:5px 5px 0px 0px;background-color:#5cb85c;color:white\">\n        <h5 class=\"modal-title\">Are you sure you want to edit profile?</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          <span aria-hidden=\"true\">&times;</span>\n          <span class=\"sr-only\">Close</span>\n        </button>\n      </div>\n      <div class=\"modal-body table table-striped\">\n        <form #formEdit=\"ngForm\">\n          <div class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">UserName</span>\n                <div class=\"col-md-9\">\n                  <input name=\"UserName\" ngModel=\"{{userDetails?.UserName}}\" class=\"form-control\" type=\"text\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">FullName</span>\n                <div class=\"col-md-9\">\n                  <input name=\"FullName\" ngModel=\"{{userDetails?.FullName}}\" class=\"form-control\" type=\"text\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Birthday</span>\n                <div class=\"col-md-9\">\n                  <input name=\"Birthdate\" ngModel=\"{{userDetails?.Birthdate}}\" class=\"form-control\" type=\"datetime-local\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Gender</span>\n                <div class=\"col-md-9\">\n                  <select name=\"Gender\" ngModel=\"{{userDetails?.Gender?'Male':'Female'}}\" class=\"form-control\">\n                    <option>\n                      Male\n                    </option>\n                    <option>\n                      Female\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Phone</span>\n                <div class=\"col-md-9\">\n                  <input name=\"Phone\" ngModel=\"{{userDetails?.Phone}}\" class=\"form-control\" type=\"number\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Address</span>\n                <div class=\"col-md-9\">\n                  <input name=\"Address\" ngModel=\"{{userDetails?.Address}}\" class=\"form-control\" type=\"text\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">RoleName</span>\n                <div class=\"col-md-9\">\n                  <select name=\"RoleId\" ngModel=\"{{userDetails?.RoleName}}\" class=\"form-control\">\n                    <option value=\"\" selected disabled hidden>Choose RoleName</option>\n                    <option *ngFor=\"let role of roles\">\n                      {{role.RoleName}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer text-center\">\n            <div class=\"form-actions no-color text-center\">\n              <input data-dismiss=\"modal\" class=\"btn btn-success\" type=\"submit\" value=\"Save\" (click)=\"onSubmit(formEdit,userDetails?.UserId)\" />\n              <button class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-details/user-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var src_app_service_userLog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/userLog.service */ "./src/app/service/userLog.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/role.service */ "./src/app/service/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userService, userLogService, _roleService, router) {
        this.userService = userService;
        this.userLogService = userLogService;
        this._roleService = _roleService;
        this.router = router;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = +params['id'];
        });
        this.GetUserdata(this.uid);
        this._roleService.GetAllRoles().subscribe(function (data) { return _this.roles = data; });
    };
    UserDetailsComponent.prototype.GetUserdata = function (id) {
        var _this = this;
        this.userService.GetUserDetails(id).subscribe(function (x) {
            _this.userDetails = x[0];
            _this.userLog = x;
        });
    };
    UserDetailsComponent.prototype.findIdByNameRole = function (roleNameSelected) {
        var t = -1;
        this.roles.forEach(function (e) {
            if (e.RoleName == roleNameSelected) {
                t = e.RoleId;
            }
        });
        return t;
    };
    UserDetailsComponent.prototype.onSubmit = function (formEdit, uid) {
        this.newUser = formEdit.value;
        this.newUser.RoleId = this.findIdByNameRole(this.newUser.RoleId);
        this.newUser.Gender = this.newUser.Gender === "Male" ? true : false;
        this.newUser.UserId = uid;
        this.UpdateUsers();
    };
    UserDetailsComponent.prototype.UpdateUsers = function () {
        this.userService.UpdateUser(this.newUser).subscribe(function (success) {
            alert("You updates users successful !");
            window.location.reload();
        }, function (error) { return alert(error); });
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/user-details/user-details.component.scss")],
            providers: [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_service_userLog_service__WEBPACK_IMPORTED_MODULE_0__["UserLogService"]]
        }),
        __metadata("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_service_userLog_service__WEBPACK_IMPORTED_MODULE_0__["UserLogService"], src_app_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-main/user-main.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-main/user-main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"display-4 d-none d-sm-block\">\n  User Management\n</h2>\n<button class=\"btn btn-outline-success\" data-target=\"#AddUserModal\" data-toggle=\"modal\">\n  <i class=\"fas fa-user\"></i> Create New\n</button>\n<div class=\"row my-4\">\n  <div class=\"col-lg-12 col-md-8\">\n    <div class=\"form-group\">\n      <input id=\"search\" name=\"name\" type=\"text\" class=\"form-control d-inline\" placeholder=\"Search users by name\">\n      <button class=\"btn btn-outline-dark float-right\"><i class=\"fas fa-search\"></i>Search</button>\n    </div>\n    <div class=\"table-responsive my-5\">\n      <table class=\"table table-bordered\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th>Username</th>\n            <th>Fullname</th>\n            <th>Birthday</th>\n            <th>Gender</th>\n            <th>Phone</th>\n            <th>Address</th>\n            <th>RoleName</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of users\">\n            <td>{{item.UserName}}</td>\n            <td>{{item.FullName}}</td>\n            <td>{{item.Birthdate | date:'dd/MM/yyyy'}}</td>\n            <td>{{item.Gender?'Male':'Female'}}</td>\n            <td>{{item.Phone}}</td>\n            <td>{{item.Address}}</td>\n            <td>{{item.RoleName}}</td>\n            <td>\n              <input type=\"button\" value=\"Delete\" class=\"btn btn-outline-danger mr-1\" (click)=\"getUserPicked(item.FullName,item.UserId)\"\n                data-target=\"#deleteModal\" data-toggle=\"modal\">\n              <input type=\"button\" value=\"Details\" class=\"btn btn-outline-primary\" routerLink='/user-details/{{ item.UserId }}'>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"AddUserModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"border-radius:5px 5px 0px 0px;background-color:#5cb85c;color:white\">\n        <h5 class=\"modal-title ml-auto\">Please enter full information of the user.</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          <span aria-hidden=\"true\">&times;</span>\n          <span class=\"sr-only\">Close</span>\n        </button>\n      </div>\n      <div class=\"modal-body table table-striped\">\n        <form #formAdd=\"ngForm\">\n          <div class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">UserName</span>\n                <div class=\"col-md-9\">\n                  <input name=\"UserName\" ngModel class=\"form-control\" type=\"text\" value=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Password</span>\n                <div class=\"col-md-9\">\n                  <input name=\"Password\" ngModel class=\"form-control\" type=\"password\" value=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">RePassword</span>\n                <div class=\"col-md-9\">\n                  <input class=\"form-control\" type=\"password\" value=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">FullName</span>\n                <div class=\"col-md-9\">\n                  <input name=\"FullName\" ngModel class=\"form-control\" type=\"text\" value=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Birthday</span>\n                <div class=\"col-md-9\">\n                  <input name=\"Birthdate\" ngModel class=\"form-control\" type=\"date\" value=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Gender</span>\n                <div class=\"col-md-9\">\n                  <select name=\"Gender\" ngModel class=\"form-control\">\n                    <option value=\"\" selected disabled hidden>Choose Gender</option>\n                    <option>\n                      Male\n                    </option>\n                    <option>\n                      Female\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Phone</span>\n                <div class=\"col-md-9\">\n                  <input name=\"Phone\" ngModel class=\"form-control\" type=\"number\" value=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">Address</span>\n                <div class=\"col-md-9\">\n                  <input name=\"Address\" ngModel class=\"form-control\" type=\"text\" value=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <span class=\"control-label col-md-3 my-1\">RoleName</span>\n                <div class=\"col-md-9\">\n                  <select name=\"RoleId\" ngModel class=\"form-control\">\n                    <option value=\"\" selected disabled hidden>Choose RoleName</option>\n                    <option *ngFor=\"let role of roles\">\n                      {{role.RoleName}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer text-center\">\n            <div class=\"form-actions no-color text-center\">\n              <input data-dismiss=\"modal\" class=\"btn btn-success\" type=\"submit\" value=\"Save\" (click)=\"onSubmit(formAdd)\" />\n              <button class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal Delete -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{usernamePicked}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n          <span class=\"sr-only\">Close</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Do you really wanna delete this user ?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary-outline\" (click)=\"DeleteUser(userIdPicked)\" data-dismiss=\"modal\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-main/user-main.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-main/user-main.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search {\n  width: calc(100% - 100px); }\n"

/***/ }),

/***/ "./src/app/user-main/user-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-main/user-main.component.ts ***!
  \**************************************************/
/*! exports provided: UserMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMainComponent", function() { return UserMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var src_app_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/role.service */ "./src/app/service/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMainComponent = /** @class */ (function () {
    function UserMainComponent(_userService, _roleService) {
        this._userService = _userService;
        this._roleService = _roleService;
    }
    UserMainComponent.prototype.getUserPicked = function (usn, uid) {
        this.usernamePicked = usn;
        this.userIdPicked = uid;
    };
    UserMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetAllUsers();
        this._roleService.GetAllRoles().subscribe(function (x) { return _this.roles = x; });
    };
    UserMainComponent.prototype.findIdByNameRole = function (roleNameSelected) {
        var t = -1;
        this.roles.forEach(function (e) {
            if (e.RoleName == roleNameSelected) {
                t = e.RoleId;
            }
        });
        return t;
    };
    UserMainComponent.prototype.onSubmit = function (formAdd) {
        this.newUser = formAdd.value;
        this.newUser.RoleId = this.findIdByNameRole(this.newUser.RoleId);
        this.newUser.Gender = this.newUser.Gender === "Male" ? true : false;
        this.AddUsers();
    };
    UserMainComponent.prototype.AddUsers = function () {
        this._userService.AddUser(this.newUser).subscribe(function (success) {
            alert("You add users successful!");
            window.location.reload();
        }, function (error) { return alert(error); });
    };
    UserMainComponent.prototype.GetAllUsers = function () {
        var _this = this;
        this._userService.GetAllUsers().subscribe(function (data) { return _this.users = data; });
    };
    UserMainComponent.prototype.DeleteUser = function (id) {
        this._userService.DeleteUser(id).subscribe(function (success) {
            $("#" + id).hide();
            alert("You delete users successful!");
            window.location.reload();
        }, function (error) { return alert(error); });
    };
    UserMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-main',
            template: __webpack_require__(/*! ./user-main.component.html */ "./src/app/user-main/user-main.component.html"),
            styles: [__webpack_require__(/*! ./user-main.component.scss */ "./src/app/user-main/user-main.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], src_app_service_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], UserMainComponent);
    return UserMainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\d\MiniProject\WebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
