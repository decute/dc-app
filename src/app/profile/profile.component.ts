import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public changePasswordPage(): void {
    this.router.navigateByUrl(`change-password`);
  }

  public openPortfolioPage(): void {
    this.router.navigateByUrl(`portfolio`);
  }

  public dashboard(): void {
    this.router.navigateByUrl(`home`);
  }

}
