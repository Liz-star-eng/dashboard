import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDistributionComponent } from './department-distribution.component';

describe('DepartmentDistributionComponent', () => {
  let component: DepartmentDistributionComponent;
  let fixture: ComponentFixture<DepartmentDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentDistributionComponent]
    });
    fixture = TestBed.createComponent(DepartmentDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
