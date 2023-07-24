import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedGiftComponent } from './added-gift.component';

describe('AddedGiftComponent', () => {
  let component: AddedGiftComponent;
  let fixture: ComponentFixture<AddedGiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedGiftComponent]
    });
    fixture = TestBed.createComponent(AddedGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
