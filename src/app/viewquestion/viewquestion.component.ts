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
  currentUserId: any;
  id: any; question: any; comments: any; likes: any; relatedQuestions: any;
  like: Boolean; disLike: Boolean; vComment: Boolean;
  likesCount: any; disLikesCount: any; commentCount: any;
  commentField: any; editcommentField: any; editCommentId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appService: AppService) {
    this.question = null; this.likes = null; this.comments = null; this.relatedQuestions = null;
    this.likesCount = 0; this.disLikesCount = 0; this.commentCount = 0;
    this.vComment = false; this.like = false; this.disLike = false;
    this.commentField = ''; this.editcommentField = null; this.editCommentId = null;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.currentUserId = localStorage.getItem('user');
    this.appService.getRelatedQuestions(this.id).subscribe((res) => {
      this.relatedQuestions = res;
    });

    this.appService.getQuestionById(this.id).subscribe((res) => {
      this.getData(res);
    });
  }
  viewQuestion(id) {
    this.router.navigate(['/forum/view_question', id]);
    window.location.reload();
  }
  getData(data) {
    this.question = data.question;
    this.comments = data.comment;
    this.likes = data.likes;
    this.commentCount = this.comments.length;
    for (let i = 0; i < this.likes.length; i++) {
      if (this.likes[i].like === true) {
        this.likesCount++;
      } else if (this.likes[i].dislike === true) {
        this.disLikesCount++;
      }
      if (this.likes[i].userId === this.currentUserId) {
        this.like = this.likes[i].like;
        this.disLike = this.likes[i].dislike;
      } else {
        this.like = false;
        this.disLike = false;
      }
    }
  }
  doLike(lad) {
    if (lad === 1) {
      if (this.like === true) {
        this.like = false;
        this.disLike = false;
        --this.likesCount;
        this.postData();
      } else {
        if (this.disLike === true) {
          --this.disLikesCount;
        }
        this.like = true;
        this.disLike = false;
        this.likesCount = +1;
        this.postData();
      }
    } else if (lad === 2) {
      if (this.disLike === true) {
        this.like = false;
        this.disLike = false;
        --this.disLikesCount;
        this.postData();
      } else {
        if (this.like === true) {
          --this.likesCount;
        }
        this.disLikesCount = +1;
        this.like = false;
        this.disLike = true;
        this.postData();
      }
    }
  }
  postData() {
    const data = {
      userId: localStorage.getItem('user'),
      questionId: this.question._id,
      like: this.like,
      dislike: this.disLike
    };
    this.appService.likeOrDislike(data).subscribe((res) => {
      this.updateCount(res);
    });
  }
  updateCount(data) {
    this.likes = data;
    for (let i = 0; i < this.likes.length; i++) {
      if (this.likes[i].like === true) {
        this.likesCount++;
      } else if (this.likes[i].dislike === true) {
        this.disLikesCount++;
      }
      if (this.likes[i].userId === this.currentUserId) {
        this.like = this.likes[i].like;
        this.disLike = this.likes[i].dislike;
      } else {
        this.like = false;
        this.disLike = false;
      }
    }
  }
  viewComment() {
    if (this.vComment) {
      this.vComment = false;
    } else {
      this.vComment = true;
    }
  }
  addComment(event) {
    let resPdata: any;
    if (event.keyCode === 13 && !event.shiftKey) {
      if (this.commentField.length !== 0) {
        event.preventDefault();
        this.commentField = this.commentField.replace(/(^[ \t]*\n)/gm, "")
        if (this.commentField.length !== 0) {
          const data = {
            userId: this.currentUserId,
            questionId: this.id,
            commentedBy: localStorage.getItem('fullname'),
            comment: this.commentField
          };
          this.appService.addComment(data).subscribe((res) => {
            resPdata = res;
            this.commentCount++;
            this.comments.push(resPdata.resp);
          });
        }
        this.commentField = '';
      } else {
        event.preventDefault();
      }
      return false;
    }
  }
  editComment(id, comm) {
    this.editcommentField = comm;
    this.editCommentId = id;
  }
  updateComment(eve) {
    this.appService.editComment(this.editCommentId, this.editcommentField).subscribe((res) => {
      console.log(res);
    });
  }
  delComment(id) {
    this.comments.filter((x) => {
      if (x._id === id) {
        const index = this.comments.indexOf(x);
        if (index !== -1) {
          this.comments.splice(index, 1);
          --this.commentCount;
        }
      }
    });
    this.appService.deleteComment(id).subscribe((res) => {
      console.log(res);
    });

  }
}
