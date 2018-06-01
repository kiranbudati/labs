import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientXsrfModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL: String;
  authToken; user; options;

  constructor(private http: HttpClient, private router: Router) {
    // this.URL = 'https://h-labs.herokuapp.com/api';
    this.URL = 'http://localhost:3000/api';
  }
  login(data) {
    return this.http.post(this.URL + '/authentication/login', data);
  }
  register(data) {
    this.http.post(this.URL + '/authentication/register', data).subscribe((res) => {
      console.log(res);
    });
  }
  updateUser(id, data) {
    return this.http.put(this.URL + '/authentication/update', { id, data });
  }
  createAuthHeaders() {
    this.loadToken();
    this.options = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': this.authToken
    });
  }
  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }
  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user.userId);
    localStorage.setItem('fullname', user.fullname);
  }

  loggedIn() {
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.clear();
    this.authToken = null;
    this.router.navigate(['/']);
  }

}
