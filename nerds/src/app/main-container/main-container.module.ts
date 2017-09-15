import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container.component';
import { StoreComponent } from './store/store.component';
import { ClientsComponent } from './clients/clients.component';
import { StudiaComponent } from './studia/studia.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StoreComponent,
    ClientsComponent,
    StudiaComponent,
    ContactsComponent,
    CartComponent
]
})
export class MainContainerModule { }