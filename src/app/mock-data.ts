
import {GroupViewModel} from './groupViewModel';

export const mockGroups: GroupViewModel[] = [
  { name: 'All', values: [] },
  { name: 'Index', values: ['S&P500', 'Dow30', 'NASDAQ']},
  { name: 'Sector', values: ['Banking', 'Biotech', 'Automotive']},
  {name: 'Stock', values: []}
]


export const mockData: any[] = [
  {date: Date.UTC(2017, 11, 2), value: 0.11},
  {date: Date.UTC(2017, 11, 5), value: 0.16},
  {date: Date.UTC(2017, 11, 7), value: 0.23},
  {date: Date.UTC(2017, 11, 12), value: 0.29},
  {date: Date.UTC(2017, 11, 16), value: 0.33},
  {date: Date.UTC(2017, 11, 20), value: 0.44},
  {date: Date.UTC(2017, 11, 22), value: 0.03},
  {date: Date.UTC(2017, 11, 25), value: 0.50},
  {date: Date.UTC(2017, 11, 28), value: 0.22},
  {date: Date.UTC(2017, 11, 29), value: 0.87}
]
