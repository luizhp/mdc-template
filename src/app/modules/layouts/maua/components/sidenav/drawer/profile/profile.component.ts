import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { animateText } from './../../../../../../../animations/layouts/maua.animations';

import { SidenavService } from 'src/app/services/layout/sidenav.service';

@Component({
  selector: 'mdc-maua-sidenav-drawer-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [animateText]
})
export class MauaSidenavDrawerProfileComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  public linkText: boolean = false;

  constructor(
    private _sidenavService: SidenavService,
  ) {
    this._startSubscriptions();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {
    this._subscriptions.add(
      this._sidenavService
        .sideNavState$
        .subscribe(x => this.linkText = x)
    );
  }

}