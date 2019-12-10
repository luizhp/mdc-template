import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { onSideNavChange, animateText } from './../../../../../../../animations/layouts/maua.animations';

import { SidenavService } from 'src/app/services/layout/sidenav.service';

@Component({
  selector: 'app-mdc-maua-sidenav-drawer-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [onSideNavChange, animateText]
})
export class MauaSidenavDrawerProfileComponent implements OnDestroy {

  private subscriptions: Subscription = new Subscription();
  public linkText = false;

  constructor(
    private sidenavService: SidenavService,
  ) {
    this._startSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {
    this.subscriptions
      .add(
        this.sidenavService
          .sideNavState$
          .subscribe(x => this.linkText = x)
      );
  }

}