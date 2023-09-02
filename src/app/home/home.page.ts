import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segment: any =  'live';
  constructor(public router: Router) {
    this.segment = 'live';
  }

  public openProfilePage(): void {
    this.router.navigateByUrl(`profile`);
  }

  public overview(): void {
    this.router.navigateByUrl(`company-overview`);
  }

  // public segmentChanged(event): void {
  //   console.log(event.detail.value);
  //   this.router.navigateByUrl('/live-deals');
  // }
}
