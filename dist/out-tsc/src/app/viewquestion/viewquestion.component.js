"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_1 = require("../services/app.service");
var ViewquestionComponent = /** @class */ (function () {
    function ViewquestionComponent(router, activatedRoute, appService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.question = null;
        this.likes = null;
        this.comments = null;
        this.relatedQuestions = null;
        this.likesCount = 0;
        this.disLikesCount = 0;
        this.commentCount = 0;
        this.vComment = false;
        this.like = false;
        this.disLike = false;
        this.commentField = '';
        this.editcommentField = null;
        this.editCommentId = null;
    }
    ViewquestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.currentUserId = localStorage.getItem('user');
        this.appService.getRelatedQuestions(this.id).subscribe(function (res) {
            _this.relatedQuestions = res;
        });
        this.appService.getQuestionById(this.id).subscribe(function (res) {
            _this.getData(res);
        });
    };
    ViewquestionComponent.prototype.viewQuestion = function (id) {
        this.router.navigate(['/forum/view_question', id]);
        window.location.reload();
    };
    ViewquestionComponent.prototype.getData = function (data) {
        this.question = data.question;
        this.comments = data.comment;
        this.likes = data.likes;
        this.commentCount = this.comments.length;
        for (var i = 0; i < this.likes.length; i++) {
            if (this.likes[i].like === true) {
                this.likesCount++;
            }
            else if (this.likes[i].dislike === true) {
                this.disLikesCount++;
            }
            if (this.likes[i].userId === this.currentUserId) {
                this.like = this.likes[i].like;
                this.disLike = this.likes[i].dislike;
            }
            else {
                this.like = false;
                this.disLike = false;
            }
        }
    };
    ViewquestionComponent.prototype.doLike = function (lad) {
        if (lad === 1) {
            if (this.like === true) {
                this.like = false;
                this.disLike = false;
                --this.likesCount;
                this.postData();
            }
            else {
                if (this.disLike === true) {
                    --this.disLikesCount;
                }
                this.like = true;
                this.disLike = false;
                this.likesCount = +1;
                this.postData();
            }
        }
        else if (lad === 2) {
            if (this.disLike === true) {
                this.like = false;
                this.disLike = false;
                --this.disLikesCount;
                this.postData();
            }
            else {
                if (this.like === true) {
                    --this.likesCount;
                }
                this.disLikesCount = +1;
                this.like = false;
                this.disLike = true;
                this.postData();
            }
        }
    };
    ViewquestionComponent.prototype.postData = function () {
        var _this = this;
        var data = {
            userId: localStorage.getItem('user'),
            questionId: this.question._id,
            like: this.like,
            dislike: this.disLike
        };
        this.appService.likeOrDislike(data).subscribe(function (res) {
            _this.updateCount(res);
        });
    };
    ViewquestionComponent.prototype.updateCount = function (data) {
        this.likes = data;
        for (var i = 0; i < this.likes.length; i++) {
            if (this.likes[i].like === true) {
                this.likesCount++;
            }
            else if (this.likes[i].dislike === true) {
                this.disLikesCount++;
            }
            if (this.likes[i].userId === this.currentUserId) {
                this.like = this.likes[i].like;
                this.disLike = this.likes[i].dislike;
            }
            else {
                this.like = false;
                this.disLike = false;
            }
        }
    };
    ViewquestionComponent.prototype.viewComment = function () {
        if (this.vComment) {
            this.vComment = false;
        }
        else {
            this.vComment = true;
        }
    };
    ViewquestionComponent.prototype.addComment = function (event) {
        var _this = this;
        var resPdata;
        if (event.keyCode === 13 && !event.shiftKey) {
            if (this.commentField.length !== 0) {
                event.preventDefault();
                this.commentField = this.commentField.replace(/(^[ \t]*\n)/gm, "");
                if (this.commentField.length !== 0) {
                    var data = {
                        userId: this.currentUserId,
                        questionId: this.id,
                        commentedBy: localStorage.getItem('fullname'),
                        comment: this.commentField
                    };
                    this.appService.addComment(data).subscribe(function (res) {
                        resPdata = res;
                        _this.commentCount++;
                        _this.comments.push(resPdata.resp);
                    });
                }
                this.commentField = '';
            }
            else {
                event.preventDefault();
            }
            return false;
        }
    };
    ViewquestionComponent.prototype.editComment = function (id, comm) {
        this.editcommentField = comm;
        this.editCommentId = id;
    };
    ViewquestionComponent.prototype.updateComment = function (eve) {
        this.appService.editComment(this.editCommentId, this.editcommentField).subscribe(function (res) {
            console.log(res);
        });
    };
    ViewquestionComponent.prototype.delComment = function (id) {
        var _this = this;
        this.comments.filter(function (x) {
            if (x._id === id) {
                var index = _this.comments.indexOf(x);
                if (index !== -1) {
                    _this.comments.splice(index, 1);
                    --_this.commentCount;
                }
            }
        });
        this.appService.deleteComment(id).subscribe(function (res) {
            console.log(res);
        });
    };
    ViewquestionComponent = __decorate([
        core_1.Component({
            selector: 'app-viewquestion',
            templateUrl: './viewquestion.component.html',
            styleUrls: ['./viewquestion.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], ViewquestionComponent);
    return ViewquestionComponent;
}());
exports.ViewquestionComponent = ViewquestionComponent;
//# sourceMappingURL=viewquestion.component.js.map