import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-security-metrics',
  templateUrl: './security-metrics.component.html',
  styleUrl: './security-metrics.component.scss'
})
export class SecurityMetricsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {
    series:[{
      data:[1,2,3],
      type:'bar'
    }]
  }
}
