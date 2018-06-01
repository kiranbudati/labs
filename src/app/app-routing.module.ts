import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ForumComponent } from './forum/forum.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { ViewquestionComponent } from './viewquestion/viewquestion.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { AuthGuard } from './services/auth-guard.service';
import { NotAuthGuard } from './services/notauth.guard';

export const appRouters: Routes = [
  { path: ' ', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forum', component: ForumComponent, canActivate: [AuthGuard] },
  { path: 'forum/ask_question/:id', component: AskquestionComponent, canActivate: [AuthGuard] },
  { path: 'forum/view_question/:id', component: ViewquestionComponent, canActivate: [AuthGuard] },
  { path: 'update_profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },
  { path: 'components', component: ComponentsComponent, canActivate: [AuthGuard] },
  { path: 'components/:id', component: ViewComponentComponent, canActivate: [AuthGuard] },
  { path: 'components/add_components', component: AddcomponentComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' }
  // {path: '**', component: DashboardComponent, canActivate: [AuthGuard]}
];
