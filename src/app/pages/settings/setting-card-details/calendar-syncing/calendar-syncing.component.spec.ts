import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSyncingComponent } from './calendar-syncing.component';

describe('CalendarSyncingComponent', () => {
  let component: CalendarSyncingComponent;
  let fixture: ComponentFixture<CalendarSyncingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarSyncingComponent]
    });
    fixture = TestBed.createComponent(CalendarSyncingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
