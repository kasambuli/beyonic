import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent as ChrtComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart')
  chart: ChrtComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [40000, 25000, 75000, 60000, 100000],
        },
      ],
      chart: {
        height: 200,
        type: 'line',
        zoom: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['#CAECFF'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['1 Apr', '7 Apr', '14 Apr', '21 Apr', '28 Apr'],
      },
    };
  }
  ngOnInit(): void {}
}
