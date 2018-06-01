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
var app_service_1 = require("../services/app.service");
var pager_service_1 = require("../services/pager.service");
var search_pipe_1 = require("../pipes/search.pipe");
var router_1 = require("@angular/router");
var ForumComponent = /** @class */ (function () {
    function ForumComponent(appService, router, pagerService) {
        this.appService = appService;
        this.router = router;
        this.pagerService = pagerService;
        this.pager = {};
        this.seachPipe = new search_pipe_1.SearchPipe();
        this.userId = '';
    }
    ForumComponent.prototype.askQuestionPgae = function () {
        this.router.navigate(['/forum/ask_question', this.userId]);
    };
    ForumComponent.prototype.searchQuestion = function (eve) {
        this.pagedItems = this.seachPipe.transform(this.allQuestions, eve);
        this.pager = this.pagerService.getPager(this.pagedItems.length, 1);
    };
    ForumComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ForumComponent.prototype.viewQuestion = function (id) {
        this.router.navigate(['/forum/view_question', id]);
    };
    ForumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getQuestions().subscribe(function (res) {
            _this.allQuestions = res;
            _this.allItems = _this.allQuestions;
            console.log(res);
            // initialize to page 1
            _this.setPage(1);
        });
        this.userId = localStorage.getItem('user');
    };
    ForumComponent = __decorate([
        core_1.Component({
            selector: 'app-forum',
            templateUrl: './forum.component.html',
            styleUrls: ['./forum.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService,
            router_1.Router,
            pager_service_1.PagerService])
    ], ForumComponent);
    return ForumComponent;
}());
exports.ForumComponent = ForumComponent;
//# sourceMappingURL=forum.component.js.map