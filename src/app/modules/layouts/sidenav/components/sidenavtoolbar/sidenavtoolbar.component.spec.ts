import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavtoolbarComponent } from './sidenavtoolbar.component';

describe('SidenavtoolbarComponent', () => {
  let component: SidenavtoolbarComponent;
  let fixture: ComponentFixture<SidenavtoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavtoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavtoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
