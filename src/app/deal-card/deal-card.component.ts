import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss'],
})
export class DealCardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
     // Simple GET request with response type <any>
     this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
       console.log(data);
    });
  }

}
