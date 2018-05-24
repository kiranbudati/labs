import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { AppService } from '../services/app.service';
import { PagerService } from '../services/pager.service';

import { ReversePipe } from '../pipes/reverse.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  private allItems: any[]; pager: any = {}; pagedItems: any[];
  allQuestions: any;
  userId: any;
  seachPipe = new SearchPipe();
  constructor(
    private appService: AppService,
    private router: Router,
    private pagerService: PagerService) {
    this.userId = '';
  }
  askQuestionPgae() {
    this.router.navigate(['/forum/ask_question', this.userId]);
  }
  searchQuestion(eve: string) {
    this.pagedItems = this.seachPipe.transform(this.allQuestions, eve);
    this.pager = this.pagerService.getPager(this.pagedItems.length, 1);
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  viewQuestion(id) {
    console.log(id);
    this.router.navigate(['/forum/view_question', id]);
  }
  ngOnInit() {
    this.appService.getQuestions().subscribe((res) => {
      this.allQuestions = res;
      this.allItems = this.allQuestions;
      console.log(res);
      // initialize to page 1
      this.setPage(1);
    });
    this.userId = localStorage.getItem('user');
  }
}
