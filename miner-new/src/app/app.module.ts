import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';
import { DashboardService } from './system/shared/services/dashboard.service';
import { UpdateTimeService } from './system/shared/services/update-time.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthDataService } from './shared/services/auth-data.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AuthModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    UsersService,
    AuthService,
    AuthGuard,
    AuthDataService,
    DashboardService,
    UpdateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }