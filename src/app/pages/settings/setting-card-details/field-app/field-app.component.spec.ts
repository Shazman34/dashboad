import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAppComponent } from './field-app.component';

describe('FieldAppComponent', () => {
  let component: FieldAppComponent;
  let fixture: ComponentFixture<FieldAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldAppComponent]
    });
    fixture = TestBed.createComponent(FieldAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
