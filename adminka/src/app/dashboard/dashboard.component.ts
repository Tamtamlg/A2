import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import {
  single,
  generateData
} from '../shared/chartData';
import { FormControl } from '@angular/forms';
import { ChartsDataService } from '../shared/services/carts-data.service';
import { DataTableService } from '../shared/services/datatable.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  single: any[];
  graph: {
    links: any[],
    nodes: any[]
  };
  dateData: any[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  roundDomains = false;
  colorScheme = {
    domain: [
      '#0099cc', '#ffc65d', '#2ECC71', '#4cc3d9', '#d96557', '#ba68c8'
    ]
  };
  schemeType = 'ordinal';
  // line interpolation
  curve = shape.curveLinear;
  // line, area
  timeline = false;
  // margin
  margin = false;
  marginTop = 40;
  marginRight = 40;
  marginBottom = 40;
  marginLeft = 40;
  // gauge
  gaugeMin = 0;
  gaugeMax = 50;
  gaugeLargeSegments = 10;
  gaugeSmallSegments = 5;
  gaugeTextValue = '';
  gaugeUnits = 'alerts';
  gaugeAngleSpan = 240;
  gaugeStartAngle = -120;
  gaugeShowAxis = true;
  gaugeValue = 50; // linear gauge value
  gaugePreviousValue = 70;

  public selectedMoments = [new Date(), new Date()];

  isLoaded = false;

  // multiselect var
  itemList = [];
  selectedItems = [];
  settings = {};

  // datatables
  dataTableLevel3 = [];
  dataTableLevel2 = [];

  constructor(
    private chartsDataService: ChartsDataService,
    private dataTableService: DataTableService,
    private modalService: NgbModal
  ) {

    Object.assign(this, {
      single
    });

  }

  ngOnInit() {

    // get charts data
    this.chartsDataService.getChartData().subscribe((response) => {
      this.dateData = response;

      this.isLoaded = true;
    });

    // multiselect settings
    this.itemList = [
      { 'id': 1, 'itemName': 'X5' },
      { 'id': 2, 'itemName': 'X6' },
      { 'id': 3, 'itemName': 'X7' },
      { 'id': 4, 'itemName': 'U6' }
    ];

    this.selectedItems = [
      { 'id': 1, 'itemName': 'X5' }
    ];
    this.settings = {
      text: 'Select Types',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: 'filter-type'
    };

  }

  // select(data) {
  //   console.log('Item clicked', data);
  // }

  // onLegendLabelClick(entry) {
  //   console.log('Legend clicked', entry);
  // }

  openAlarmModal(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  getTableDetails3() {
    this.dataTableService.getDataLevel3().subscribe((response) => {
      if (response.status === 'S') {
        this.dataTableLevel3 = response.data;
      }
      console.log('getTableDetails3', this.dataTableLevel3);
    });
  }

  getTableDetails2() {
    this.dataTableService.getDataLevel2().subscribe((response) => {
      if (response.status === 'S') {
        this.dataTableLevel2 = response.data;
      }
      console.log('getTableDetails2', this.dataTableLevel2);
    });
  }

  toggleTable3(btn, table, index) {
    if ( !btn.classList.contains('open') ) {
      // check if data has been fetched already
      if (!table.classList.contains('fetched')) {
        table.classList.add('fetched');
        this.getTableDetails3();
      }
      table.classList.add('show');
      btn.classList.add('open');
    } else {
      table.classList.remove('show');
      btn.classList.remove('open');
    }
  }

  toggleTable2(btn, table) {
    if ( !btn.classList.contains('open') ) {
      // check if data has been fetched already
      if (!table.classList.contains('fetched')) {
        table.classList.add('fetched');
        this.getTableDetails2();
      }
      table.classList.add('show');
      btn.classList.add('open');
    } else {
      table.classList.remove('show');
      btn.classList.remove('open');
    }
  }

}
