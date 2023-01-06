import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter(it => {
      return it.account_id.toString().includes(searchTerm) || it.branch_name.toLowerCase().includes(searchTerm) || it.account_type.toLowerCase().includes(searchTerm) || it.saving_type.toLowerCase().includes(searchTerm);
    });
  }

}
