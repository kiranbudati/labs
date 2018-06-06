import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Maker } from '../interface/maker';
import { regexValidators, patternValidator } from '../others/validators';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    selectorHeight: '150px',
  };

  loginForm: FormGroup; singupForm: FormGroup;
  dummyProfilePic: String; profilePic: String; dob: any;
  message: any = []; checkUser: any; signupStatus: any; afterUpdateData: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupStatus = 'complete'; this.dummyProfilePic = '../../assets/favicon.png';
    this.profilePic = null;
    this.createForm();
    this.message = [];
  }
  createForm() {
    this.loginForm = this.fb.group({
      hallticket: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.singupForm = this.fb.group({
      hallticket: new FormControl(''),
      fullname: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(25), Validators.pattern('^[a-zA-Z\s \-\']+')]),
      email: new FormControl('', [Validators.required,
      patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      gender: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(regexValidators.phone)]),
      profilePic: new FormControl(''),
      education: new FormGroup({
        collegeName: new FormControl(''),
        branch: new FormControl(''),
        year: new FormControl(''),
        sem: new FormControl(''),
      }),
      project: new FormGroup({
        projectTitle: new FormControl(''),
        projectDescription: new FormControl(''),
        projectDomain: new FormControl(''),
        projectSubDomain: new FormControl(''),
        projectDuration: new FormGroup({
          startDate: new FormControl(''),
          endDate: new FormControl(''),
        })
      }),
      dob: new FormControl('')
    });
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe((res) => {
      this.message = res;
      console.log(this.message);
      this.checkUser = this.message.user;
      if (this.message.success) {
        if (this.checkUser.email === null || this.checkUser.fullname === null || this.checkUser.mobile === null ||
          this.checkUser.gender === null) {
          this.singupForm.patchValue(this.checkUser);
          this.signupStatus = 'incomplete';
        } else {
          this.authService.storeUserData(this.message.token, this.message.user, this.message.type);
          // setTimeout(() => {
          this.router.navigate(['/dashboard']);
          // }, 2000);
        }
      }
    });
  }
  onDateChanged(event: IMyDateModel) {
    this.dob = event.formatted;
  }
  update() {
    this.singupForm.patchValue({
      profilePic: this.profilePic,
      dob: this.dob
    });
    this.authService.updateUser(this.message.user._id, this.singupForm.value).subscribe((res) => {
      this.afterUpdateData = res;
      if (this.afterUpdateData.email != null && this.afterUpdateData.mobile != null && this.afterUpdateData.fullname != null) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
  uploadImage(evt) {
    this.profilePic = null;
    const files = evt.target.files;
    const file = files[0];
    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.profilePic = btoa(binaryString);
  }
  deleteImage() {
    this.profilePic = '';
    // this.dummyProfilePic = '../../assets/favicon.png';
  }
  ngOnInit() {
  }

}
