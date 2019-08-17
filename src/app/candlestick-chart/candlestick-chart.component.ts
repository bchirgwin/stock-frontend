import { Component, ViewChild } from '@angular/core';

/// <reference types="anychart" />
import 'anychart';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent {
  @ViewChild('chartContainer', { static: true }) container;

  data = [
    [Date.UTC(2007, 12, 23), 23.55, 23.88, 23.38, 23.62],
    [Date.UTC(2007, 12, 24), 22.65, 23.7, 22.65, 23.36]
  ];

  //https://docs.anychart.com/Basic_Charts/Japanese_Candlestick_Chart
  chart = anychart.candlestick(this.data);

  ngAfterViewInit() {
    var axis = this.chart.xAxis();

    var labels = axis.labels();
    labels.format(function() {
      return anychart.format.dateTime(this.value);
    });

    this.chart.title('Add Candlestick series to a chart');
    this.chart.container('chartContainer');
    this.chart.draw();
  }
}
