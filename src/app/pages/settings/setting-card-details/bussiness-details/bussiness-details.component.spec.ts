import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessDetailsComponent } from './bussiness-details.component';

describe('BussinessDetailsComponent', () => {
  let component: BussinessDetailsComponent;
  let fixture: ComponentFixture<BussinessDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussinessDetailsComponent]
    });
    fixture = TestBed.createComponent(BussinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
