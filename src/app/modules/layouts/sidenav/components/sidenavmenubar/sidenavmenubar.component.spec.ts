import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavmenubarComponent } from './sidenavmenubar.component';

describe('SidenavmenubarComponent', () => {
  let component: SidenavmenubarComponent;
  let fixture: ComponentFixture<SidenavmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
