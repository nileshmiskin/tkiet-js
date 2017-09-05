import { Dealer } from '../models/dealer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  dealers: Dealer[];

  ngOnInit() {
    this.dealers = [
      new Dealer('Shrine auto', 1000),
      new Dealer('SMG and sons', 2000),
      new Dealer('Mai hundai', 3000)
    ];
  }

}
