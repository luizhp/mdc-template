import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { SidenavService } from 'src/app/services/layout/sidenav.service';
import { onSideNavChange, animateText } from 'src/app/animations/layouts/maua.animations';
import { Menuitem } from 'src/app/models/layouts/menuitem.interface';

@Component({
  selector: 'mdc-maua-sidenav-drawer-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
  animations: [onSideNavChange, animateText]
})
export class MauaSidenavDrawerMenuItemsComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  public linkText: boolean = false;

  @Input('menu') menuStructure: Menuitem[];

  constructor(
    private _sidenavService: SidenavService,
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
        .subscribe(sn => this.linkText = sn)
    );
  }

}
