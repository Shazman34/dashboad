import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailedInfoComponent } from './service-detailed-info.component';

describe('ServiceDetailedInfoComponent', () => {
  let component: ServiceDetailedInfoComponent;
  let fixture: ComponentFixture<ServiceDetailedInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailedInfoComponent]
    });
    fixture = TestBed.createComponent(ServiceDetailedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
