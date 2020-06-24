import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingContentComponent } from './following-content.component';

describe('FollowingContentComponent', () => {
  let component: FollowingContentComponent;
  let fixture: ComponentFixture<FollowingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
