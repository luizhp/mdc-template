import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { onSideNavChange } from './../../../../../animations/layouts/maua.animations';
import { SidenavService } from 'src/app/services/layout/sidenav.service';

@Component({
  selector: 'app-mdc-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange]
})
export class LeftMenuComponent implements OnDestroy {

  private subscriptions: Subscription = new Subscription();
  public sideNavState = false;

  constructor(
    private sideNavService: SidenavService
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
          .subscribe(sn => this.sideNavState = sn)
      );
  }

}
