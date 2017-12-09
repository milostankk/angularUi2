import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GroupService} from '../../group.service';
import {GroupViewModel} from '../../groupViewModel';
import {GroupContainer} from '../../groupContainer';
import {Selection} from '../../selection';
import {Group} from '../../group';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  groups: GroupViewModel[];
  groupContent: string[];
  subgroups: GroupViewModel[];
  date;
  minDate;
  dropDownSelection: string;
  group: Group;
  groupBoss: GroupContainer;

  constructor(private groupService: GroupService, private router: Router) {
  }

  groupClicked(e) {
    this.groupBoss = new GroupContainer();
    this.groupBoss.group = new Group();
    this.groupBoss.group.what = e.name;
    this.groupContent = e.values;
    const index = this.getGroupIndex(e.name);
    this.setSubgroups(index);
    if (e.values.length < 1) {
      this.groupBoss.subgroup = new Group();
    }
    this.dropDownSelection = 'Select';
  }

  groupChanged(e) {
    this.groupBoss.group.which = e;
    this.groupBoss.subgroup = new Group();
    this.dropDownSelection = e;
  }

  subgroupClicked(e) {
    this.groupBoss.subgroup.what = e.name;
    this.groupBoss.dateFrom = new Date();
  }


  dateFromChanged(e) {
    const date = new Date(e.year, e.month - 1, e.day);
    this.groupBoss.dateFrom = date;
    this.minDate = e;
  }

  dateToChanged(e) {
    this.groupBoss.dateTo = new Date();
    const date = new Date(e.year, e.month - 1, e.day);
    this.groupBoss.dateTo = date;
  }

  groupsSelectionDone(e) {
    console.log(this.groupBoss);
    this.router.navigate(['../dataDisplay']);
  }


  getGroupIndex(group: string): number {
    return this.groups.map(function (x) {
      return x.name;
    }).indexOf(group);
  }

  setGroups(): void {
    this.groupService.getGroups().subscribe(groups => this.groups = groups.slice(0, groups.length - 1));
  }

  setSubgroups(index: number): void {
    this.groupService.getGroups().subscribe(groups => this.subgroups = groups.slice(index + 1, groups.length));
  }


  ngOnInit() {
    this.setGroups();
  }

}
