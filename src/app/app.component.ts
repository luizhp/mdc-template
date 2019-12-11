import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Menuitem } from 'src/app/models/layouts/menuitem.interface';
import { MenuService } from './services/structure/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  public isTemplateMaterial = true;

  private subscriptions: Subscription = new Subscription();
  public menuStructure: Menuitem[];

  constructor(
    private menuService: MenuService
  ) {
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
          .subscribe(ms => this.menuStructure = ms)
      );
  }

}
