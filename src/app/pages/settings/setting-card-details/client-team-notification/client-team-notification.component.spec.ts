import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTeamNotificationComponent } from './client-team-notification.component';

describe('ClientTeamNotificationComponent', () => {
  let component: ClientTeamNotificationComponent;
  let fixture: ComponentFixture<ClientTeamNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientTeamNotificationComponent]
    });
    fixture = TestBed.createComponent(ClientTeamNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
