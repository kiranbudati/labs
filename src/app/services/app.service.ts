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
    // this.URL = 'https://h-labs.herokuapp.com/api';
    this.URL = 'http://localhost:3000/api';
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
  getRelatedQuestions(id) {
    return this.http.get(this.URL + '/questions/related_questions/' + id);
  }
  getQuestionById(id) {
    return this.http.get(this.URL + '/questions/' + id);
  }

  likeOrDislike(data) {
    return this.http.post(this.URL + '/likes_dislikes', data);
  }

  // comments
  addComment(data) {
    return this.http.post(this.URL + '/comments', data);
  }
  deleteComment(id) {
    return this.http.delete(this.URL + '/questions/' + id);
  }
  editComment(id, comment) {
    return this.http.put(this.URL + '/comments/', { id, comment });
  }

  // components
  addComponent(data) {
    return this.http.post(this.URL + '/components', data);
  }
  getComponets() {
    return this.http.get(this.URL + '/components');
  }
}
