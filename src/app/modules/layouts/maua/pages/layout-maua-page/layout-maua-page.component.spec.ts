import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMauaPageComponent } from './layout-maua-page.component';

describe('LayoutMauaPageComponent', () => {
  let component: LayoutMauaPageComponent;
  let fixture: ComponentFixture<LayoutMauaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMauaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMauaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
