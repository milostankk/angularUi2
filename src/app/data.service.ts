import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {mockData} from './mock-data';

@Injectable()
export class DataService {

  constructor() {
  }

  getData(): Observable<object[]> {
    return of(mockData);
  }

}
