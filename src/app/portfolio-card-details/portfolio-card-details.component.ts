import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-card-details',
  templateUrl: './portfolio-card-details.component.html',
  styleUrls: ['./portfolio-card-details.component.scss'],
})
export class PortfolioCardDetailsComponent implements OnInit {

  public clients = [
    {
        "name": "Suzuki",
        "calls": "140PPM"
    },
    {
      "name": "Sansera",
      "calls": "50PPM"
    },
    {
      "name": "TVS",
      "calls": "110PPM"
    },
    {
      "name": "Cataler",
      "calls": "70PPM"
    },
    {
      "name": "IndoMIM",
      "calls": "150PPM"
    }
];

  constructor(private router: Router) { }

  ngOnInit() {}

  public dashboard(): void {
    this.router.navigateByUrl(`profile`);
  }

}
