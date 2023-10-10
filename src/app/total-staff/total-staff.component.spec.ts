import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStaffComponent } from './total-staff.component';

describe('TotalStaffComponent', () => {
  let component: TotalStaffComponent;
  let fixture: ComponentFixture<TotalStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalStaffComponent]
    });
    fixture = TestBed.createComponent(TotalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
