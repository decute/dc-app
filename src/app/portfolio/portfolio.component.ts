import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public porfolioOverviePage(): void {
     this.router.navigateByUrl(`portfolio-overview`);
  }

}
