import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public openAgreementPage() : void {
    this.router.navigateByUrl(`agreement`);
  }

}
