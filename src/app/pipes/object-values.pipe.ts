import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues'
})
export class ObjectValuesPipe implements PipeTransform {

  transform(value: any): any[] {
    if (value && typeof value === 'object') {
      return Object.keys(value).map(key => value[key]);
    }
    return [];
  }
}
