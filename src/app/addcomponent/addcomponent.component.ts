import { Component, OnInit } from '@angular/core';
import { TagModel } from 'ngx-chips/core/accessor';
import { Observable } from 'rxjs';
import { TagInputModule } from 'ngx-chips';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.css']
})
export class AddcomponentComponent implements OnInit {

  // items = ['Pizza', 'Pasta', 'Parmesan'];

  advantages: any = []; disadvantages: any = []; features: any = []; applications: any = []; others: any = [];
  componentImages: any = []; otherImages: any = [];

  advan: any; disadvan: any; featu: any; applic: any; otherHead: any; otherDesc: any;
  adClick: Boolean; disAdClick: Boolean; featClick; appClick: Boolean; otherClick: Boolean;
  mode: any; addCompRes: any;

  addComponentForm: FormGroup;
  constructor(private fb: FormBuilder, private appService: AppService) {
    this.createForm();
    this.mode = 0;
    this.adClick = false; this.disAdClick = false; this.featClick = false; this.appClick = false; this.otherClick = false;
    // this.advantages = []; this.disadvantages = []; this.features = []; this.applications = [];
    this.advan = null; this.disadvan = null; this.featu = null; this.applic = null; this.otherHead = null; this.otherDesc = null;
  }
  createForm() {
    this.addComponentForm = this.fb.group({
      componentTitle: new FormControl('', [Validators.required]),
      componentDescription: new FormControl('', [Validators.required]),
      advantages: new FormControl(''),
      disAdvantages: new FormControl(''),
      applications: new FormControl(''),
      features: new FormControl(''),
      componentImages: new FormControl(''),
      otherImages: new FormControl(''),
      others: new FormControl(''),
    });
  }
  addComponent() {
    this.addComponentForm.patchValue({
      advantages: this.advantages,
      disAdvantages: this.disadvantages,
      applications: this.applications,
      features: this.features,
      componentImages: this.componentImages,
      otherImages: this.otherImages,
      others: this.others
    });
    this.appService.addComponent(this.addComponentForm.value).subscribe((res) => {
      this.addCompRes = res;
      console.log(res);
      if (this.addCompRes.message === true) {
        this.addComponentForm.reset();
        this.resetFields();
      }
    });
    console.log(this.addComponentForm.value);
  }

  componetImages(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this.compImageHandler.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  compImageHandler(readerEvt) {
    const binaryString = readerEvt.target.result;
    if (this.componentImages.length < 6) {
      this.componentImages.push(btoa(binaryString));
    } else {
      alert('limit reached');
    }
  }
  deleteCompImage(ind) {
    this.componentImages.splice(ind, 1);
  }
  otherImagesUpload(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this.otherImageHandler.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  otherImageHandler(readerEvt) {
    const binaryString = readerEvt.target.result;
    if (this.otherImages.length < 6) {
      this.otherImages.push(btoa(binaryString));
    } else {
      alert('limit reached');
    }
  }
  deleteOtherImage(ind) {
    this.otherImages.splice(ind, 1);
  }
  // advantages
  addAdvatages() {
    this.adClick = true;
  }
  saveAdvantages() {
    this.adClick = false;
    this.advantages.push(this.advan);
    this.advan = null;
  }
  cancelAdvantages() {
    this.advan = null;
    this.adClick = false;
  }
  deleteAdvantages(ind) {
    this.advantages.splice(ind, 1);
  }
  // disadvantages
  addDisAdvantages() {
    this.disAdClick = true;
  }
  saveDisAdvantages() {
    this.disAdClick = false;
    this.disadvantages.push(this.disadvan);
    this.disadvan = null;
  }
  cancelDisAdvantages() {
    this.disadvan = null;
    this.disAdClick = false;
  }
  deleteDisAdvantages(ind) {
    this.disadvantages.splice(ind, 1);
  }
  // features
  addFeatures() {
    this.featClick = true;
  }
  saveFeatures() {
    this.featClick = false;
    this.features.push(this.featu);
    this.featu = null;
  }
  cancelFeatures() {
    this.featu = null;
    this.featClick = false;
  }
  deleteFeatures(ind) {
    this.features.splice(ind, 1);
  }
  // applications
  addApplications() {
    this.appClick = true;
  }
  saveApplications() {
    this.appClick = false;
    this.applications.push(this.applic);
    this.applic = null;
  }
  cancelApplications() {
    this.applic = null;
    this.appClick = false;
  }
  deleteApplications(ind) {
    this.applications.splice(ind, 1);
  }
  // others
  addOthers() {
    this.otherClick = true;
  }
  saveOthers() {
    this.otherClick = false;
    this.others.push({ heading: this.otherHead, description: this.otherDesc });
    this.otherDesc = null;
    this.otherHead = null;
  }
  cancelOthers() {
    this.otherDesc = null;
    this.otherHead = null;
    this.otherClick = false;
  }
  deleteOthers(ind) {
    this.others.splice(ind, 1);
  }
  resetFields() {
    this.adClick = false; this.disAdClick = false; this.featClick = false; this.appClick = false; this.otherClick = false;
    this.advantages = []; this.disadvantages = []; this.features = []; this.applications = [];
    this.advan = null; this.disadvan = null; this.featu = null; this.applic = null; this.otherHead = null; this.otherDesc = null;
  }
  ngOnInit() {
  }

}
