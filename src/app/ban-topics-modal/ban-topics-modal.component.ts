import { Component, Input, OnInit } from '@angular/core';
import { SubMetricsData } from '../services/submetrics-value';
import { BsModalRef } from 'ngx-bootstrap/modal';
import Highcharts, { getOptions } from 'highcharts';
import { mockData } from '../services/metrics-value';

@Component({
  selector: 'app-ban-topics-modal',
  templateUrl: './ban-topics-modal.component.html',
  styleUrl: './ban-topics-modal.component.scss'
})
export class BanTopicsModalComponent implements OnInit {
  @Input() message!: SubMetricsData[];
  seriesData:any;
  chartOptions: any = {};
  topics:any=['Violence','Discrimination','Discrimination','Discrimination','Discrimination'];
  subMetricsScore:any=[20,40,50,90,10];
  Highcharts=Highcharts;
  chartRef!: Highcharts.Chart;
  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  };
  constructor(private bsModalRef: BsModalRef) {
    Highcharts.setOptions(getOptions());
  }
  
  ngOnInit(): void {
    this.seriesData = [{name:'Violence',data:30,type:'column'},{name:'Discrimination',data:50,type:'column'}];
    
    this.chartOptions ={
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Banned Topics Score',
        align: 'center'
      },
      xAxis: {
        categories: this.topics,
        title: {
          text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        min: 0,
        max:100,
        title: {
          text: 'Score (%)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        },
        gridLineWidth: 0
      },
      // tooltip: {
      //   valueSuffix: ' millions'
      // },
      plotOptions: {
        bar: {
          borderRadius: '50%',
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Score',
        colorByPoint: true,
     // data: Object.values(obj)
     // or:
        data: this.subMetricsScore,
        zones:[
          {
            value:40,
            color:'#238823'
          },
          {value:70,
            color:'#FFBF00'
          },
          {value:100,
            color:'#D2222D'
          }
        ]
    }],
      

    }
  }



}
