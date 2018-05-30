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
		var e = new Error('Cannot find module "' + req + '".');
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
/*! exports provided: appRouters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouters", function() { return appRouters; });
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "./src/app/update-profile/update-profile.component.ts");
/* harmony import */ var _askquestion_askquestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./askquestion/askquestion.component */ "./src/app/askquestion/askquestion.component.ts");
/* harmony import */ var _viewquestion_viewquestion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewquestion/viewquestion.component */ "./src/app/viewquestion/viewquestion.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_notauth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/notauth.guard */ "./src/app/services/notauth.guard.ts");










var appRouters = [
    { path: ' ', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_services_notauth_guard__WEBPACK_IMPORTED_MODULE_9__["NotAuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'forum', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_0__["ForumComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'forum/ask_question/:id', component: _askquestion_askquestion_component__WEBPACK_IMPORTED_MODULE_6__["AskquestionComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'forum/view_question/:id', component: _viewquestion_viewquestion_component__WEBPACK_IMPORTED_MODULE_7__["ViewquestionComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'update_profile', component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_5__["UpdateProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'components', component: _components_components_component__WEBPACK_IMPORTED_MODULE_1__["ComponentsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: '**', redirectTo: '/dashboard' }
    // {path: '**', component: DashboardComponent, canActivate: [AuthGuard]}
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    margin-top: 10px;\r\n    border-top: 2px solid silver;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 15px;\r\n    background-color: #f5f5f5;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<div class=\"footer\">H-bots</div>\r\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "./src/app/update-profile/update-profile.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_notauth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/notauth.guard */ "./src/app/services/notauth.guard.ts");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/reverse.pipe */ "./src/app/pipes/reverse.pipe.ts");
/* harmony import */ var _askquestion_askquestion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./askquestion/askquestion.component */ "./src/app/askquestion/askquestion.component.ts");
/* harmony import */ var _pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/unique.pipe */ "./src/app/pipes/unique.pipe.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _viewquestion_viewquestion_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./viewquestion/viewquestion.component */ "./src/app/viewquestion/viewquestion.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__["ForumComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__["UpdateProfileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_20__["ReversePipe"],
                _askquestion_askquestion_component__WEBPACK_IMPORTED_MODULE_21__["AskquestionComponent"],
                _pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_22__["UniquePipe"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_23__["SearchPipe"],
                _viewquestion_viewquestion_component__WEBPACK_IMPORTED_MODULE_24__["ViewquestionComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["appRouters"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__["FroalaViewModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _services_app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _services_notauth_guard__WEBPACK_IMPORTED_MODULE_19__["NotAuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/askquestion/askquestion.component.css":
/*!*******************************************************!*\
  !*** ./src/app/askquestion/askquestion.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ask-save, .ask-save:active, .ask-save:focus, .ask-save:hover{\r\n    background-color: #1e57c8;\r\n    border-color: #789ade;\r\n}\r\n.ask-close, .ask-close:active, .ask-close:focus, .ask-close:hover{\r\n    background-color: #fb2e01;\r\n    border-color: #fc8166;\r\n    color: #fff;\r\n}\r\n.click-here{\r\n    color: #1e57c8;\r\n    text-decoration: underline;\r\n}\r\n.upload-image{\r\n    max-height: 300px;\r\n    width: 100%;\r\n}\r\n.upload-image:hover{\r\n    background-color: #ddd;\r\n}\r\n.tags{\r\n    /* background: #f5f5f5; */\r\n    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19); */\r\n    padding: 8px 15px;\r\n}\r\n.domain{\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #081735;\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 5px;\r\n    margin-bottom: 3px;\r\n}\r\n.sub-domain{\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    color: #081735;\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 5px;\r\n    margin-bottom: 3px;\r\n}\r\n.badge{\r\n    margin-left: 2px;\r\n    margin-top: 2px;\r\n    color: #777;\r\n    border: 1px solid #777;\r\n    background-color: #fff;\r\n    cursor: pointer;\r\n    line-height: 1.5;\r\n}\r\n.badge:hover, .selected-domain, .selected-subdomain {\r\n    color: #fff;\r\n    background: #1e57c8;\r\n    border: 1px solid #fff;\r\n}\r\n.message{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: green;\r\n    text-align: center;\r\n\r\n    /* padding: 10px; */\r\n}\r\n.back-to {\r\n    text-align: right;\r\n}\r\na {\r\n    cursor: pointer;\r\n}\r\n.fr-quick-insert { display: none; }\r\n\r\n"

/***/ }),

/***/ "./src/app/askquestion/askquestion.component.html":
/*!********************************************************!*\
  !*** ./src/app/askquestion/askquestion.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Home</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/forum\">Forum</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Ask Question</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"message\" *ngIf=\"quesRes\">{{quesRes.message}}</div>\n      <div class=\"back-to\">\n        <a routerLink=\"/forum\" class=\"\">Back to Forum</a>\n      </div>\n      <form [formGroup]=\"askQuesForm\" (submit)=\"askQuestion()\">\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"question-title\">Question Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"question-title\" formControlName=\"questionTitle\" aria-describedby=\"questionlHelp\"\n              placeholder=\"Write question title here\">\n\n            <small id=\"questionlHelp\" class=\"form-text text-muted\">Please check previous questions and ask!</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"question-description\">Question Description</label>\n            <div [froalaEditor]=\"options\" formControlName=\"questionDescription\">Hello, Froala!</div>\n\n            <!-- <textarea class=\"form-control\" id=\"question-description\" formControlName=\"questionDescription\" rows=\"3\"></textarea> -->\n          </div>\n          <div class=\"form-group\">\n            <label for=\"reference-images\">Reference Images</label>\n            <input type=\"file\" id=\"ref-images\" style=\"display: none\" (change)=\"handleFileSelect($event)\" />\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div onclick=\"document.getElementById('ref-images').click()\">\n                  <img *ngIf=\"base64textString\" class=\"upload-image\" [src]=\"'data:image/jpg;base64,'+base64textString\" />\n                  <i *ngIf=\"!base64textString\" class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\n                  <br/>\n                  <a *ngIf=\"!base64textString\">Click Here to Upload</a>\n                </div>\n                <a *ngIf=\"base64textString\" (click)=\"deleteImage()\">Delete Image</a>\n              </div>\n            </div>\n            <!-- <small id=\"fileHelp\" class=\"form-text text-muted\">You can select upto 5 images</small> -->\n          </div>\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" checked=\"false\" formControlName=\"askAnonymously\"> Ask anonymously\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <button type=\"submit\" [disabled]=\"!askQuesForm.valid\" class=\"btn btn-success ask-save\">Ask</button>\n            <button type=\"button\" class=\"btn btn-default ask-close\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"col-md-8\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"tags\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"domain\">Domain</div>\n            <div class=\"domains\">\n              <span class=\"badge badge-secondary domain-badge\" [ngClass]=\"{'selected-domain': selectedDomain===domain.domain}\" *ngFor=\"let domain of domains | unique\"\n                (click)=\"getSubdomain(domain.domain)\">{{domain.domain}}</span>\n            </div>\n            <div class=\"sub-domain\">Sub Domain</div>\n            <div class=\"domains\">\n              <div *ngIf=\"!subdomain\">Please select Domain first</div>\n              <span class=\"badge badge-secondary\" *ngFor=\"let sub of subdomain\" [ngClass]=\"{'selected-subdomain': selectedSubDomain.indexOf(sub.subDomain)!==-1}\"\n                (click)=\"selectSubDomain(sub.subDomain)\">{{sub.subDomain}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/askquestion/askquestion.component.ts":
/*!******************************************************!*\
  !*** ./src/app/askquestion/askquestion.component.ts ***!
  \******************************************************/
/*! exports provided: AskquestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskquestionComponent", function() { return AskquestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AskquestionComponent = /** @class */ (function () {
    function AskquestionComponent(fb, authService, appService, router) {
        this.fb = fb;
        this.authService = authService;
        this.appService = appService;
        this.router = router;
        this.selectedSubDomain = [];
        this.options = {
            charCounterCount: true,
            quickInsertButtons: [],
            toolbarButtons: ['bold', 'italic', 'underline', 'subscript', 'superscript', '|', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'insertLink', 'insertTable', '|', 'quote', 'selectAll', 'html'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
        };
        this.base64textString = '';
        this.askQuesForm = this.fb.group({
            questionTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            questionDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            askAnonymously: false,
            questionImage: [''],
            userId: [''],
            askedBy: [''],
            domain: [''],
            subDomain: ['']
        });
    }
    AskquestionComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    AskquestionComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
    };
    AskquestionComponent.prototype.deleteImage = function () {
        this.base64textString = '';
    };
    AskquestionComponent.prototype.askQuestion = function () {
        var _this = this;
        this.askQuesForm.patchValue({
            questionImage: this.base64textString,
            userId: this.userId, askedBy: localStorage.getItem('fullname'),
            domain: this.selectedDomain,
            subDomain: this.selectedSubDomain
        });
        this.appService.addQuestion(this.askQuesForm.value).subscribe(function (res) {
            _this.quesRes = res;
            if (_this.quesRes.success) {
                _this.selectedDomain = null;
                _this.selectedSubDomain = null;
                _this.subdomain = null;
                _this.base64textString = null;
                _this.askQuesForm.reset();
            }
        });
    };
    AskquestionComponent.prototype.getSubdomain = function (dom) {
        this.selectedDomain = dom;
        this.subdomain = this.domains.filter(function (el) {
            return el.domain === dom;
        });
        this.selectedSubDomain = [];
    };
    AskquestionComponent.prototype.selectSubDomain = function (data) {
        if (this.selectedSubDomain === null) {
            this.selectedSubDomain.push(data);
        }
        else {
            // this.selectedSubDomain.push(data);
            var index = this.selectedSubDomain.findIndex(function (x) { return x === data; });
            console.log(index);
            if (index === -1) {
                this.selectedSubDomain.push(data);
            }
            else {
                this.selectedSubDomain.splice(index, 1);
            }
        }
    };
    AskquestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('user');
        this.appService.getDomains().subscribe(function (res) {
            _this.domains = res;
        });
    };
    AskquestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-askquestion',
            template: __webpack_require__(/*! ./askquestion.component.html */ "./src/app/askquestion/askquestion.component.html"),
            styles: [__webpack_require__(/*! ./askquestion.component.css */ "./src/app/askquestion/askquestion.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AskquestionComponent);
    return AskquestionComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.css":
/*!*****************************************************!*\
  !*** ./src/app/components/components.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  components works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
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

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: [__webpack_require__(/*! ./components.component.css */ "./src/app/components/components.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"logout()\" >logout</div>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum.component.css":
/*!*******************************************!*\
  !*** ./src/app/forum/forum.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.right-inner-addon {\r\n    position: relative;\r\n}\r\n.right-inner-addon input {\r\n    padding-right: 30px;    \r\n}\r\n.right-inner-addon i {\r\n    position: absolute;\r\n    right: 0px;\r\n    padding: 10px 12px;\r\n    pointer-events: none;\r\n}\r\n.ask-question{\r\n    background-color: transparent;\r\n    border: 1px solid #FF8C00;\r\n    font-weight: bold;\r\n    color: #FF8C00;\r\n}\r\n.ask-question:active, .ask-question:focus, .ask-question:hover{\r\n    background-color: #FFA500 ;\r\n    color: white;\r\n    font-weight: bold;\r\n    border-color: #FF8C00;\r\n}\r\n.right-tab{\r\n    padding-left: 10px;\r\n}\r\n.panel-default{\r\n    border-color: transparent;\r\n}\r\n.panel-default > .panel-heading {\r\n    background-color: #f5f5f5;\r\n    border-color: #ddd;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n}\r\n.panel-body{\r\n    word-wrap: break-word;\r\n    float:left;\r\n}\r\n.popular-footer{\r\n    padding-left: 2px;\r\n}\r\n#popular-footer{\r\n    margin:0;\r\n}\r\n.p-question{\r\n    margin-bottom: 10px;\r\n}\r\n#likes{\r\n    float:left;\r\n    width:25%;\r\n    overflow:hidden;\r\n}\r\n#dislikes{\r\n    float:left;\r\n    width:25%;\r\n    overflow:hidden;\r\n}\r\n.question-footer{\r\n    margin:0;\r\n    padding-top: 3px;\r\n}\r\n.rec-likes{\r\n    float:left;\r\n    width:10%;\r\n    color: #1e57c8;\r\n    overflow:hidden;\r\n}\r\n.rec-dislikes{\r\n    float:left;\r\n    width:10%;\r\n    color: #fb2e01;\r\n    overflow:hidden;\r\n}\r\n.rec-comments{\r\n    float:left;\r\n    width:10%;\r\n    overflow:hidden;\r\n}\r\n.tags{\r\n    padding-top: 3px;\r\n   color: #a1b0ce;\r\n}\r\n.recent-questions{\r\n    margin-top: 10px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n.question{\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #081735;\r\n}\r\n.askQuestion-title{\r\n    color: #081735;\r\n}\r\n.modal-content{\r\n    border-radius: 0px;\r\n}\r\n.drop-zone{\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: 2px dashed #b2beb5;\r\n    background-color: #f7f8f7; \r\n    height: 100px;\r\n    font-weight: bold;\r\n}\r\n.drop-zone-title{\r\n    text-align: center;\r\n    font-size: 11px;\r\n}\r\n.darg-drop{\r\n    color: #000;\r\n}\r\n.description{\r\n    padding: 8px;\r\n}"

/***/ }),

/***/ "./src/app/forum/forum.component.html":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Home</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Forum</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row\">\n    <!--Left side content-->\n    <div class=\"col-md-8 col-xs-12\">\n      <!--Seach bar-->\n      <div class=\"form-group row\">\n        <div class=\"pull-right\">\n          <button type=\"button\" class=\"btn btn-primary ask-question\" (click)=\"askQuestionPgae()\">Ask Question</button>\n        </div>\n        <div class=\"col-xs-12 col-md-3 pull-right\">\n          <div class=\"right-inner-addon \">\n            <i class=\"glyphicon glyphicon-search\"></i>\n            <input type=\"search\" class=\"form-control\" (input)=\"searchQuestion($event.target.value)\" placeholder=\"Search question\" />\n          </div>\n        </div>\n      </div>\n      <!--Questions-->\n      <br/> \n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"!allQuestions\">No Questions Found</div>\n        <div *ngIf=\"allQuestions\">\n          <div class=\"col-md-12\" *ngFor=\"let question of pagedItems | reverse\">\n            <div class=\"recent-questions\">\n              <div class=\"question\"><a (click)=\"viewQuestion(question._id)\">{{question.questionTitle}}</a></div>\n              <small class=\"form-text text-muted\">\n                <a *ngIf=\"question.askAnonymously==true\">Anonymous</a>&nbsp;\n                <a *ngIf=\"question.askAnonymously==false\">{{question.askedBy}}</a>&nbsp;\n              </small>\n              <small class=\"form-text text-muted\">{{question.createdAt | date}}</small>\n              <div class=\"description\" [innerHTML]=\"question.questionDescription\">\n                <!-- {{question.questionDescription}} -->\n              </div>\n              <div class=\"question-footer\">\n                <div class=\"rec-likes\">\n                  <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n                  <span *ngIf=\"question.likes!=0\">{{question.likes}}</span>\n                </div>\n                <div class=\"rec-dislikes\">\n                  <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\n                  <span *ngIf=\"question.dislikes!=0\">{{question.dislikes}}</span>\n                </div>\n                <div class=\"rec-commentts\">\n                  <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\n                  <span *ngIf=\"question.likes!=0\">{{question.likes}}</span>\n                </div>\n              </div>\n              <div class=\"tags\">\n                Domain:\n                <span>{{question.domain}} </span>\n\n                Sub Domain:\n                <span>{{question.subDomain}} </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pull-right\">\n            <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a (click)=\"setPage(1)\">First</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n            </li>\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n              <a (click)=\"setPage(page)\">{{page}}</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a (click)=\"setPage(pager.totalPages)\">Last</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--Right side content-->\n    <div class=\"col-md-4\">\n      <div class=\"right-tab\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">Popular Questions</div>\n              <div class=\"panel-body\">\n                <div class=\"popular-questions\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12 p-question\" *ngFor=\"let question of allQuestions | slice:0:5;\">\n                      <div class=\"popular-question\">\n                        <a>{{question.questionTitle}}</a>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div id=\"popular-footer\">\n                            <div id=\"likes\">\n                              <span class=\"label label-primary\">\n                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n                                {{question.likes}}\n                              </span>\n                            </div>\n                            <div id=\"dislikes\">\n                              <span class=\"label label-danger\">\n                                <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\n                                {{question.dislikes}}\n                              </span>\n                            </div>\n                            <div id=\"comments\">\n                              <span class=\"label label-primary\">\n                                <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\n                                {{question.dislikes}}\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/services/pager.service.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumComponent = /** @class */ (function () {
    function ForumComponent(appService, router, pagerService) {
        this.appService = appService;
        this.router = router;
        this.pagerService = pagerService;
        this.pager = {};
        this.seachPipe = new _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"]();
        this.userId = '';
    }
    ForumComponent.prototype.askQuestionPgae = function () {
        this.router.navigate(['/forum/ask_question', this.userId]);
    };
    ForumComponent.prototype.searchQuestion = function (eve) {
        this.pagedItems = this.seachPipe.transform(this.allQuestions, eve);
        this.pager = this.pagerService.getPager(this.pagedItems.length, 1);
    };
    ForumComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ForumComponent.prototype.viewQuestion = function (id) {
        this.router.navigate(['/forum/view_question', id]);
    };
    ForumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getQuestions().subscribe(function (res) {
            _this.allQuestions = res;
            _this.allItems = _this.allQuestions;
            console.log(res);
            // initialize to page 1
            _this.setPage(1);
        });
        this.userId = localStorage.getItem('user');
    };
    ForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.css */ "./src/app/forum/forum.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    cursor: pointer;\r\n}\r\n.bg-color{\r\n    background-color: #143A85;\r\n    position: fixed; \r\n    top: 0px; \r\n    left: 0px; \r\n    width: 100%; \r\n    height: 100%;\r\n}\r\n.container{\r\n    color: white;\r\n}\r\n.logo{\r\n    height: 15%;\r\n    width: 10%;\r\n    display:block;\r\n    margin:auto;\r\n}\r\n.panel{\r\n    color: black;\r\n    background-color: #f8f8ff;\r\n}\r\n.panel-body{\r\n    padding: 5%;\r\n}\r\n/* media queries */\r\n/* @media (min-width: 360px) and (max-width: 650px) {\r\n    .logo{\r\n        height: 25%;\r\n        width: 25%;\r\n        display:block;\r\n        margin:auto;\r\n    }\r\n    .left-border{\r\n        display: none;\r\n    }\r\n    .signup-complete{\r\n        width: 100%;\r\n        margin-left: 0;\r\n    }   \r\n} */\r\nh3{\r\n    text-align: center;\r\n}\r\n.left-border{\r\n    border-left: 1px solid white;\r\n}\r\n.panel{\r\n    width: 70%;\r\n   margin-left: 15%;\r\n}\r\n.btn-primary{\r\n    background-color: #FF8C00 ;\r\n    border-color: #FFA500;\r\n}\r\n.btn-primary:active, .btn-primary:focus, .btn-primary:hover{\r\n    background-color: #FFA500 ;\r\n    border-color: #FF8C00;\r\n}\r\n.forgot-password{\r\n    color: blue;\r\n    font-size: 12px;\r\n    padding: 2%;\r\n    font-weight: bold;\r\n}\r\n.forgot-password:hover{\r\n    color: cornflowerblue;\r\n}\r\n.success{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: green;\r\n    text-align: center;\r\n}\r\n.error{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: red;\r\n    text-align: center;\r\n}\r\n.invalid-input:focus{\r\n    border-color: rgba(255, 0, 0, 0.8);\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6);\r\n    outline: 0 none;\r\n}\r\n.signup-complete{\r\n    margin-top: 5%;\r\n    border-radius: 5px;\r\n    color: #081735;\r\n    width: 80%;\r\n    margin-left:10%;\r\n    background-color: #f8f8ff;\r\n}\r\n.reg-title{\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    color: #081735;\r\n}\r\n.signup-head-bottom {\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.user-hal{\r\n    padding: 10px;\r\n}\r\n.personal-details{\r\n    padding: 10px;\r\n    margin-left: 2%;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n}\r\n.right-space{\r\n    margin-left: 5%;\r\n}\r\n.personal-body{\r\n    padding-left: 25px;\r\n}\r\n.error-msg{\r\n    font-size: 11px;\r\n    color: #ff0000;\r\n    font-weight: bold;\r\n    padding: 2px;\r\n}\r\n.dummy-pic{\r\n    height: 30%;\r\n    width: 30%;\r\n}\r\n.signup-submit{\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color\">\n  <div class=\"container\" *ngIf=\"signupStatus==='complete'\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n        <img class=\"logo\" src=\"../../assets/logo.png\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <hr/>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xs-12 left-content\">\n\n          </div>\n          <div class=\"col-md-6 col-sm-12 col-xs-12 left-border\">\n            <div class=\"row login\">\n              <div class=\"col-md-12\">\n                <h3>Login</h3>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"panel\">\n                  <div class=\"panel-body\">\n                    <div *ngIf=\"message!=null\" [ngClass]=\"{'success':message.success==true,'error':message.success==false}\">{{message.message}}</div>\n                    <form [formGroup]=\"loginForm\" (submit)=\"login()\">\n                      <div class=\"form-group\">\n                        <label for=\"hallticket\">Hallticket No.</label>\n                        <input type=\"text\" class=\"form-control\" [ngClass]=\"{'invalid-input':loginForm.controls.hallticket.invalid}\" formControlName=\"hallticket\"\n                          placeholder=\"Enter Hallticket No.\">\n                        <small class=\"form-text text-muted\" *ngIf=\"loginForm.controls.hallticket.invalid\">Please check Hallticket number</small>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{'invalid-input':loginForm.controls.password.invalid}\"\n                          placeholder=\"Enter Password\">\n                        <small class=\"form-text text-muted\" *ngIf=\"loginForm.controls.password.invalid\">Please check password</small>\n                        <a href=\"#\" class=\"pull-right forgot-password\">Forgot Password ?</a>\n                      </div>\n                      <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary btn-lg btn-block\">Login</button>\n                      </div>\n                    </form>\n                    <div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr/>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\" *ngIf=\"signupStatus === 'incomplete'\">\n    <div class=\"signup-complete\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-xs-12\">\n          <div class=\"reg-title\">Complete Registration</div>\n        </div>\n        <div class=\"col-md-6 col-xs-12\">\n          <div class=\"pull-right user-hal\">Hallticket: {{checkUser.hallticket}}</div>\n        </div>\n      </div>\n      <hr>\n      <form [formGroup]=\"singupForm\" (submit)=\"update()\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-xs-12\">\n            <div class=\"personal-details\">Personal Details</div>\n            <div class=\"row\">\n              <div class=\"col-md-12 col-xs-12\">\n                <div class=\"personal-body\">\n                  <div class=\"form-group\">\n                    <label for=\"email\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" [ngClass]=\"{'invalid-input':singupForm.controls.email.invalid}\"\n                      placeholder=\"Enter email\">\n                    <div *ngIf=\"singupForm.controls['email'].errors && !singupForm.controls['email'].pristine\" class=\"error-msg\">\n                      <div [hidden]=\"!singupForm.controls['email'].errors.required\" class=\"error-msg\">Email is required.</div>\n                      <div [hidden]=\"!singupForm.controls['email'].errors.patternInvalid\" class=\"error-msg\">Email is invalid.</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"fullname\">Fullname</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"fullname\" id=\"fullname\" [ngClass]=\"{'invalid-input':singupForm.controls.fullname.invalid}\"\n                      placeholder=\"Enter Fullname\">\n                    <div *ngIf=\"singupForm.controls['fullname'].errors && !singupForm.controls['fullname'].pristine\" class=\"error-msg\">\n                      <div [hidden]=\"!singupForm.controls['fullname'].errors.required\" class=\"error-msg\">Fullname is required.</div>\n                      <div [hidden]=\"!singupForm.controls['fullname'].errors.minlength\" class=\"error-msg\">Fullname must be greater than 4 letters.</div>\n                      <div [hidden]=\"!singupForm.controls['fullname'].errors.maxlength\" class=\"error-msg\">Fullname must be less than 25 letters.</div>\n                      <div [hidden]=\"!singupForm.controls['fullname'].errors.pattern\" class=\"error-msg\">Fullname only contains characters and spaces.</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"mobile\">Mobile</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"mobile\" id=\"mobile\" [ngClass]=\"{'invalid-input':singupForm.controls.mobile.invalid}\"\n                      placeholder=\"Enter mobile\">\n                    <div *ngIf=\"singupForm.controls['mobile'].errors && !singupForm.controls['mobile'].pristine\" class=\"error-msg\">\n                      <div [hidden]=\"!singupForm.controls['mobile'].errors.required\" class=\"error-msg\">Mobile is required.</div>\n                      <div [hidden]=\"!singupForm.controls['mobile'].errors.pattern\" class=\"error-msg\">Mobile number is invalid.</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Gender</label>\n                    <br/>\n                    <label class=\"radio-inline\">\n                      <input type=\"radio\" value=\"female\" name=\"gender\" formControlName=\"gender\"> Female\n                    </label>\n                    <label class=\"radio-inline\">\n                      <input type=\"radio\" value=\"male\" name=\"gender\" formControlName=\"gender\"> Male\n                    </label>\n                    <div *ngIf=\"singupForm.controls['gender'].errors && !singupForm.controls['gender'].pristine\" class=\"error-msg\">\n                      <div [hidden]=\"!singupForm.controls['gender'].errors.required\" class=\"error-msg\">Gender is required.</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-12\" align=\"center\">\n            <div class=\"personal-details\">\n            </div>\n            <div class=\"form-group\">\n              <label>Profile pic</label>\n              <div>\n                <img [src]=\"dummyProfilePic\" *ngIf=\"!profilePic\" class=\"dummy-pic img-circle\" alt=\"profile pic\">\n                <img *ngIf=\"profilePic\" class=\"dummy-pic img-circle\" [src]=\"'data:image/jpg;base64,'+profilePic\" />\n              </div>\n              <div>\n                <input type=\"file\" style=\"display: none\" accept=\"image/*\" id=\"ref-images\" (change)=\"uploadImage($event)\">\n                <a *ngIf=\"!profilePic\" onclick=\"document.getElementById('ref-images').click()\">Click here to change Profile Picture</a>\n                <a *ngIf=\"profilePic\" (click)=\"deleteImage()\">Delete</a>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Date of Birth</label>\n                  <my-date-picker name=\"mydate\" (dateChanged)=\"onDateChanged($event)\" [options]=\"myDatePickerOptions\" formControlName=\"dob\" required></my-date-picker>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 text-center\">\n            <div class=\"signup-submit\">\n              <button class=\"btn btn-primary\" [disabled]=\"!singupForm.valid\" type=\"submit\">Submit</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _others_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../others/validators */ "./src/app/others/validators.ts");
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
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            selectorHeight: '150px',
        };
        this.message = [];
        this.signupStatus = 'complete';
        this.dummyProfilePic = '../../assets/favicon.png';
        this.profilePic = null;
        this.createForm();
        this.message = [];
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            hallticket: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
        this.singupForm = this.fb.group({
            hallticket: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z\s \-\']+')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_others_validators__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_others_validators__WEBPACK_IMPORTED_MODULE_4__["regexValidators"].phone)]),
            profilePic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            education: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                collegeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                sem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            }),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                projectTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                projectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                projectDomain: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                projectSubDomain: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                projectDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                })
            }),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.value).subscribe(function (res) {
            _this.message = res;
            console.log(_this.message);
            _this.checkUser = _this.message.user;
            if (_this.message.success) {
                if (_this.checkUser.email === null || _this.checkUser.fullname === null || _this.checkUser.mobile === null ||
                    _this.checkUser.gender === null) {
                    _this.singupForm.patchValue(_this.checkUser);
                    _this.signupStatus = 'incomplete';
                }
                else {
                    _this.authService.storeUserData(_this.message.token, _this.message.user);
                    // setTimeout(() => {
                    _this.router.navigate(['/dashboard']);
                    // }, 2000);
                }
            }
        });
    };
    LoginComponent.prototype.onDateChanged = function (event) {
        this.dob = event.formatted;
    };
    LoginComponent.prototype.update = function () {
        var _this = this;
        this.singupForm.patchValue({
            profilePic: this.profilePic,
            dob: this.dob
        });
        this.authService.updateUser(this.message.user._id, this.singupForm.value).subscribe(function (res) {
            _this.afterUpdateData = res;
            if (_this.afterUpdateData.email != null && _this.afterUpdateData.mobile != null && _this.afterUpdateData.fullname != null) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.uploadImage = function (evt) {
        this.profilePic = null;
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    LoginComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.profilePic = btoa(binaryString);
    };
    LoginComponent.prototype.deleteImage = function () {
        this.profilePic = '';
        // this.dummyProfilePic = '../../assets/favicon.png';
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    border-radius: 0px;\r\n}\r\n.navbar-default{\r\n    background-color: #143A85;\r\n    border-color: #42619d;\r\n}\r\n.navbar-default .navbar-brand {\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    background-color: #FF8C00;\r\n    border-bottom: 3px solid white;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n.profile-pic{\r\n    height: 50px;\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/dashboard\">H-Labs</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/forum\">Forum</a>\n        </li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/components\">Components</a>\n        </li>\n        <li class=\"dropdown\">\n          <img class=\"profile-pic img-circle dropdown-toggle\" data-toggle=\"dropdown\" src=\"../../assets/my.jpg\">\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a href=\"#\">Profile</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li>\n              <a (click)=\"logout()\">Logout</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!--/.nav-collapse -->\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        console.log(this.authService.loggedIn());
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/others/validators.ts":
/*!**************************************!*\
  !*** ./src/app/others/validators.ts ***!
  \**************************************/
/*! exports provided: regexValidators, patternValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexValidators", function() { return regexValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternValidator", function() { return patternValidator; });
var regexValidators = {
    phone: '^[7-9][0-9]{9}$',
};
function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}


/***/ }),

/***/ "./src/app/pipes/reverse.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        return value.slice().reverse();
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
        this.domains = [];
    }
    SearchPipe.prototype.transform = function (value, args) {
        if (value) {
            return value.filter(function (item) {
                if (item.domain) {
                    if (item.domain.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                        return item;
                    }
                    else if (item.questionTitle.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                        return item;
                    }
                    else if (item.questionDescription.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                        return item;
                    }
                    else if (item.subDomain.indexOf(args) !== -1) {
                        return item;
                        // if (item.subDomain.indexOf(args) !== -1) {
                        //   return item;
                        // }
                        // this.domains = item.subDomain.filter(x => {
                        //   return x;
                        //   // if (x.indexOf(args) !== -1) {
                        //   //   return item;
                        //   // }
                        // });
                        // console.log(this.domains);
                        // return this.domains;
                    }
                }
            });
        }
        // for (let i = 0; i < value.length; i++) {
        //   if (value[i].domain === args) {
        //     this.domains.push(value[i]);
        //   }
        //   console.log(value[i].domain);
        // }
        // console.log(this.domains);
        // const data = value.find((item) => {
        //   return item.domain === args;
        //   // item.domain.includes(args);
        // });
        // console.log(data);
        // return null;
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/pipes/unique.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/unique.pipe.ts ***!
  \**************************************/
/*! exports provided: UniquePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UniquePipe = /** @class */ (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value) {
        if (value !== undefined && value !== null) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](value, 'domain');
        }
        return value;
    };
    UniquePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'unique',
            pure: false
        })
    ], UniquePipe);
    return UniquePipe;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var AppService = /** @class */ (function () {
    function AppService(http, router) {
        this.http = http;
        this.router = router;
        this.URL = 'https://h-labs.herokuapp.com/api';
        // this.URL = 'http://localhost:3000/api';
    }
    // domains
    AppService.prototype.getDomains = function () {
        return this.http.get(this.URL + '/domains');
    };
    // questions
    AppService.prototype.addQuestion = function (data) {
        return this.http.post(this.URL + '/questions', data);
    };
    AppService.prototype.getQuestions = function () {
        return this.http.get(this.URL + '/questions');
    };
    AppService.prototype.getRelatedQuestions = function (id) {
        return this.http.get(this.URL + '/questions/related_questions/' + id);
    };
    AppService.prototype.getQuestionById = function (id) {
        return this.http.get(this.URL + '/questions/' + id);
    };
    AppService.prototype.likeOrDislike = function (data) {
        return this.http.post(this.URL + '/likes_dislikes', data);
    };
    AppService.prototype.addComment = function (data) {
        return this.http.post(this.URL + '/comments', data);
    };
    AppService.prototype.deleteComment = function (id) {
        return this.http.delete(this.URL + '/questions/' + id);
    };
    AppService.prototype.editComment = function (id, comment) {
        return this.http.put(this.URL + '/comments/', { id: id, comment: comment });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('user') != null) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.URL = 'https://h-labs.herokuapp.com/api';
        // this.URL = 'http://localhost:3000/api';
    }
    AuthService.prototype.login = function (data) {
        return this.http.post(this.URL + '/authentication/login', data);
    };
    AuthService.prototype.register = function (data) {
        this.http.post(this.URL + '/authentication/register', data).subscribe(function (res) {
            console.log(res);
        });
    };
    AuthService.prototype.updateUser = function (id, data) {
        return this.http.put(this.URL + '/authentication/update', { id: id, data: data });
    };
    AuthService.prototype.createAuthHeaders = function () {
        this.loadToken();
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': this.authToken
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', user.userId);
        localStorage.setItem('fullname', user.fullname);
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.getItem('user') != null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.authToken = null;
        this.router.navigate(['/']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/notauth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/services/notauth.guard.ts ***!
  \*******************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('user') != null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    NotAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/pager.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pager.service.ts ***!
  \*******************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
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

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 3; }
        var totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/update-profile/update-profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-profile/update-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  update-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/update-profile/update-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
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

var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent() {
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
    };
    UpdateProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! ./update-profile.component.html */ "./src/app/update-profile/update-profile.component.html"),
            styles: [__webpack_require__(/*! ./update-profile.component.css */ "./src/app/update-profile/update-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/viewquestion/viewquestion.component.css":
/*!*********************************************************!*\
  !*** ./src/app/viewquestion/viewquestion.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    cursor: pointer;\r\n}\r\n.question-main {\r\n    box-shadow:         1px 1px 3px 2px #e7ebf2;\r\n}\r\n.question-body{\r\n    padding: 20px;\r\n}\r\n.question{\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #081735;\r\n}\r\n.question-user{\r\n    border-bottom:1px solid#e7ebf2;\r\n}\r\n.question-desc{\r\n    margin-top: 5px;\r\n}\r\n.question-image-body {\r\n    padding: 3px;\r\n}\r\n.question-image {\r\n    max-height: 300px;\r\n    width: 100%;\r\n}\r\n.ques-action{\r\n    border-top: 1px solid #f5f5f5;\r\n    padding: 5px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n}\r\n.question-footer{\r\n    background-color: #f5f5f5;\r\n}\r\n.ques-items{\r\n    cursor: pointer;\r\n    padding: 3px;\r\n}\r\n.ques-items:hover {\r\n    background-color: rgba(2, 38, 136, 0.09);\r\n    border-radius: 5px;\r\n}\r\n.ques-comment {\r\n    color: #210e75;\r\n}\r\n.comments{\r\n    padding: 5px;\r\n}\r\n.comment{\r\n    word-break: break-all;\r\n    padding: 3px;\r\n}\r\n/* .comment-footer{\r\n    border-bottom: 1px solid #b1a6a6;\r\n} */\r\n.commentedBy {\r\n    font-weight: bold;\r\n    color: #210e75;\r\n}\r\n.like {\r\n    color: #0faa38;\r\n}\r\n.dislike {\r\n    color: #ce0d07;\r\n}\r\n.related-ques{\r\n    word-break: break-all;\r\n}\r\n.related-ques-head{\r\n    color: #02050d;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    border-bottom: 1px solid #d0d7e6;\r\n}\r\n.reated-ques-body {\r\n    padding-top:3px;\r\n}\r\n.reated-ques-body > a {\r\n    text-decoration: none;\r\n}\r\n.reated-ques-body>a:hover {\r\n    color: #3a8514;\r\n}"

/***/ }),

/***/ "./src/app/viewquestion/viewquestion.component.html":
/*!**********************************************************!*\
  !*** ./src/app/viewquestion/viewquestion.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"#\">Home</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/forum\">Forum</a>\n        </li>\n        <li class=\"breadcrumb-item active\">View Question</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"question!=null\">\n    <div class=\"col-md-8\">\n      <div class=\"question-main\">\n        <div class=\"question-body\">\n          <div class=\"question\">{{question.questionTitle}}</div>\n          <div class=\"question-user\">\n            <small class=\"form-text text-muted\">\n              <a *ngIf=\"question.askAnonymously\">Anonymous</a>&nbsp;\n              <a *ngIf=\"!question.askAnonymously\">{{question.askedBy}}</a>&nbsp;\n            </small>\n            <small class=\"form-text text-muted\">{{question.createdAt | date}}</small>\n          </div>\n          <div class=\"question-desc\">{{question.questionDescription}}</div>\n          <div class=\"question-image-body\" *ngIf=\"question.questionImage!==null\">\n            <img class=\"question-image\" [src]=\"'data:image/jpg;base64,'+ question.questionImage\" />\n          </div>\n        </div>\n        <div class=\"ques-action\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-xs-3\">\n              <div class=\"ques-items\" [ngClass]=\"{'like':like}\" (click)=\"doLike(1)\">\n                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> Like\n                <span *ngIf=\"likesCount\">({{likesCount}})</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-xs-3\">\n              <div class=\"ques-items\" [ngClass]=\"{'dislike':disLike}\" (click)=\"doLike(2)\">\n                <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i> Dislike\n                <span *ngIf=\"disLikesCount\">({{disLikesCount}})</span>\n\n              </div>\n            </div>\n            <div class=\"col-md-3 col-xs-4\">\n              <div class=\"ques-items\" [ngClass]=\"{'ques-comment':vComment}\" (click)=\"viewComment()\">\n                <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> Comment\n                <span *ngIf=\"commentCount\">({{commentCount}})</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"question-footer\" *ngIf=\"vComment\">\n        <div class=\"comments\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12 comment-body\" *ngFor=\"let comment of comments\">\n              <div class=\"commentedBy\">{{comment.commentedBy}}</div>\n              <div class=\"comment\">{{comment.comment}}</div>\n              <div class=\"comment-footer\">\n                <span *ngIf=\"comment.userId === currentUserId\">\n                  <small class=\"edit\">\n                    <a (click)=\"editComment(comment._id,comment.comment)\" data-toggle=\"modal\" data-target=\"#editComment\">edit</a>\n                  </small> &nbsp;\n                  <small class=\"edit\">\n                    <a (click)=\"delComment(comment._id)\">delete</a>\n                  </small>\n                </span>\n                <span>\n                  <small class=\"createdAt pull-right\">{{comment.createdAt | date:'short'}}</small>\n                </span>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-xs-12\">\n              <hr>\n            </div>\n            <div class=\"col-md-12 col-xs-12\">\n              <div class=\"form-group\" (keydown)=\"addComment($event)\">\n                <textarea class=\"form-control\" [(ngModel)]=\"commentField\" id=\"exampleTextarea\" rows=\"2\" placeholder=\"Comment here\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"related-ques\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"related-ques-head\">\n              Retaled Questions\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"reated-ques-body\" *ngFor=\"let ques of relatedQuestions\">\n              <a (click)=\"viewQuestion(ques._id)\">{{ques.questionTitle}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"editComment\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Comment</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" [(ngModel)]=\"editcommentField\" rows=\"2\" placeholder=\"Comment here\"></textarea>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"updateComment(null)\">Update</button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"editComment(null,null)\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/viewquestion/viewquestion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/viewquestion/viewquestion.component.ts ***!
  \********************************************************/
/*! exports provided: ViewquestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewquestionComponent", function() { return ViewquestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewquestionComponent = /** @class */ (function () {
    function ViewquestionComponent(router, activatedRoute, appService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.question = null;
        this.likes = null;
        this.comments = null;
        this.relatedQuestions = null;
        this.likesCount = 0;
        this.disLikesCount = 0;
        this.commentCount = 0;
        this.vComment = false;
        this.like = false;
        this.disLike = false;
        this.commentField = '';
        this.editcommentField = null;
        this.editCommentId = null;
    }
    ViewquestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.currentUserId = localStorage.getItem('user');
        this.appService.getRelatedQuestions(this.id).subscribe(function (res) {
            _this.relatedQuestions = res;
        });
        this.appService.getQuestionById(this.id).subscribe(function (res) {
            _this.getData(res);
        });
    };
    ViewquestionComponent.prototype.viewQuestion = function (id) {
        this.router.navigate(['/forum/view_question', id]);
        window.location.reload();
    };
    ViewquestionComponent.prototype.getData = function (data) {
        this.question = data.question;
        this.comments = data.comment;
        this.likes = data.likes;
        this.commentCount = this.comments.length;
        for (var i = 0; i < this.likes.length; i++) {
            if (this.likes[i].like === true) {
                this.likesCount++;
            }
            else if (this.likes[i].dislike === true) {
                this.disLikesCount++;
            }
            if (this.likes[i].userId === this.currentUserId) {
                this.like = this.likes[i].like;
                this.disLike = this.likes[i].dislike;
            }
            else {
                this.like = false;
                this.disLike = false;
            }
        }
    };
    ViewquestionComponent.prototype.doLike = function (lad) {
        if (lad === 1) {
            if (this.like === true) {
                this.like = false;
                this.disLike = false;
                --this.likesCount;
                this.postData();
            }
            else {
                if (this.disLike === true) {
                    --this.disLikesCount;
                }
                this.like = true;
                this.disLike = false;
                this.likesCount = +1;
                this.postData();
            }
        }
        else if (lad === 2) {
            if (this.disLike === true) {
                this.like = false;
                this.disLike = false;
                --this.disLikesCount;
                this.postData();
            }
            else {
                if (this.like === true) {
                    --this.likesCount;
                }
                this.disLikesCount = +1;
                this.like = false;
                this.disLike = true;
                this.postData();
            }
        }
    };
    ViewquestionComponent.prototype.postData = function () {
        var _this = this;
        var data = {
            userId: localStorage.getItem('user'),
            questionId: this.question._id,
            like: this.like,
            dislike: this.disLike
        };
        this.appService.likeOrDislike(data).subscribe(function (res) {
            _this.updateCount(res);
        });
    };
    ViewquestionComponent.prototype.updateCount = function (data) {
        this.likes = data;
        for (var i = 0; i < this.likes.length; i++) {
            if (this.likes[i].like === true) {
                this.likesCount++;
            }
            else if (this.likes[i].dislike === true) {
                this.disLikesCount++;
            }
            if (this.likes[i].userId === this.currentUserId) {
                this.like = this.likes[i].like;
                this.disLike = this.likes[i].dislike;
            }
            else {
                this.like = false;
                this.disLike = false;
            }
        }
    };
    ViewquestionComponent.prototype.viewComment = function () {
        if (this.vComment) {
            this.vComment = false;
        }
        else {
            this.vComment = true;
        }
    };
    ViewquestionComponent.prototype.addComment = function (event) {
        var _this = this;
        var resPdata;
        if (event.keyCode === 13 && !event.shiftKey) {
            if (this.commentField.length !== 0) {
                event.preventDefault();
                this.commentField = this.commentField.replace(/(^[ \t]*\n)/gm, "");
                if (this.commentField.length !== 0) {
                    var data = {
                        userId: this.currentUserId,
                        questionId: this.id,
                        commentedBy: localStorage.getItem('fullname'),
                        comment: this.commentField
                    };
                    this.appService.addComment(data).subscribe(function (res) {
                        resPdata = res;
                        _this.commentCount++;
                        _this.comments.push(resPdata.resp);
                    });
                }
                this.commentField = '';
            }
            else {
                event.preventDefault();
            }
            return false;
        }
    };
    ViewquestionComponent.prototype.editComment = function (id, comm) {
        this.editcommentField = comm;
        this.editCommentId = id;
    };
    ViewquestionComponent.prototype.updateComment = function (eve) {
        this.appService.editComment(this.editCommentId, this.editcommentField).subscribe(function (res) {
            console.log(res);
        });
    };
    ViewquestionComponent.prototype.delComment = function (id) {
        var _this = this;
        this.comments.filter(function (x) {
            if (x._id === id) {
                var index = _this.comments.indexOf(x);
                if (index !== -1) {
                    _this.comments.splice(index, 1);
                    --_this.commentCount;
                }
            }
        });
        this.appService.deleteComment(id).subscribe(function (res) {
            console.log(res);
        });
    };
    ViewquestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewquestion',
            template: __webpack_require__(/*! ./viewquestion.component.html */ "./src/app/viewquestion/viewquestion.component.html"),
            styles: [__webpack_require__(/*! ./viewquestion.component.css */ "./src/app/viewquestion/viewquestion.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ViewquestionComponent);
    return ViewquestionComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! D:\imp\H-bots\h-labs\h-labs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map