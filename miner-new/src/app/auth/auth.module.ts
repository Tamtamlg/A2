import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ForgotComponent } from './forgot/forgot.component';
import { PassComponent } from './pass/pass.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    ForgotComponent,
    PassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {}
