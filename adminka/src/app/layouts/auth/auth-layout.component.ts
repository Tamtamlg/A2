import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  template: '<router-outlet></router-outlet>'
})
export class AuthLayoutComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {

    this.router.navigate(['./authentication/signin'])

  }

}
