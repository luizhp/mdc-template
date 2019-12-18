import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Menuitem } from 'src/app/models/layouts/menuitem.interface';
import { MenuService } from '../../../services/structure/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../../../../assets/css/remark/bootstrap.css',
    '../../../../assets/css/remark/bootstrap-extend.css',
    '../../../../assets/css/remark/site.css',
    './home.component.css'
  ]
})
export class HomeComponent implements OnDestroy {

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
