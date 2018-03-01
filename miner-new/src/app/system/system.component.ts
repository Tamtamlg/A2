import { Component } from '@angular/core';

@Component({
  selector: 'wfm-system',
  templateUrl: './system.component.html'
})
export class SystemComponent {

  isSidebar = false;

  toggleSidebar() {
    this.isSidebar = !this.isSidebar;
    console.log('isSidebar: ', this.isSidebar);
  }

}
