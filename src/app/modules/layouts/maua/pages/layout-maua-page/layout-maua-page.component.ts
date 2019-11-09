import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { SidenavService } from './../../../../../services/layout/sidenav.service';
import { onMainContentChange } from './../../../../../animations/layouts/maua.animations';

@Component({
  selector: 'mdc-layout-maua-page',
  templateUrl: './layout-maua-page.component.html',
  styleUrls: ['./layout-maua-page.component.css'],
  animations: [onMainContentChange]
})
export class LayoutMauaPageComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  public onSideNavChange: boolean;

  constructor(
    private _sidenavService: SidenavService
  ) {
    this._startSubscriptions();
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _startSubscriptions(): void {

    this._subscriptions.add(
      this._sidenavService.sideNavState$.subscribe(res => {
        console.log(res)
        this.onSideNavChange = res;
      })
    );

  }

}
