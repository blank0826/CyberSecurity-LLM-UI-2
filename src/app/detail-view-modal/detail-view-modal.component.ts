import { Component, Input, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { getOptions } from 'highcharts';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MetricsData } from '../services/metrics-value';

@Component({
  selector: 'app-detail-view-modal',
  templateUrl: './detail-view-modal.component.html',
  styleUrl: './detail-view-modal.component.scss'
})


export class DetailViewModalComponent implements OnInit {
  @Input() message!: MetricsData[];
  Highcharts = Highcharts;
  chartOptions1: any = {};
  chartOptions2: any = {};
  chartOptions3: any = {};
  chartRef!: Highcharts.Chart;
  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  }
  constructor(private bsModalRef: BsModalRef) {
    Highcharts.setOptions(getOptions());
  }

  public ngOnInit(): void {
    console.log("This is Modal ",this.message);

    this.chartOptions1 = {
      title: {
        text: this.message[0].name
      },
      chart: {
        type: 'gauge',
        plotBackgroundColor: '#E4E5E8',
        // plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '70%'
      },
      xAxis: {
        type: 'category'
      },
      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: undefined,
        center: ['50%', '75%'],
        size: '100%'
      },
      yAxis: {
        min: 0,
        max: 100,
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
          to: 40,
          color: '#55BF3B', // green
          thickness: 20,
          borderRadius: '50%'
        }, {
          from: 30,
          to: 70,
          color: '#DDDF0D' , // red
          thickness: 20,
          borderRadius: '50%'
        }, {
          from: 60,
          to: 100,
          color: '#DF5353', // yellow
          thickness: 20
        }]
      },

      series: [{
        data: [this.message[0].value],
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

    this.chartOptions2 = {
      title: {
        text: this.message[1].name
      },
      chart: {
        type: 'gauge',
        plotBackgroundColor: '#E4E5E8',
        // plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '70%'
      },
      xAxis: {
        type: 'category'
      },
      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: undefined,
        center: ['50%', '75%'],
        size: '100%'
      },
      yAxis: {
        min: 0,
        max: 100,
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
          to: 40,
          color: '#55BF3B', // green
          thickness: 20,
          borderRadius: '50%'
        }, {
          from: 30,
          to: 70,
          color: '#DDDF0D' , // red
          thickness: 20,
          borderRadius: '50%'
        }, {
          from: 60,
          to: 100,
          color: '#DF5353', // yellow
          thickness: 20
        }]
      },

      series: [{
        data: [this.message[1].value],
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


    this.chartOptions3 = {
      title: {
        text: this.message[2].name,
        
      },
      chart: {
        type: 'gauge',
        plotBackgroundColor: '#E4E5E8',
        // plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '70%'
      },
      xAxis: {
        type: 'category'
      },
      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: undefined,
        center: ['50%', '75%'],
        size: '100%'
      },
      yAxis: {
        min: 0,
        max: 100,
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
          to: 40,
          color: '#55BF3B', // green
          thickness: 20,
          borderRadius: '50%'
        }, {
          from: 30,
          to: 70,
          color: '#DDDF0D' , // red
          thickness: 20,
          borderRadius: '50%'
        }, {
          from: 60,
          to: 100,
          color: '#DF5353', // yellow
          thickness: 20
        }]
      },

      series: [{
        data: [this.message[2].value],
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

  public onConfirm(): void {
    this.bsModalRef.content.onClose.next(true);
    this.bsModalRef.hide();
  }

  public onCancel(): void {
    this.bsModalRef.content.onClose.next(false);
    this.bsModalRef.hide();
  }


}