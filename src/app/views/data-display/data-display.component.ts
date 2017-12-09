import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

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
  }

  setData(): void {
   /* this.dataService.getData().subscribe(res => this.result = res);*/
  }


  ngOnInit() {
    this.setData();
    this.options = {
      title: {text: 'awesome chart'},
      series: [{
        name: 'stoka',
        data: this.result.map(function (point) {
          return [point.date, point.value];
        }),
        pointInterval: 24 * 3600 * 1000,
      }],
      xAxis: {
      /*  categories: this.result.forEach(function (x) {
          return x.date;
        }),*/
        startOnTick: true,
        type: 'datetime',
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
