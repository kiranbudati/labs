"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forum_component_1 = require("./forum/forum.component");
var components_component_1 = require("./components/components.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var login_component_1 = require("./login/login.component");
var update_profile_component_1 = require("./update-profile/update-profile.component");
var askquestion_component_1 = require("./askquestion/askquestion.component");
var viewquestion_component_1 = require("./viewquestion/viewquestion.component");
var addcomponent_component_1 = require("./addcomponent/addcomponent.component");
var view_component_component_1 = require("./view-component/view-component.component");
var auth_guard_service_1 = require("./services/auth-guard.service");
var notauth_guard_1 = require("./services/notauth.guard");
exports.appRouters = [
    { path: ' ', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [notauth_guard_1.NotAuthGuard] },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'forum', component: forum_component_1.ForumComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'forum/ask_question/:id', component: askquestion_component_1.AskquestionComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'forum/view_question/:id', component: viewquestion_component_1.ViewquestionComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'update_profile', component: update_profile_component_1.UpdateProfileComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'components', component: components_component_1.ComponentsComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'components/:id', component: view_component_component_1.ViewComponentComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'components/add_components', component: addcomponent_component_1.AddcomponentComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: '**', redirectTo: '/dashboard' }
    // {path: '**', component: DashboardComponent, canActivate: [AuthGuard]}
];
//# sourceMappingURL=app-routing.module.js.map