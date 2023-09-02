import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-card-overview',
  templateUrl: './portfolio-card-overview.component.html',
  styleUrls: ['./portfolio-card-overview.component.scss'],
})
export class PortfolioCardOverviewComponent implements OnInit {

  public videourl = "https://www.youtube.com/watch?v=f6Oal6dYLGE";

  constructor(public  sanitizer:DomSanitizer, private router: Router) { }

  ngOnInit() {}

  public dashboard(): void {
      this.router.navigateByUrl(`home`);
  }

}
