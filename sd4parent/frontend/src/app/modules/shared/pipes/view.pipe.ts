import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'view'})
export class ViewPipe implements PipeTransform {
  transform(value: string) {
    value = this.replaceAll(value, '_', ' ');
    return value.toLowerCase();
  }

  private replaceAll(value: string, search: string, replacement: string): string {
    return value.split(search).join(replacement);
  }
}
