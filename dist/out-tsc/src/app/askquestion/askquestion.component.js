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
var app_service_1 = require("../services/app.service");
var router_1 = require("@angular/router");
var AskquestionComponent = /** @class */ (function () {
    function AskquestionComponent(fb, authService, appService, router) {
        this.fb = fb;
        this.authService = authService;
        this.appService = appService;
        this.router = router;
        this.selectedSubDomain = [];
        this.options = {
            charCounterCount: true,
            quickInsertButtons: [],
            toolbarButtons: ['bold', 'italic', 'underline', 'subscript', 'superscript', '|', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'insertLink', 'insertTable', '|', 'quote', 'selectAll', 'html'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
        };
        this.base64textString = '';
        this.askQuesForm = this.fb.group({
            questionTitle: ['', [forms_1.Validators.required]],
            questionDescription: ['', [forms_1.Validators.required]],
            askAnonymously: false,
            questionImage: [''],
            userId: [''],
            askedBy: [''],
            domain: [''],
            subDomain: ['']
        });
    }
    AskquestionComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    AskquestionComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
    };
    AskquestionComponent.prototype.deleteImage = function () {
        this.base64textString = '';
    };
    AskquestionComponent.prototype.askQuestion = function () {
        var _this = this;
        this.askQuesForm.patchValue({
            questionImage: this.base64textString,
            userId: this.userId, askedBy: localStorage.getItem('fullname'),
            domain: this.selectedDomain,
            subDomain: this.selectedSubDomain
        });
        this.appService.addQuestion(this.askQuesForm.value).subscribe(function (res) {
            _this.quesRes = res;
            if (_this.quesRes.success) {
                _this.selectedDomain = null;
                _this.selectedSubDomain = null;
                _this.subdomain = null;
                _this.base64textString = null;
                _this.askQuesForm.reset();
            }
        });
    };
    AskquestionComponent.prototype.getSubdomain = function (dom) {
        this.selectedDomain = dom;
        this.subdomain = this.domains.filter(function (el) {
            return el.domain === dom;
        });
        this.selectedSubDomain = [];
    };
    AskquestionComponent.prototype.selectSubDomain = function (data) {
        if (this.selectedSubDomain === null) {
            this.selectedSubDomain.push(data);
        }
        else {
            // this.selectedSubDomain.push(data);
            var index = this.selectedSubDomain.findIndex(function (x) { return x === data; });
            console.log(index);
            if (index === -1) {
                this.selectedSubDomain.push(data);
            }
            else {
                this.selectedSubDomain.splice(index, 1);
            }
        }
    };
    AskquestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('user');
        this.appService.getDomains().subscribe(function (res) {
            _this.domains = res;
        });
    };
    AskquestionComponent = __decorate([
        core_1.Component({
            selector: 'app-askquestion',
            templateUrl: './askquestion.component.html',
            styleUrls: ['./askquestion.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            app_service_1.AppService,
            router_1.Router])
    ], AskquestionComponent);
    return AskquestionComponent;
}());
exports.AskquestionComponent = AskquestionComponent;
//# sourceMappingURL=askquestion.component.js.map