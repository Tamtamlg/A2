import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public featureList: Feature[] = FEATURES;

}

export class Feature {
  value: string;
  label: string;
}

const FEATURES: Feature[] = [
  {value:"slide", label: 'Слайдер'},
  {value:'fitures-block', label: 'Блок преимуществ'},
  {value:'news', label: 'Новости'},
  {value:'galery', label: 'Галерея'},
  {value:'basket', label: 'Корзина'}
];
