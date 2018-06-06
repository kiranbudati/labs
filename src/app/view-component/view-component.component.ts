import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  componentId: any; loadingBar: Boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appService: AppService) {
    this.loadingBar = false;
   }
  backToComp() {
    this.router.navigate(['/components']);
  }
  ngOnInit() {
    this.loadingBar = true;
    this.componentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingBar = false;
    // if (this.componentId != 1 || this.componentId != 2 || this.componentId != 3 || this.componentId != 4 || this.componentId != 5) {
    //   console.log(this.componentId)
    //   this.componentId = null;
    // }
    // console.log(this.componentId);
    // this.appService.getComponentById(this.componentId).subscribe((res)=>{
    //   console.log(res);
    // });
  }

}
