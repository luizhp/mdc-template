import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPaganiniPageComponent } from './layout-paganini-page.component';

describe('LayoutPaganiniPageComponent', () => {
  let component: LayoutPaganiniPageComponent;
  let fixture: ComponentFixture<LayoutPaganiniPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPaganiniPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPaganiniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
