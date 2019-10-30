import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointDataService } from './../../../../../services/layout/breakpoint-data.service';
//import { BreakpointState } from '@angular/cdk/layout';
import { ScreenBreakpoint } from './../../../../../models/layouts/screen-breakpoint';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'mdc-layout-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  private _screenBreakpoint: ScreenBreakpoint;

  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  toolbarTitle: string = 'MDC TEMPLATE';
  showToolbarMenuButton: boolean = true;
  showToolbarTitle: boolean = true;

  toolbarMenuTitle: string = 'Remark';

  drawerRole: string = 'navigation'; //'dialog'; //'navigation';
  drawerMode: string = 'side';   //'side';   //'over' //'push'
  drawerOpened: boolean = true;
  drawerPosition: string = 'start'; //'start' //'end'

  //isHandset$: Observable<boolean>;
  isHandset$: boolean;

  constructor(private breakpointDataService: BreakpointDataService) {

    // this._subscriptions.add(
    //   breakpointDataService
    //     .results
    //     .subscribe(x => {
    //       //console.log('subscription this.isHandset$');
    //       //console.log(this.isHandset$);
    //       this.isHandset$ = x.matches;
    //       //console.log('subscription Breakpoints.Handset');
    //       //console.log(x);
    //     })
    // );

    this._subscriptions.add(
      breakpointDataService
        .screenBreakpoint$
        .subscribe(sb => this._screenBreakpoint = sb)
    );

  }

  ngOnInit() {

    console.log('this.drawer._width');
    console.log(this.drawer._width);

    //console.log('ngOnInit this.isHandset$');
    //console.log(this.isHandset$);

  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  arrangeLayout(): void {

    //if (this._screenBreakpoint.breakpoint === 'XSmall') {
    //}

    //if (this.drawer.toggle())
    //this.showToolbarMenuButton
    
  }


}