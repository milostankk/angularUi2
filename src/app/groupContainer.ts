import {Group} from './group';

export class GroupContainer {
  group: Group = new Group();
  subgroup: Group = this.group.subgroup;
  dateFrom: Date;
  dateTo: Date;

  checkForCompletion() {
    if (this.group && this.subgroup && this.dateTo &&  this.dateFrom) {
      return true;
    } else {
      return false;
    }
  }
};



