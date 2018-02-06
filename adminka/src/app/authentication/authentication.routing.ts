import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { PassComponent } from './pass/pass.component';
import { ForgotComponent } from './forgot/forgot.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'signin',
      component: SigninComponent
    }, {
      path: 'pass',
      component: PassComponent
    }, {
      path: 'forgot',
      component: ForgotComponent
    }]
  }
];
