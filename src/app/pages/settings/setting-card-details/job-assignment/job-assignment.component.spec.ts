import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAssignmentComponent } from './job-assignment.component';

describe('JobAssignmentComponent', () => {
  let component: JobAssignmentComponent;
  let fixture: ComponentFixture<JobAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobAssignmentComponent]
    });
    fixture = TestBed.createComponent(JobAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
