import { Component, OnDestroy, ViewChild } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

import { BreakpointLayoutService } from './../../../../../../services/layout/breakpoint-layout.service';
import { DrawerLayoutService } from './../../../../../../services/layout/drawer-layout.service';

import { ScreenBreakpoint } from './../../../../../../models/layouts/screen-breakpoint.interface';

@Component({
  selector: 'app-mdc-sidenav-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnDestroy {

  private subscriptions: Subscription = new Subscription();
  private screenBreakpoint: ScreenBreakpoint;

  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  drawerRole = 'navigation'; //'dialog'; //'navigation';
  drawerMode = 'side';   //'side';   //'over' //'push'
  drawerOpened = true;
  drawerPosition = 'start'; //'start' //'end'

  constructor(
    private breakpointLayoutService: BreakpointLayoutService,
    private drawerLayoutService: DrawerLayoutService
  ) {
    this._startSubscriptions();
  }

  // ngOnInit() {
  // console.log('this.drawer._width');
  // console.log(this.drawer._width);
  // }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {

    this.subscriptions
      .add(
        this.breakpointLayoutService
          .screenBreakpoint$
          .subscribe(sb => this.screenBreakpoint = sb)
      );

    this.subscriptions
      .add(
        this.drawerLayoutService
          .toggleDrawer$
          .subscribe(dw => {
            if (dw) {
              this.drawer.toggle();
            }
          })
      );

    this.subscriptions
      .add(
        this.drawerLayoutService
          .openDrawer$
          .subscribe(dw => {
            if (dw) {
              this.drawer.open();
            }
          })
      );

    this.subscriptions.add(
      this.drawerLayoutService
        .openDrawer$
        .subscribe(dw => {
          if (dw) {
            this.drawer.close();
          }
        })
    );

  }

  // arrangeLayout(): void {
  // if (this.screenBreakpoint.breakpoint === 'XSmall') {}
  // if (this.drawer.toggle())
  // this.showToolbarMenuButton
  // }

}
