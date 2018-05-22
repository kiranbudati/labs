import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: any = [];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
    this.message = [];
  }
  createForm() {
    this.loginForm = this.fb.group({
      hallticket: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe((res) => {
      this.message = res;
      console.log(this.message);
      if (this.message.success) {
        this.authService.storeUserData(this.message.token, this.message.user);
        // setTimeout(() => {
          this.router.navigate(['/dashboard']);
        // }, 2000);
      }
    });
  }
  ngOnInit() {
  }

}
