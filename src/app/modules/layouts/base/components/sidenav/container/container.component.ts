import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

import { BreakpointLayoutService } from './../../../../../../services/layout/breakpoint-layout.service';
import { DrawerLayoutService } from './../../../../../../services/layout/drawer-layout.service';

import { ScreenBreakpoint } from './../../../../../../models/layouts/screen-breakpoint.interface';

@Component({
  selector: 'mdc-sidenav-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  private _screenBreakpoint: ScreenBreakpoint;

  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  drawerRole: string = 'navigation'; //'dialog'; //'navigation';
  drawerMode: string = 'side';   //'side';   //'over' //'push'
  drawerOpened: boolean = true;
  drawerPosition: string = 'start'; //'start' //'end'

  constructor(
    private breakpointLayoutService: BreakpointLayoutService,
    private drawerLayoutService: DrawerLayoutService
  ) {

    this._startSubscriptions();

  }

  ngOnInit() {

    //console.log('this.drawer._width');
    //console.log(this.drawer._width);

  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {

    this._subscriptions.add(
      this.breakpointLayoutService
        .screenBreakpoint$
        .subscribe(sb => this._screenBreakpoint = sb)
    );

    this._subscriptions.add(
      this.drawerLayoutService
        .toggleDrawer$
        .subscribe(dw => {
          if (dw)
            this.drawer.toggle();
        })
    );

    this._subscriptions.add(
      this.drawerLayoutService
        .openDrawer$
        .subscribe(dw => {
          if (dw)
            this.drawer.open();
        })
    );

    this._subscriptions.add(
      this.drawerLayoutService
        .openDrawer$
        .subscribe(dw => {
          if (dw)
            this.drawer.close();
        })
    );

  }


  arrangeLayout(): void {

    //if (this._screenBreakpoint.breakpoint === 'XSmall') {
    //}

    //if (this.drawer.toggle())
    //this.showToolbarMenuButton

  }

}