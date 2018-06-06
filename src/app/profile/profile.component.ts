import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public dateOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    selectorHeight: '150px',
  };
  userType: String;
  profileActive: Boolean; likeOrCommentActive: Boolean; questionsActive: Boolean; projectsActive: Boolean;
  constructor(private authService: AuthService) {
    this.profileActive = false; this.likeOrCommentActive = false; this.questionsActive = false; this.projectsActive = false;
  }
  showTab(num: Number) {
    console.log(num);
    if (num === 1) {
      this.profileActive = true; this.questionsActive = false; this.likeOrCommentActive = false; this.projectsActive = false;
    } else if (num === 2) {
      this.profileActive = false; this.questionsActive = true; this.likeOrCommentActive = false; this.projectsActive = false;
    } else if (num === 3) {
      this.profileActive = false; this.questionsActive = false; this.likeOrCommentActive = true; this.projectsActive = false;
    } else if (num === 4) {
      this.profileActive = false; this.questionsActive = false; this.likeOrCommentActive = false; this.projectsActive = true;
    }
  }
  ngOnInit() {
    this.profileActive = true;
    this.userType = this.authService.whoLogggedIn();
  }

}
