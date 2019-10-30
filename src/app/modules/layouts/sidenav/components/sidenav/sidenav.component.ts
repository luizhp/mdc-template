import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointDataService } from './../../../../../services/layout/breakpoint-data.service';
//import { BreakpointState } from '@angular/cdk/layout';
import { ScreenBreakpoint } from './../../../../../models/layouts/screen-breakpoint';

@Component({
  selector: 'mdc-layout-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  private _screenBreakpoint: ScreenBreakpoint;

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


    //console.log('ngOnInit this.isHandset$');
    //console.log(this.isHandset$);

  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach(s => {
    //   s.unsubscribe()
    // });
    this._subscriptions.unsubscribe();
  }


}