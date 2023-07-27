import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesHomeComponent } from './postes-home.component';

describe('PostesHomeComponent', () => {
  let component: PostesHomeComponent;
  let fixture: ComponentFixture<PostesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostesHomeComponent]
    });
    fixture = TestBed.createComponent(PostesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
