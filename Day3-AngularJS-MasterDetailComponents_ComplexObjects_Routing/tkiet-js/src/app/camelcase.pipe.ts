import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const firstLetter: string = value.substring(0, 1).toUpperCase();
    const restOfTheLetters: string = value.substring(1).toLowerCase();
    return firstLetter.concat(restOfTheLetters);
  }

}
