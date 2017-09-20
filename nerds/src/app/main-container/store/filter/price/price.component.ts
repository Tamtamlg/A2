import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  public someRange: number[] = [1000, 7000];

  constructor() { }

  ngOnInit() {
  }

}
