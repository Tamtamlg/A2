import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './main-container/store/store.component';
import { StudiaComponent } from './main-container/studia/studia.component';
import { ClientsComponent } from './main-container/clients/clients.component';
import { ContactsComponent } from './main-container/contacts/contacts.component';
import { CartComponent } from './main-container/cart/cart.component';
import { FilterComponent } from './main-container/store/filter/filter.component';
import { GalleryComponent } from './main-container/store/gallery/gallery.component';
import { PriceComponent } from './main-container/store/filter/price/price.component';
import { GridComponent } from './main-container/store/filter/grid/grid.component';
import { FeaturesComponent } from './main-container/store/filter/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent,
    StoreComponent,
    ClientsComponent,
    StudiaComponent,
    ContactsComponent,
    CartComponent,
    FilterComponent,
    GalleryComponent,
    PriceComponent,
    GridComponent,
    FeaturesComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule,
    ReactiveFormsModule,
    RouterModule.forRoot([ 
        { path: "studia", component: StudiaComponent },
        { path: "clients", component: ClientsComponent },
        { path: "store", component: StoreComponent },
        { path: "contacts", component: ContactsComponent },
        { path: "cart", component: CartComponent },
        { path: "", redirectTo: "store", pathMatch: "full" }
    ]),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
