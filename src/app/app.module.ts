import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouters } from './app-routing.module';
import { RouterModule, Route, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthService } from './services/auth.service';
import { AppService } from './services/app.service';
import { AuthGuard } from './services/auth-guard.service';
import { NotAuthGuard } from './services/notauth.guard';


import { ReversePipe } from './pipes/reverse.pipe';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { UniquePipe } from './pipes/unique.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ViewquestionComponent } from './viewquestion/viewquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    ComponentsComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    UpdateProfileComponent,
    NavbarComponent,
    ReversePipe,
    AskquestionComponent,
    UniquePipe,
    SearchPipe,
    ViewquestionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  exports: [
    NavbarComponent,
  ],
  providers: [
    AuthService,
    AppService,
    AuthGuard,
    NotAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
