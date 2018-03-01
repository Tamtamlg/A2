import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
import { FormControl, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../shared/services/dashboard.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { frequency } from './frequency';
import { UpdateTimeService } from '../shared/services/update-time.service';

@Component({
  selector: 'wfm-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  isLoaded = false;

  // modal forms
  public changePoolForm: FormGroup;
  public changeClockForm: FormGroup;
  public restartForm: FormGroup;

  // multiselect var
  itemList = [];
  selectedItems = [];
  settings = {};

  // datatables
  tableData;
  tableTime;

  dataTableDetails = {};

  saveTableState = null;

  // init table state
  openAll = false;

  interval;
  successMessage: string;

  // checked checkbox length
  checkedCheckboxLength = 0;

  requestStatus = '';
  // changeClockRequestStatus = '';
  showLoader: boolean;

  endRequest = true;
  modalRequest = true;

  public frequency = frequency;

  minimizeBtnHide = true;
  showModal = false;

  logRequest;
  logInterval;
  checking = 0;

  selectedFrequency = '0X00';

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal,
    private updateTimeService: UpdateTimeService
  ) { }

  ngOnInit() {
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

    this.getTableDetailsInterval();

    this.changePoolForm = new FormGroup({
      'pool1': new FormControl(null, [Validators.required]),
      'user1': new FormControl(null, [Validators.required]),
      'password1': new FormControl(null, [Validators.required]),
      'pool2': new FormControl,
      'user2': new FormControl,
      'password2': new FormControl,
      'pool3': new FormControl,
      'user3': new FormControl,
      'password3': new FormControl
    });

    this.changeClockForm = new FormGroup({
      'clock': new FormControl
    });

    this.restartForm = new FormGroup({});
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  // alarm modal
  openAlarmModal(content) {
    this.modalService.open(content).result.then((result) => {

    }, (reason) => {

    });
  }
  // change pool modal
  openChangePoolModal(content) {
    this.requestStatus = '';
    this.showModal = true;
    this.modalService.open(content).result.then((result) => {

    }, (reason) => {
      this.changePoolForm.reset();
      this.showModal = false;
    });
  }
  // change clock modal
  openChangeClockModal(content) {
    this.requestStatus = '';
    this.showModal = true;
    this.modalService.open(content).result.then((result) => {

    }, (reason) => {
      this.changeClockForm.reset();
      this.showModal = false;
    });
  }
  // restart modal
  openRestartModal(content) {
    this.requestStatus = '';
    this.showModal = true;
    this.modalService.open(content).result.then((result) => {

    }, (reason) => {
      this.changeClockForm.reset();
      this.showModal = false;
    });
  }
  // reboot modal
  openRebootModal(content) {
    this.requestStatus = '';
    this.showModal = true;
    this.modalService.open(content).result.then((result) => {

    }, (reason) => {
      this.changeClockForm.reset();
      this.showModal = false;
    });
  }

  // get data
  getTableDetails() {
    this.endRequest = false;
    this.tableData = this.dashboardService.getTablesData().subscribe((response) => {
      if (response.status.toLowerCase() === 's') {

        // initial state
        if (!this.saveTableState) {
          this.saveTableState = response;
        }

        this.dataTableDetails = response;
        console.log(this.dataTableDetails);

        this.dataTableDetails = _.defaultsDeep(this.dataTableDetails, this.saveTableState);

      } else {
        console.log('что-то пошло не так');
      }
      this.tableData.unsubscribe();
      this.endRequest = true;
    });
  }

  // autoupdate table data
  getTableDetailsInterval() {
    const dhis = this;
    let time;
    dhis.interval = setTimeout(function run() {
      dhis.tableTime = dhis.updateTimeService.updTime.subscribe((value) => {
        time = value;
      });
      if (time > -1 && dhis.endRequest) {
        dhis.getTableDetails();
        dhis.interval = setTimeout(run, time);
      } else if (time > -1 && !dhis.endRequest) {
        dhis.interval = setTimeout(run, 1000);
      } else {
        dhis.interval = setTimeout(run, time);
      }
      dhis.tableTime.unsubscribe();
    }, time);
  }

  // toggle second level
  toggleTable(btn, table, cb, j) {
    if (!btn.classList.contains('open')) {
      table.classList.add('show');
      btn.classList.add('open');
      _.find(this.saveTableState.level1, { 'checkboxId': cb.id }).level2[j].opened = true;
    } else {
      table.classList.remove('show');
      btn.classList.remove('open');
      _.find(this.saveTableState.level1, { 'checkboxId': cb.id }).level2[j].opened = false;
    }
  }

  // toggle first level
  toggleTable2(btn, table, cb) {
    if (!btn.classList.contains('open')) {
      table.classList.add('show');
      btn.classList.add('open');
      _.find(this.saveTableState.level1, { 'checkboxId': cb.id }).opened = true;
    } else {
      table.classList.remove('show');
      btn.classList.remove('open');
      _.find(this.saveTableState.level1, { 'checkboxId': cb.id }).opened = false;
    }
  }

  // check checkbox
  checkedChbx(cb) {
    const checkboxSelected = document.getElementsByClassName('selected');
    const checkbox = document.getElementsByClassName('check');

    [].map.call(document.querySelectorAll('.main-checkbox'), function (el) {
      if (checkboxSelected.length === checkbox.length) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });

    this.checkedCheckboxLength = checkboxSelected.length;

    if (cb.checked) {
      _.find(this.saveTableState.level1, { 'checkboxId': cb.id }).checked = true;
    } else {
      _.find(this.saveTableState.level1, { 'checkboxId': cb.id }).checked = false;
    }
  }

  // checked all checkboxes
  checkAll(mainCheckbox) {
    const checkbox = document.querySelectorAll('.check');
    const dhis = this;
    [].map.call(document.querySelectorAll('.check'), function (el) {
      if (mainCheckbox.checked) {
        el.checked = true;
        _.find(dhis.saveTableState.level1, { 'checkboxId': el.id }).checked = true;
        dhis.checkedCheckboxLength = checkbox.length;
      } else {
        el.checked = false;
        _.find(dhis.saveTableState.level1, { 'checkboxId': el.id }).checked = false;
        dhis.checkedCheckboxLength = 0;
      }
    });
  }

  // toggle all tables
  onToggle() {
    this.openAll = !this.openAll;
  }

  isLevelOpened(btn) {
    if (btn.classList.contains('open')) {
      return true;
    } else {
      return false;
    }
  }

  // copy to clipboard
  copyToClipboard(el) {
    const range = window.getSelection().getRangeAt(0);
    range.selectNode(el);
    window.getSelection().addRange(range);
    document.execCommand('Copy');
    this.successMessage = 'Successfully copied to clipboard';
    setTimeout(() => {
      this.successMessage = null;
    }, 2000);
  }

  // Add to favourites msg
  showFavouriteMsg(el) {
    if (el.checked) {
      this.successMessage = 'Added to favourites';
      setTimeout(() => {
        this.successMessage = null;
      }, 2000);
    }
  }

  createRequestObj(command: string, checking) {
    let putRequest;
    switch (command) {
      case 'changepool':
      putRequest = {
        'command': command,
        'hostsNames': [],
        'pool1': '',
        'pool2': '',
        'pool3': '',
        'user1': '',
        'user2': '',
        'user3': '',
        'password1': '',
        'password2': '',
        'password3': '',
        'checking': checking
      };
      putRequest.pool1 = this.changePoolForm.value.pool1;
      putRequest.pool2 = this.changePoolForm.value.pool2;
      putRequest.pool3 = this.changePoolForm.value.pool3;
      putRequest.user1 = this.changePoolForm.value.user1;
      putRequest.user2 = this.changePoolForm.value.user2;
      putRequest.user3 = this.changePoolForm.value.user3;
      putRequest.password1 = this.changePoolForm.value.password1;
      putRequest.password2 = this.changePoolForm.value.password2;
      putRequest.password3 = this.changePoolForm.value.password3;
      break;

      case 'changeclock':
      putRequest = {
        'command': command,
        'hostsNames': [],
        'frequency': '',
        'checking': checking
      };
      putRequest.frequency = this.changeClockForm.value.clock;
      break;

      case 'cgminerrestart':
        putRequest = {
          'command': command,
          'hostsNames': [],
          'checking': checking
        };
      break;

      case 'devicereboot':
        putRequest = {
          'command': command,
          'hostsNames': [],
          'checking': checking
        };
      break;

      default:
      putRequest = {};
    }

    const checkedItems = _.filter(this.saveTableState.level1, { 'checked': true });
    for (let i = 0; i < checkedItems.length; i++) {
      putRequest.hostsNames.push(checkedItems[i].hostName);
    }
    this.showLoader = true;
    const sendData = JSON.stringify(putRequest);
    return sendData;
  }

  groupAction(element, command: string) {
    const dhis = this;
    command = command;
    let log;
    let block;
    this.changeClockForm.disable();
    this.changePoolForm.disable();
    this.logRequest = this.dashboardService.groupActionRequest(this.createRequestObj(command, this.checking)).subscribe((response) => {

      if (response && response.status.toLowerCase() === 's') {
        if (response.data.active) {
          this.logRequest.unsubscribe();

          if (response.data.content) {
            log = document.createTextNode(response.data.content);
            block = document.getElementsByClassName('log-wrapper')[0];
            element.appendChild(log);
            block.scrollTop = block.scrollHeight;
          }

          this.checking = 1;

          this.logInterval = setTimeout(() => {
            dhis.groupAction(element, command);
          }, 5000);

        } else {
          log = document.createTextNode(response.data.content);
          block = document.getElementsByClassName('log-wrapper')[0];
          element.appendChild(log);
          block.scrollTop = block.scrollHeight;
          clearTimeout(this.logInterval);
          this.logRequest.unsubscribe();
          this.requestStatus = 'success';
          this.showLoader = false;
          this.checking = 0;
          this.changeClockForm.enable();
          this.changePoolForm.enable();
        }

      } else {
        this.logRequest.unsubscribe();
        this.requestStatus = 'error';
        this.showLoader = false;
        this.changeClockForm.enable();
        this.changePoolForm.enable();
      }
    },
      (error) => {
        this.requestStatus = 'error';
        this.showLoader = false;
        this.changeClockForm.enable();
        this.changePoolForm.enable();
      });
  }

  minimizeModal() {
    [].map.call(document.querySelectorAll('.modal.fade.show'), function (el) {
      el.classList.add('hide-modal');
    });
    [].map.call(document.querySelectorAll('.modal-backdrop.show'), function (el) {
      el.classList.add('hide-modal');
    });
    this.minimizeBtnHide = false;
  }

  showMinimezedModal() {
    [].map.call(document.querySelectorAll('.modal.hide-modal'), function (el) {
      el.classList.remove('hide-modal');
    });
    [].map.call(document.querySelectorAll('.modal-backdrop.hide-modal'), function (el) {
      el.classList.remove('hide-modal');
    });
    this.minimizeBtnHide = true;
  }

  isDisabledGroupAction() {
    if (!this.checkedCheckboxLength && this.showModal) {
      return true;
    } else if (!this.checkedCheckboxLength && !this.showModal) {
      return true;
    } else if (this.checkedCheckboxLength && this.showModal) {
      return true;
    } else {
      return false;
    }
  }

  trackById(index, item) {
    return item.hostName;
  }

}
