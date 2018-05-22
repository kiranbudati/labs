import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientXsrfModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private URL: String;

  constructor(private http: HttpClient, private router: Router) {
    this.URL = 'https://h-labs.herokuapp.com/api';
  }

  // domains
  getDomains() {
    return this.http.get(this.URL + '/domains');
  }

  // questions
  addQuestion(data) {
    return this.http.post(this.URL + '/questions', data);
  }
  getQuestions() {
    return this.http.get(this.URL + '/questions');
  }
}
