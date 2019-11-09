import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { onSideNavChange, animateText } from './../../../../../../../animations/layouts/maua.animations';

import { SidenavService } from 'src/app/services/layout/sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'mdc-maua-sidenav-drawer-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class MauaSidenavDrawerMenuComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  public linkText: boolean = false;

  public pages: Page[] = [
    { name: 'Inbox', link: 'some-link', icon: 'inbox' },
    { name: 'Starred', link: 'some-link', icon: 'star' },
    { name: 'Send email', link: 'some-link', icon: 'send' },
  ]

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
        .subscribe(sn => this.linkText = sn)
    );
  }

}