import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {mockGroups} from './mock-data';
import {GroupViewModel} from './groupViewModel';

@Injectable()
export class GroupService {

  constructor() { }

  getGroups(): Observable<GroupViewModel[]> {
    return of(mockGroups);
  }

}
