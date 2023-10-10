import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELeaveComponent } from './e-leave.component';

describe('ELeaveComponent', () => {
  let component: ELeaveComponent;
  let fixture: ComponentFixture<ELeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELeaveComponent]
    });
    fixture = TestBed.createComponent(ELeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
