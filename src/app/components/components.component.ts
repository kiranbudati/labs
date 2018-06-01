import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {
  components: any;
  constructor(private appService: AppService, private router: Router) {
    this.components = null;
  }
  viewComponent(id) {
    this.router.navigate(['/components', id]);
  }

  ngOnInit() {
    this.appService.getComponets().subscribe((res) => {
      this.getComp(res);
    });
  }
  getComp(data) {
    this.components = data;
    console.log(this.components);
  }
}
