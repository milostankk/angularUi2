import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GroupService} from '../../group.service';
import {ArrayLengthPipe} from '../../array-length.pipe';
import {ChartModule} from 'angular2-highcharts';
import {DataService} from '../../data.service';
import {HttpModule} from '@angular/http';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    ChartModule.forRoot(require('highcharts')),
    HttpModule
  ],
  declarations: [ DashboardComponent, ArrayLengthPipe ],
  providers: [GroupService, DataService ]
})
export class DashboardModule { }
