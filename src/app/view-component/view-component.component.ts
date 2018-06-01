import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  componentId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.componentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.appService.getComponentById(this.componentId).subscribe((res)=>{
      console.log(res);
    });
  }

}
