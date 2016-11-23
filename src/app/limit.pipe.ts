import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {
  transform(herString: string): any {
    return herString.substring(0, 100) + '...';
  }
}
