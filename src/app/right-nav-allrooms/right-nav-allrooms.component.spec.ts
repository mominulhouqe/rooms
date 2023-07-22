import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavAllroomsComponent } from './right-nav-allrooms.component';

describe('RightNavAllroomsComponent', () => {
  let component: RightNavAllroomsComponent;
  let fixture: ComponentFixture<RightNavAllroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightNavAllroomsComponent]
    });
    fixture = TestBed.createComponent(RightNavAllroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
