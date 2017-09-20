import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './page-components/navbar/navbar.component';
import { SliderComponent } from './page-components/slider/slider.component';
import { WellComponent } from './page-components/well/well.component';
import { FeaturesComponent } from './page-components/features/features.component';
import { ColumnsComponent } from './page-components/columns/columns.component';
import { LearnComponent } from './page-components/learn/learn.component';
import { FooterComponent } from './page-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    WellComponent,
    FeaturesComponent,
    ColumnsComponent,
    LearnComponent,
    FooterComponent
],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
