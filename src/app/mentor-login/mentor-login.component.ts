import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css']
})
export class MentorLoginComponent implements OnInit {
  loginForm: FormGroup;
  message: any = [];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.message = [];
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  login() {
    this.authService.mentorLogin(this.loginForm.value).subscribe((res) => {
      console.log(res);
      this.message = res;
      if (this.message.success) {
        this.authService.storeUserData(this.message.token, this.message.mentor, this.message.type);
        // setTimeout(() => {
        this.router.navigate(['/dashboard']);
        // }, 2000);
      }
    });
  }
  ngOnInit() {
    console.log(this.authService.whoLogggedIn());
  }

}
