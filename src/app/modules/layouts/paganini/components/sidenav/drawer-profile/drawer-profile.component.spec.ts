import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerProfileComponent } from './drawer-profile.component';

describe('DrawerProfileComponent', () => {
  let component: DrawerProfileComponent;
  let fixture: ComponentFixture<DrawerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
