import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from './../shared/shared.module';
import { SportComponent } from './sport.component';

describe('SportComponent', () => {
  let component: SportComponent;
  let fixture: ComponentFixture<SportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportComponent],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have props like `liveData$`, and `displayedColumns`', () => {
    expect(component.liveData$).toBeDefined();
    expect(component.displayedColumns).toBeDefined();
  });

  it('should render an app-header', () => {
    const fixture = TestBed.createComponent(SportComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header')).toBeDefined();
  });

  it('should render an mat-accordion', () => {
    const fixture = TestBed.createComponent(SportComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-accordion')).toBeDefined();
  });

  it('should render an mat-table', () => {
    const fixture = TestBed.createComponent(SportComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-table')).toBeDefined();
  });
});
