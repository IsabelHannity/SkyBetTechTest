import { Pipe, PipeTransform } from '@angular/core';

import { Price } from './../../../models/outcome';

@Pipe({
  name: 'odds',
})
export class OddsPipe implements PipeTransform {
  transform(price: Price, oddsType?: string): unknown {
    return oddsType === 'decimal' ? price.decimal : `${price.num}/${price.den}`;
  }
}
