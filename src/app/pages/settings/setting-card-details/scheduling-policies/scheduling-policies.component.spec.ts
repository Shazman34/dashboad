import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingPoliciesComponent } from './scheduling-policies.component';

describe('SchedulingPoliciesComponent', () => {
  let component: SchedulingPoliciesComponent;
  let fixture: ComponentFixture<SchedulingPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulingPoliciesComponent]
    });
    fixture = TestBed.createComponent(SchedulingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
