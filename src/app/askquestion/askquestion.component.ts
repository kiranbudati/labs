import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {
  base64textString: any;
  askQuesForm: FormGroup; userId: any;
  domains: any; subdomain: any;
  selectedDomain: String; selectedSubDomain: any = [];
  quesRes: any;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private appService: AppService,
    private router: Router) {
    this.base64textString = '';
    this.askQuesForm = this.fb.group({
      questionTitle: ['', [Validators.required]],
      questionDescription: ['', [Validators.required]],
      askAnonymously: false,
      questionImage: [''],
      userId: [''],
      askedBy: [''],
      domain: [''],
      subDomain: ['']
    });

  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }
  deleteImage() {
    this.base64textString = '';
  }
  askQuestion() {
    this.askQuesForm.patchValue({
      questionImage: this.base64textString,
      userId: this.userId, askedBy: localStorage.getItem('fullname'),
      domain: this.selectedDomain,
      subDomain: this.selectedSubDomain
    });
    this.appService.addQuestion(this.askQuesForm.value).subscribe((res) => {
      this.quesRes = res;
      if (this.quesRes.success) {
        this.selectedDomain = null;
        this.selectedSubDomain = null;
        this.subdomain = null;
        this.base64textString = null;
        this.askQuesForm.reset();
      }
    });
  }
  getSubdomain(dom) {
    this.selectedDomain = dom;
    this.subdomain = this.domains.filter((el) => {
      return el.domain === dom;
    });
    this.selectedSubDomain = [];
  }
  selectSubDomain(data) {
    if (this.selectedSubDomain === null) {
      this.selectedSubDomain.push(data);
    } else {
      // this.selectedSubDomain.push(data);
      const index = this.selectedSubDomain.findIndex(x => x === data);
      console.log(index);
      if (index === -1) {
        this.selectedSubDomain.push(data);
      } else {
        this.selectedSubDomain.splice(index, 1);
      }
    }
  }
  ngOnInit() {
    this.userId = localStorage.getItem('user');
    this.appService.getDomains().subscribe((res) => {
      this.domains = res;
    });
  }

}
