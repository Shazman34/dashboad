import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulingCancellationComponent } from './rescheduling-cancellation.component';

describe('ReschedulingCancellationComponent', () => {
  let component: ReschedulingCancellationComponent;
  let fixture: ComponentFixture<ReschedulingCancellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReschedulingCancellationComponent]
    });
    fixture = TestBed.createComponent(ReschedulingCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
