import * as moment from 'moment';
import { Component, OnInit, Input } from '@angular/core';
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
import { UpdateTimeService } from '../shared/services/update-time.service';

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
  dataTableDetails = [];

  interval;
  // updateInterval = 300000;

  // checked checkbox length
  checkedCheckboxLength = 0;


  constructor(
    private chartsDataService: ChartsDataService,
    private dataTableService: DataTableService,
    private modalService: NgbModal,
    private updateTimeService: UpdateTimeService
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

    this.getTableDetails();



  }







  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  openAlarmModal(content) {
    this.modalService.open(content).result.then((result) => {

    }, (reason) => {

    });
  }

  getTableDetails() {
    if (this.updateTimeService.updTime > -1) {
      this.interval = setInterval(() => {
        this.dataTableService.getTablesData().subscribe((response) => {
          if (response.status === 'S') {
            this.dataTableDetails = response;
          } else {
            console.log('что-то пошло не так');
          }
        });
        console.log('update', this.updateTimeService.updTime);
      }, this.updateTimeService.updTime);

    } else {
      clearInterval(this.interval);
      console.log('clearInterval');
    }
  }

  toggleTable(btn, table) {
    if (!btn.classList.contains('open')) {
      table.classList.add('show');
      btn.classList.add('open');
    } else {
      table.classList.remove('show');
      btn.classList.remove('open');
    }
  }

  checkedChbx() {
    const checkboxSelected = document.getElementsByClassName('selected');
    this.checkedCheckboxLength = checkboxSelected.length;
  }
}
