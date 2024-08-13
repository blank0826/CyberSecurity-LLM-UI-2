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
    title:{
      text: "Model Security Factors",
    },
    xAxis:{
      type:'category'
    },
    series:[{
      data:[
        ['Toxicity',10],
        ['JailBreak',11]
      ],
      type:'bar'
    }]
  }
}
