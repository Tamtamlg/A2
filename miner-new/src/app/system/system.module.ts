import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BillCardComponent } from './dashboard-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './dashboard-page/currency-card/currency-card.component';
import { BillService } from './shared/services/bill.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipPipe } from './shared/pipes/clip.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    NgbModule
  ],
  declarations: [
    DashboardPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent,
    ClipPipe
  ],
  providers: [BillService]
})
export class SystemModule {}
