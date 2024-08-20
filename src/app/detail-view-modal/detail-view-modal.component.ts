import { Component, Input, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { getOptions } from 'highcharts';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-detail-view-modal',
  templateUrl: './detail-view-modal.component.html',
  styleUrl: './detail-view-modal.component.scss'
})


export class DetailViewModalComponent implements OnInit {
  @Input() message!: string;
  Highcharts = Highcharts;
  chartOptions: any = {};
  chartRef!: Highcharts.Chart;
  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  }
  constructor(private bsModalRef: BsModalRef) {
    Highcharts.setOptions(getOptions());
  }

  public ngOnInit(): void {

    this.chartOptions = {
      title: {
        text: 'Toxicity'
      },
      chart: {
        type: 'gauge',
        // plotBackgroundColor: null,
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

  public onConfirm(): void {
    this.bsModalRef.content.onClose.next(true);
    this.bsModalRef.hide();
  }

  public onCancel(): void {
    this.bsModalRef.content.onClose.next(false);
    this.bsModalRef.hide();
  }


}