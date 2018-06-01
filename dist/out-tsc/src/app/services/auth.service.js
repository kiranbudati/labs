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
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        // this.URL = 'https://h-labs.herokuapp.com/api';
        this.URL = 'http://localhost:3000/api';
    }
    AuthService.prototype.login = function (data) {
        return this.http.post(this.URL + '/authentication/login', data);
    };
    AuthService.prototype.register = function (data) {
        this.http.post(this.URL + '/authentication/register', data).subscribe(function (res) {
            console.log(res);
        });
    };
    AuthService.prototype.updateUser = function (id, data) {
        return this.http.put(this.URL + '/authentication/update', { id: id, data: data });
    };
    AuthService.prototype.createAuthHeaders = function () {
        this.loadToken();
        this.options = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            'authorization': this.authToken
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', user.userId);
        localStorage.setItem('fullname', user.fullname);
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.getItem('user') != null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.authToken = null;
        this.router.navigate(['/']);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map