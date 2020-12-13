import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketComponent } from './market.component';

describe('MarketComponent', () => {
  let component: MarketComponent;
  let fixture: ComponentFixture<MarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an mat-accordion', () => {
    const fixture = TestBed.createComponent(MarketComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-accordion')).toBeDefined();
  });

  it('should render an mat-expansion-panel', () => {
    const fixture = TestBed.createComponent(MarketComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-expansion-panel')).toBeDefined();
  });

  it('should render an mat-list', () => {
    const fixture = TestBed.createComponent(MarketComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-list')).toBeDefined();
  });

  it('should render an app-outcome', () => {
    const fixture = TestBed.createComponent(MarketComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-outcome')).toBeDefined();
  });
});
