import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/services/layout/sidenav.service';

@Component({
  selector: 'app-mdc-maua-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class MauaFooterComponent implements OnDestroy {

  private subscriptions: Subscription = new Subscription();
  public sideNavState = false;
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

    this.subscriptions
      .add(
        this.sideNavService
          .sideNavState$
          .subscribe(
            sn => this.sideNavState = sn
          )
      );
  }

  onSidenavToggle() {

    // this.sideNavState = !this.sideNavState;
    this.sideNavService
      .sideNavState$
      .next(!this.sideNavState);

  }

}
