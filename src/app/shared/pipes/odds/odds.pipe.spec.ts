import { Price } from './../../../models/outcome';
import { OddsPipe } from './odds.pipe';

describe('OddsPipe', () => {
  it('create an instance', () => {
    const pipe = new OddsPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return the fractional value by default', () => {
      const pipe = new OddsPipe();
      const price: Price = {
        decimal: 1.45,
        num: 12,
        den: 5,
      };
      expect(pipe.transform(price)).toBe(`${price.num}/${price.den}`);
    });

    it('should return the decimal value from price if that was requested', () => {
      const pipe = new OddsPipe();
      const price: Price = {
        decimal: 1.45,
        num: 12,
        den: 5,
      };
      expect(pipe.transform(price, 'decimal')).toBe(price.decimal);
    });

    it('should return the fractional value if that was requested', () => {
      const pipe = new OddsPipe();
      const price: Price = {
        decimal: 1.45,
        num: 12,
        den: 5,
      };
      expect(pipe.transform(price)).toBe(`${price.num}/${price.den}`);
    });
  });
});
