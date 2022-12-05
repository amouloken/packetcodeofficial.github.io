import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compos/home/home.component';
import { NavbarComponent } from './compos/shared/navbar/navbar.component';
import { SwimlaneHeatMapChartComponent } from './compos/ngx-chart/swimlane-heat-map-chart/swimlane-heat-map-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SwimlaneHeatMapChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
