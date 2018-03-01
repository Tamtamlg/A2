import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wfm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isSidebar;

  constructor() { }

  ngOnInit() {
  }

}
