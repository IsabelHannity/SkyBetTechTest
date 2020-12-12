import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odds',
})
export class OddsPipe implements PipeTransform {
  transform(price: any, oddsType: string): unknown {
    return oddsType === 'decimal' ? price.decimal : `${price.num}/${price.den}`;
  }
}
