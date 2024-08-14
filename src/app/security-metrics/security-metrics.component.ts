import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighChartsMore from 'highcharts/highcharts-more';
import { metricsResponse } from '../models/model-response';

HighChartsMore(Highcharts);

@Component({
  selector: 'app-security-metrics',
  templateUrl: './security-metrics.component.html',
  styleUrl: './security-metrics.component.scss'
})
export class SecurityMetricsComponent implements OnInit{
  ngOnInit(): void {
    
  }
  metrics: metricsResponse[]=[];
  
  constructor(){}
  getAllMetrics(){
    //why adding const solves this error?
    // why adding constructor solved the previous error
    const metricsToPush: metricsResponse = {name:'Toxicity',val:5};
    this.metrics.push(metricsToPush);

  }
  


  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'gauge',
      // plotBackgroundColor: null,
      // plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: '80%'
  },
    title: {
      text: "Model Security Factors",
    },
    xAxis: {
      type: 'category'
    },
    pane: {
      startAngle: -90,
      endAngle: 89.9,
      background:undefined,
      center: ['50%', '75%'],
      size: '100%'
  },
    yAxis: {
      min: 0,
      max: 200,
      tickPixelInterval: 72,
      tickPosition: 'inside',
      // tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
      tickLength: 20,
      tickWidth: 2,
      // minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: '14px'
        }
      },
      lineWidth: 0,
      plotBands: [{
        from: 0,
        to: 130,
        color: '#55BF3B', // green
        thickness: 20,
        borderRadius: '50%'
      }, {
        from: 150,
        to: 200,
        color: '#DF5353', // red
        thickness: 20,
        borderRadius: '50%'
      }, {
        from: 120,
        to: 160,
        color: '#DDDF0D', // yellow
        thickness: 20
      }]
    },

    series: [{
      data: [80],
      type: 'gauge',
      dial: {
        radius: '80%',
        backgroundColor: 'gray',
        baseWidth: 12,
        baseLength: '0%',
        rearLength: '0%'
      },
      pivot: {
        backgroundColor: 'gray',
        radius: 6
      }
    }]
  }
}
