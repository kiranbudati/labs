import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})

export class ViewquestionComponent implements OnInit {
  id: any; question: any; comments: any; vComment: Boolean;
  like: Boolean; disLike: Boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appService: AppService) {
    this.question = null; this.vComment = false; this.like = false; this.disLike = false;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.appService.getQuestionById(this.id).subscribe((res) => {
      this.getData(res);
    });
  }
  getData(data) {
    this.question = data.question;
    this.comments = data.comment;
    console.log(this.comments);
  }
  doLike(lad) {
    if (lad === 1) {
      this.like = true;
      this.disLike = false;
    } else {
      this.disLike = true;
      this.like = false;
    }
    const data = {
      userId: localStorage.getItem('user'),
      questionId: this.question._id,
      like: this.like,
      dislike: this.disLike
    };
    this.appService.likeOrDislike(data).subscribe((res) => {
      console.log(res);
    });
  }
  viewComment() {
    if (this.vComment) {
      this.vComment = false;
    } else {
      this.vComment = true;
    }
  }
}
