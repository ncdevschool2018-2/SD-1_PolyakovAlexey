import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enum' })
export class EnumPipe implements PipeTransform {
  transform(value: string) {
    value = this.replaceAll(value, ' ', '_');
    return value.toUpperCase();
  }

  private replaceAll(value: string, search: string, replacement: string): string {
    return value.split(search).join(replacement);
  }
}

