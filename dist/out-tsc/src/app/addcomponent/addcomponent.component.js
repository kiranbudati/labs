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
var app_service_1 = require("../services/app.service");
var AddcomponentComponent = /** @class */ (function () {
    function AddcomponentComponent(fb, appService) {
        this.fb = fb;
        this.appService = appService;
        // items = ['Pizza', 'Pasta', 'Parmesan'];
        this.advantages = [];
        this.disadvantages = [];
        this.features = [];
        this.applications = [];
        this.others = [];
        this.componentImages = [];
        this.otherImages = [];
        this.createForm();
        this.mode = 0;
        this.adClick = false;
        this.disAdClick = false;
        this.featClick = false;
        this.appClick = false;
        this.otherClick = false;
        // this.advantages = []; this.disadvantages = []; this.features = []; this.applications = [];
        this.advan = null;
        this.disadvan = null;
        this.featu = null;
        this.applic = null;
        this.otherHead = null;
        this.otherDesc = null;
    }
    AddcomponentComponent.prototype.createForm = function () {
        this.addComponentForm = this.fb.group({
            componentTitle: new forms_1.FormControl('', [forms_1.Validators.required]),
            componentDescription: new forms_1.FormControl('', [forms_1.Validators.required]),
            advantages: new forms_1.FormControl(''),
            disAdvantages: new forms_1.FormControl(''),
            applications: new forms_1.FormControl(''),
            features: new forms_1.FormControl(''),
            componentImages: new forms_1.FormControl(''),
            otherImages: new forms_1.FormControl(''),
            others: new forms_1.FormControl(''),
        });
    };
    AddcomponentComponent.prototype.addComponent = function () {
        var _this = this;
        this.addComponentForm.patchValue({
            advantages: this.advantages,
            disAdvantages: this.disadvantages,
            applications: this.applications,
            features: this.features,
            componentImages: this.componentImages,
            otherImages: this.otherImages,
            others: this.others
        });
        this.appService.addComponent(this.addComponentForm.value).subscribe(function (res) {
            _this.addCompRes = res;
            if (_this.addCompRes.message === true) {
                _this.addComponentForm.reset();
                _this.resetFields();
            }
        });
        console.log(this.addComponentForm.value);
    };
    AddcomponentComponent.prototype.componetImages = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this.compImageHandler.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    AddcomponentComponent.prototype.compImageHandler = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        if (this.componentImages.length < 6) {
            this.componentImages.push(btoa(binaryString));
        }
        else {
            alert('limit reached');
        }
    };
    AddcomponentComponent.prototype.deleteCompImage = function (ind) {
        this.componentImages.splice(ind, 1);
    };
    AddcomponentComponent.prototype.otherImagesUpload = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this.otherImageHandler.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    AddcomponentComponent.prototype.otherImageHandler = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        if (this.otherImages.length < 6) {
            this.otherImages.push(btoa(binaryString));
        }
        else {
            alert('limit reached');
        }
    };
    AddcomponentComponent.prototype.deleteOtherImage = function (ind) {
        this.otherImages.splice(ind, 1);
    };
    // advantages
    AddcomponentComponent.prototype.addAdvatages = function () {
        this.adClick = true;
    };
    AddcomponentComponent.prototype.saveAdvantages = function () {
        this.adClick = false;
        this.advantages.push(this.advan);
        this.advan = null;
    };
    AddcomponentComponent.prototype.cancelAdvantages = function () {
        this.advan = null;
        this.adClick = false;
    };
    AddcomponentComponent.prototype.deleteAdvantages = function (ind) {
        this.advantages.splice(ind, 1);
    };
    // disadvantages
    AddcomponentComponent.prototype.addDisAdvantages = function () {
        this.disAdClick = true;
    };
    AddcomponentComponent.prototype.saveDisAdvantages = function () {
        this.disAdClick = false;
        this.disadvantages.push(this.disadvan);
        this.disadvan = null;
    };
    AddcomponentComponent.prototype.cancelDisAdvantages = function () {
        this.disadvan = null;
        this.disAdClick = false;
    };
    AddcomponentComponent.prototype.deleteDisAdvantages = function (ind) {
        this.disadvantages.splice(ind, 1);
    };
    // features
    AddcomponentComponent.prototype.addFeatures = function () {
        this.featClick = true;
    };
    AddcomponentComponent.prototype.saveFeatures = function () {
        this.featClick = false;
        this.features.push(this.featu);
        this.featu = null;
    };
    AddcomponentComponent.prototype.cancelFeatures = function () {
        this.featu = null;
        this.featClick = false;
    };
    AddcomponentComponent.prototype.deleteFeatures = function (ind) {
        this.features.splice(ind, 1);
    };
    // applications
    AddcomponentComponent.prototype.addApplications = function () {
        this.appClick = true;
    };
    AddcomponentComponent.prototype.saveApplications = function () {
        this.appClick = false;
        this.applications.push(this.applic);
        this.applic = null;
    };
    AddcomponentComponent.prototype.cancelApplications = function () {
        this.applic = null;
        this.appClick = false;
    };
    AddcomponentComponent.prototype.deleteApplications = function (ind) {
        this.applications.splice(ind, 1);
    };
    // others
    AddcomponentComponent.prototype.addOthers = function () {
        this.otherClick = true;
    };
    AddcomponentComponent.prototype.saveOthers = function () {
        this.otherClick = false;
        this.others.push({ heading: this.otherHead, description: this.otherDesc });
        this.otherDesc = null;
        this.otherHead = null;
    };
    AddcomponentComponent.prototype.cancelOthers = function () {
        this.otherDesc = null;
        this.otherHead = null;
        this.otherClick = false;
    };
    AddcomponentComponent.prototype.deleteOthers = function (ind) {
        this.others.splice(ind, 1);
    };
    AddcomponentComponent.prototype.resetFields = function () {
        this.adClick = false;
        this.disAdClick = false;
        this.featClick = false;
        this.appClick = false;
        this.otherClick = false;
        this.advantages = [];
        this.disadvantages = [];
        this.features = [];
        this.applications = [];
        this.advan = null;
        this.disadvan = null;
        this.featu = null;
        this.applic = null;
        this.otherHead = null;
        this.otherDesc = null;
    };
    AddcomponentComponent.prototype.ngOnInit = function () {
    };
    AddcomponentComponent = __decorate([
        core_1.Component({
            selector: 'app-addcomponent',
            templateUrl: './addcomponent.component.html',
            styleUrls: ['./addcomponent.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, app_service_1.AppService])
    ], AddcomponentComponent);
    return AddcomponentComponent;
}());
exports.AddcomponentComponent = AddcomponentComponent;
//# sourceMappingURL=addcomponent.component.js.map