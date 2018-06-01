"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_froala_wysiwyg_1 = require("angular-froala-wysiwyg");
var mydatepicker_1 = require("mydatepicker");
var ngx_chips_1 = require("ngx-chips");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var forum_component_1 = require("./forum/forum.component");
var components_component_1 = require("./components/components.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var login_component_1 = require("./login/login.component");
var update_profile_component_1 = require("./update-profile/update-profile.component");
var navbar_component_1 = require("./navbar/navbar.component");
var auth_service_1 = require("./services/auth.service");
var app_service_1 = require("./services/app.service");
var auth_guard_service_1 = require("./services/auth-guard.service");
var notauth_guard_1 = require("./services/notauth.guard");
var reverse_pipe_1 = require("./pipes/reverse.pipe");
var askquestion_component_1 = require("./askquestion/askquestion.component");
var unique_pipe_1 = require("./pipes/unique.pipe");
var search_pipe_1 = require("./pipes/search.pipe");
var viewquestion_component_1 = require("./viewquestion/viewquestion.component");
var addcomponent_component_1 = require("./addcomponent/addcomponent.component");
var view_component_component_1 = require("./view-component/view-component.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                forum_component_1.ForumComponent,
                components_component_1.ComponentsComponent,
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                login_component_1.LoginComponent,
                update_profile_component_1.UpdateProfileComponent,
                navbar_component_1.NavbarComponent,
                reverse_pipe_1.ReversePipe,
                askquestion_component_1.AskquestionComponent,
                unique_pipe_1.UniquePipe,
                search_pipe_1.SearchPipe,
                viewquestion_component_1.ViewquestionComponent,
                addcomponent_component_1.AddcomponentComponent,
                view_component_component_1.ViewComponentComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routing_module_1.appRouters),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                angular_froala_wysiwyg_1.FroalaEditorModule.forRoot(),
                angular_froala_wysiwyg_1.FroalaViewModule.forRoot(),
                mydatepicker_1.MyDatePickerModule,
                ngx_chips_1.TagInputModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
            ],
            exports: [
                navbar_component_1.NavbarComponent,
            ],
            providers: [
                auth_service_1.AuthService,
                app_service_1.AppService,
                auth_guard_service_1.AuthGuard,
                notauth_guard_1.NotAuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map