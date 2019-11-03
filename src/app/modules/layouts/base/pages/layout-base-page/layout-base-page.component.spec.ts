import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBasePageComponent } from './layout-base-page.component';

describe('LayoutBasePageComponent', () => {
  let component: LayoutBasePageComponent;
  let fixture: ComponentFixture<LayoutBasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
