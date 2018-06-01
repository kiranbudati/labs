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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../services/auth.service");
var router_1 = require("@angular/router");
var validators_1 = require("../others/validators");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            selectorHeight: '150px',
        };
        this.message = [];
        this.signupStatus = 'complete';
        this.dummyProfilePic = '../../assets/favicon.png';
        this.profilePic = null;
        this.createForm();
        this.message = [];
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            hallticket: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(12)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)])
        });
        this.singupForm = this.fb.group({
            hallticket: new forms_1.FormControl(''),
            fullname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(25), forms_1.Validators.pattern('^[a-zA-Z\s \-\']+')]),
            email: new forms_1.FormControl('', [forms_1.Validators.required,
                validators_1.patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            gender: new forms_1.FormControl('', [forms_1.Validators.required]),
            mobile: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(validators_1.regexValidators.phone)]),
            profilePic: new forms_1.FormControl(''),
            education: new forms_1.FormGroup({
                collegeName: new forms_1.FormControl(''),
                branch: new forms_1.FormControl(''),
                year: new forms_1.FormControl(''),
                sem: new forms_1.FormControl(''),
            }),
            project: new forms_1.FormGroup({
                projectTitle: new forms_1.FormControl(''),
                projectDescription: new forms_1.FormControl(''),
                projectDomain: new forms_1.FormControl(''),
                projectSubDomain: new forms_1.FormControl(''),
                projectDuration: new forms_1.FormGroup({
                    startDate: new forms_1.FormControl(''),
                    endDate: new forms_1.FormControl(''),
                })
            }),
            dob: new forms_1.FormControl('')
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.value).subscribe(function (res) {
            _this.message = res;
            console.log(_this.message);
            _this.checkUser = _this.message.user;
            if (_this.message.success) {
                if (_this.checkUser.email === null || _this.checkUser.fullname === null || _this.checkUser.mobile === null ||
                    _this.checkUser.gender === null) {
                    _this.singupForm.patchValue(_this.checkUser);
                    _this.signupStatus = 'incomplete';
                }
                else {
                    _this.authService.storeUserData(_this.message.token, _this.message.user);
                    // setTimeout(() => {
                    _this.router.navigate(['/dashboard']);
                    // }, 2000);
                }
            }
        });
    };
    LoginComponent.prototype.onDateChanged = function (event) {
        this.dob = event.formatted;
    };
    LoginComponent.prototype.update = function () {
        var _this = this;
        this.singupForm.patchValue({
            profilePic: this.profilePic,
            dob: this.dob
        });
        this.authService.updateUser(this.message.user._id, this.singupForm.value).subscribe(function (res) {
            _this.afterUpdateData = res;
            if (_this.afterUpdateData.email != null && _this.afterUpdateData.mobile != null && _this.afterUpdateData.fullname != null) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.uploadImage = function (evt) {
        this.profilePic = null;
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    LoginComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.profilePic = btoa(binaryString);
    };
    LoginComponent.prototype.deleteImage = function () {
        this.profilePic = '';
        // this.dummyProfilePic = '../../assets/favicon.png';
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map