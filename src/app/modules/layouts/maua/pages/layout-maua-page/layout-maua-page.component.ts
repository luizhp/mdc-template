import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { onMainContentChange } from './../../../../../animations/layouts/maua.animations';

import { SidenavService } from './../../../../../services/layout/sidenav.service';
import { DrawerLayoutService } from './../../../../../services/layout/drawer-layout.service';

import { MatSidenav } from '@angular/material';

@Component({
  selector: 'mdc-layout-maua-page',
  templateUrl: './layout-maua-page.component.html',
  styleUrls: ['./layout-maua-page.component.css'],
  animations: [onMainContentChange]
})
export class LayoutMauaPageComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  public onSideNavChange: boolean;
  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  constructor(
    private _sidenavService: SidenavService,
    private _layoutDrawerService: DrawerLayoutService,
  ) {
    this._startSubscriptions();
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {

    this._subscriptions.add(
      this._sidenavService
        .sideNavState$
        .subscribe(res => {
          console.log(res)
          this.onSideNavChange = res;
        })
    );

    this._subscriptions.add(
      this._layoutDrawerService
        .toggleDrawer$
        .subscribe(t => {
          this.drawer.toggle();
        })
    )

  }

}
