import { Component } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-swimlane-heat-map-chart',
  templateUrl: './swimlane-heat-map-chart.component.html',
})
export class SwimlaneHeatMapChartComponent {
  multi: any[] =  multi;


  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  yAxisLabel: string = 'Year';

  colorScheme = "vivid"

}
