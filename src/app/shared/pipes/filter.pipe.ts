import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const filterValue = [];
    if (value) {
      for (const item of value) {
        if (item.name.toLowerCase().indexOf(arg) > -1) {
          filterValue.push(item);
        };
      };
    }
    return filterValue;
  };
};
