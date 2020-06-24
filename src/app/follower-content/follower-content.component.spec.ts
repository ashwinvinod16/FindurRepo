import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerContentComponent } from './follower-content.component';

describe('FollowerContentComponent', () => {
  let component: FollowerContentComponent;
  let fixture: ComponentFixture<FollowerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
