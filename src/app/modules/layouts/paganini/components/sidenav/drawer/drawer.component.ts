//import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable, Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

import { onSideNavChange, animateText } from './../../../../../../animations/layouts/paganini.animations';

import { DrawerLayoutService } from './../../../../../../services/layout/drawer-layout.service';
import { SidenavService } from './../../../../../../services/layout/sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'mdc-sidenav-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  animations: [
    onSideNavChange,
    animateText
  ]
})
export class DrawerComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    { name: 'Inbox', link: 'some-link', icon: 'inbox' },
    { name: 'Starred', link: 'some-link', icon: 'star' },
    { name: 'Send email', link: 'some-link', icon: 'send' },
  ]

  constructor(
    private _sidenavService: SidenavService,
    private _drawerLayoutService: DrawerLayoutService
  ) {

    this._startSubscriptions();

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

  private _startSubscriptions(): void {

    this._subscriptions.add(
      this._drawerLayoutService
        .toggleDrawer$
        .subscribe(dw => {
          if (dw) {
            this.drawer.toggle();
          }
        })
    );

    this._subscriptions.add(
      this._drawerLayoutService
        .openDrawer$
        .subscribe(dw => {
          if (dw)
            this.drawer.open();
        })
    );

    this._subscriptions.add(
      this._drawerLayoutService
        .openDrawer$
        .subscribe(dw => {
          if (dw)
            this.drawer.close();
        })
    );

  }

}