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
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var AppService = /** @class */ (function () {
    function AppService(http, router) {
        this.http = http;
        this.router = router;
        // this.URL = 'https://h-labs.herokuapp.com/api';
        this.URL = 'http://localhost:3000/api';
    }
    // domains
    AppService.prototype.getDomains = function () {
        return this.http.get(this.URL + '/domains');
    };
    // questions
    AppService.prototype.addQuestion = function (data) {
        return this.http.post(this.URL + '/questions', data);
    };
    AppService.prototype.getQuestions = function () {
        return this.http.get(this.URL + '/questions');
    };
    AppService.prototype.getRelatedQuestions = function (id) {
        return this.http.get(this.URL + '/questions/related_questions/' + id);
    };
    AppService.prototype.getQuestionById = function (id) {
        return this.http.get(this.URL + '/questions/' + id);
    };
    AppService.prototype.likeOrDislike = function (data) {
        return this.http.post(this.URL + '/likes_dislikes', data);
    };
    // comments
    AppService.prototype.addComment = function (data) {
        return this.http.post(this.URL + '/comments', data);
    };
    AppService.prototype.deleteComment = function (id) {
        return this.http.delete(this.URL + '/questions/' + id);
    };
    AppService.prototype.editComment = function (id, comment) {
        return this.http.put(this.URL + '/comments/', { id: id, comment: comment });
    };
    // components
    AppService.prototype.addComponent = function (data) {
        return this.http.post(this.URL + '/components', data);
    };
    AppService.prototype.getComponets = function () {
        return this.http.get(this.URL + '/components');
    };
    AppService.prototype.getComponentById = function (id) {
        return this.http.get(this.URL + '/components/' + id);
    };
    AppService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map