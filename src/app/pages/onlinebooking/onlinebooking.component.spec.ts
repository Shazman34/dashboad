import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinebookingComponent } from './onlinebooking.component';

describe('OnlinebookingComponent', () => {
  let component: OnlinebookingComponent;
  let fixture: ComponentFixture<OnlinebookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinebookingComponent]
    });
    fixture = TestBed.createComponent(OnlinebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
