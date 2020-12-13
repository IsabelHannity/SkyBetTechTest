import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from './../shared/shared.module';
import { SportsListComponent } from './sports-list.component';

describe('SportsListComponent', () => {
  let component: SportsListComponent;
  let fixture: ComponentFixture<SportsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsListComponent],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a property named `sports` with type Array', () => {
    expect(component.sports).toBeDefined();
    expect(component.sports.length).toBe(5);
  });

  it('should render an app-header', () => {
    const fixture = TestBed.createComponent(SportsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header').innerText).toContain('SkyBet');
  });

  it('should render a 5 mat-list-item components', () => {
    const fixture = TestBed.createComponent(SportsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('mat-list-item').length).toEqual(5);
  });
});
