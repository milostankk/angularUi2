
import {GroupViewModel} from './groupViewModel';

export const mockGroups: GroupViewModel[] = [
  { name: 'All', values: [] },
  { name: 'Index', values: ['S&P500', 'Dow30', 'NASDAQ']},
  { name: 'Sector', values: ['Banking', 'Biotech', 'Automotive']},
  {name: 'Stock', values: []}
]


export const mockData: any[] = [
  {date: new Date('2017-12-02T00:00:00').toLocaleString(), value: 0.11},
  {date: new Date('2017-12-05T00:00:00').toLocaleString(), value: 0.16},
  {date: new Date('2017-12-10T00:00:00').toLocaleString(), value: 0.23},
  {date: new Date('2017-12-13T00:00:00').toLocaleString(), value: 0.29},
  {date: new Date('2017-12-20T00:00:00').toLocaleString(), value: 0.33},
  {date: new Date('2017-12-23T00:00:00').toLocaleString(), value: 0.44},
  {date: new Date('2017-12-25T00:00:00').toLocaleString(), value: 0.03},
  {date: new Date('2017-12-27T00:00:00').toLocaleString(), value: 0.50},
  {date: new Date('2017-12-29T00:00:00').toLocaleString(), value: 0.22},
  {date: new Date('2017-12-30T00:00:00').toLocaleString(), value: 0.87}
]
