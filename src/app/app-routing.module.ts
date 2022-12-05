import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwimlaneHeatMapChartComponent } from './compos/ngx-chart/swimlane-heat-map-chart/swimlane-heat-map-chart.component';

const routes: Routes = [
  {path : "swimlane-heat-map-chart", component: SwimlaneHeatMapChartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
