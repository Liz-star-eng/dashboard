import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticcsComponent } from './statisticcs.component';

describe('StatisticcsComponent', () => {
  let component: StatisticcsComponent;
  let fixture: ComponentFixture<StatisticcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticcsComponent]
    });
    fixture = TestBed.createComponent(StatisticcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
