import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { onMainContentChange } from './../../../../../animations/layouts/maua.animations';
import { SidenavService } from './../../../../../services/layout/sidenav.service';
import { DrawerLayoutService } from './../../../../../services/layout/drawer-layout.service';

@Component({
  selector: 'app-mdc-layout-maua-page',
  templateUrl: './layout-maua-page.component.html',
  styleUrls: ['./layout-maua-page.component.css'],
  animations: [onMainContentChange]
})
export class LayoutMauaPageComponent implements OnDestroy {

  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  private subscriptions: Subscription = new Subscription();

  public onSideNavChange: boolean;
  // private isSideNavVisible: boolean;

  constructor(
    private sideNavService: SidenavService,
    private layoutDrawerService: DrawerLayoutService,
  ) {
    this._startSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {

    this.subscriptions
      .add(
        this.sideNavService
          .sideNavState$
          .subscribe(
            res => {
              console.log(res);
              this.onSideNavChange = res;
            })
      );

    // this.subscriptions
    //   .add(
    //     this.sideNavService
    //       .isSideNavVisible$
    //       .subscribe(
    //         isSideNavVisible =>
    //           this.isSideNavVisible = isSideNavVisible
    //       )
    //   );

    this.subscriptions
      .add(
        this.layoutDrawerService
          .toggleDrawer$
          .subscribe(
            _ => {
              this.drawer.toggle();
              this.sideNavService.isSideNavVisible$.next(this.drawer.opened);
            })
      );

  }

}
