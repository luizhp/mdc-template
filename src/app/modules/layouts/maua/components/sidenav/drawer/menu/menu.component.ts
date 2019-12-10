import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { MenuService } from './../../../../../../../services/structure/menu.service';
import { Menuitem } from 'src/app/models/layouts/menuitem.interface';

@Component({
  selector: 'app-mdc-maua-sidenav-drawer-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MauaSidenavDrawerMenuComponent implements OnDestroy {

  private subscriptions: Subscription = new Subscription();

  menuStructure: Menuitem[];

  constructor(private menuService: MenuService) {

    this.menuStructure = menuService.getMenu();
    this._startSubscriptions();

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {
    this.subscriptions
      .add(
        this.menuService
          .menu$
          .subscribe(sn => this.menuStructure = sn)
      );
  }

}