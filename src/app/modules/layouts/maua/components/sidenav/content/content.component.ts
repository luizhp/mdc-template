import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// import { onMainContentChange } from '../../../../../../animations/layouts/maua.animations';
import { SidenavService } from '../../../../../../services/layout/sidenav.service';

@Component({
  selector: 'app-mdc-maua-sidenav-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  // animations: [onMainContentChange]
})
export class MauaSidenavContentComponent implements OnDestroy {

  private subscriptions: Subscription = new Subscription();
  public isSideNavVisible = true;

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
          .isSideNavVisible$
          .subscribe(
            isSideNavVisible =>
              this.isSideNavVisible = isSideNavVisible
          )
      );
  }

}
