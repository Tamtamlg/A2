import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../shared/models/user.model';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  isSidebar = false;

  @Output() toggleSidebar = new EventEmitter<any>();

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSidebarEvent() {
    this.isSidebar = !this.isSidebar;
    this.toggleSidebar.emit();
  }
}
