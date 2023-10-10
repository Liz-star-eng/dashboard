import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOnLeaveComponent } from './staff-on-leave.component';

describe('StaffOnLeaveComponent', () => {
  let component: StaffOnLeaveComponent;
  let fixture: ComponentFixture<StaffOnLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffOnLeaveComponent]
    });
    fixture = TestBed.createComponent(StaffOnLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
