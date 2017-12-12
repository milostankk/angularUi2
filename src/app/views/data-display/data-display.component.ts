import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import * as Highcharts from 'highcharts';
import * as HighChartsExporting from 'highcharts-exporting';
import * as HighchartsOfflineExporting from 'highcharts-export-csv';


HighChartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  options: Object;
  result: any[];
  array: any[];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(res => this.result = res);
    this.array = this.result;
    Highcharts.dateFormat('Month: %m Day: %d Year: %Y', 20, false);
  }



  ngOnInit() {
    this.options = {
      chart: {
        name: 'awesome',
        backgroundColor: '#F2F4F8',
        renderTo: 'chart',
        zoomType: 'x'
      },
    /*  exporting: {
        csv: {
          dateFormat: '%Y-%m-%d'
        }
      },*/

      responsive: {
        rules: [{
          condition: {
            maxWidth: 800
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }]
      },
      title: {text: 'Awesome Chart'},
      series: [{
        showInLegend: false,
        name: 'point',
        data: this.result.map(function (point) {
          return [point.date, point.value];
        }),
        pointInterval: 24 * 3600 * 1000,
      }],
      xAxis: {
        type: 'datetime',
        startOnTick: true,
        minTickInterval: 20000,
        tickPositioner: function (min, max) {
          const ticks = this.series[0].processedXData.slice();
          ticks.info = this.tickPositions.info;
          return ticks;
        },
        minPadding: 0.015,
        dateTimeLabelFormats: {
          minute: '%H:%M',
          hour: '%H:%M',
          day: '%e. %b',
          week: '%e. %b',
          month: '%b \'%y',
          year: '%Y'
        }
      }
    }
  }

}
