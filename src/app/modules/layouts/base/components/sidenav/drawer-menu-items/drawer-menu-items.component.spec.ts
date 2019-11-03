import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerMenuItemsComponent } from './drawer-menu-items.component';

describe('DrawerMenuItemsComponent', () => {
  let component: DrawerMenuItemsComponent;
  let fixture: ComponentFixture<DrawerMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
