import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHomeComponent } from './report-home.component';

describe('ReportHomeComponent', () => {
  let component: ReportHomeComponent;
  let fixture: ComponentFixture<ReportHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportHomeComponent]
    });
    fixture = TestBed.createComponent(ReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
