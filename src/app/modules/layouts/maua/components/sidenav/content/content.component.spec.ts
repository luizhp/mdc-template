import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauaSidenavContentComponent } from './content.component';

describe('MauaSidenavContentComponent', () => {
  let component: MauaSidenavContentComponent;
  let fixture: ComponentFixture<MauaSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauaSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauaSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
