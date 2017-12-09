import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLength'
})
export class ArrayLengthPipe implements PipeTransform {

  transform(value: string[], args?: any): boolean {
    if (!value) { return false; }
    return value.length > 1 ? true : false;
  }

}
