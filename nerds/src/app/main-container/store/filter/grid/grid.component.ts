import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public gridList: Grid[] = GRIDS;

}

export class Grid {
  value: string;
  label: string;
}

const GRIDS: Grid[] = [
  { value: 'adaptive', label: 'Адаптивная' },
  { value: 'fixed', label: 'Фиксированная' },
  { value: 'rubber', label: 'Резиновая' }
];