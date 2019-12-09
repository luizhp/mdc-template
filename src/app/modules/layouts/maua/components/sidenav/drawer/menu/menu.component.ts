import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { MenuService } from './../../../../../../../services/structure/menu.service';
import { Menuitem } from 'src/app/models/layouts/menuitem.interface';

@Component({
  selector: 'mdc-maua-sidenav-drawer-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MauaSidenavDrawerMenuComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  menuStructure: Menuitem[];

  constructor(private _menuService: MenuService) { 

    this.menuStructure = _menuService.getMenu();
    this._startSubscriptions();

  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {
    this._subscriptions.add(
      this._menuService
        .menu$
        .subscribe(sn => this.menuStructure = sn)
    );
  }

}