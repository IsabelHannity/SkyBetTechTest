import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EventComponent } from './event.component';
import { SharedModule } from './../shared/shared.module';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventComponent],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have properties like `event$`', () => {
    expect(component.event$).toBeDefined();
  });

  it('should render an app-header', () => {
    const fixture = TestBed.createComponent(EventComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header')).toBeDefined();
  });

  it('should render an mat-button-toggle-group', () => {
    const fixture = TestBed.createComponent(EventComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-button-toggle-group')).toBeDefined();
  });

  it('should render an app-market', () => {
    const fixture = TestBed.createComponent(EventComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-market')).toBeDefined();
  });
});
