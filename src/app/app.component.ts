import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wordly-poc';
  currURL = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd) {
        this.currURL = val.url;
      }
    });
  }
}
