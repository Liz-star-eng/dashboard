import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStaffComponent } from './active-staff.component';

describe('ActiveStaffComponent', () => {
  let component: ActiveStaffComponent;
  let fixture: ComponentFixture<ActiveStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveStaffComponent]
    });
    fixture = TestBed.createComponent(ActiveStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
