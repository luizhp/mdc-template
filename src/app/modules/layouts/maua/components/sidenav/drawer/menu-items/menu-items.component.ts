import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SidenavService } from 'src/app/services/layout/sidenav.service';
import { onSideNavChange, animateText } from 'src/app/animations/layouts/maua.animations';
import { Menuitem } from 'src/app/models/layouts/menuitem.interface';

@Component({
  selector: 'app-mdc-maua-sidenav-drawer-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
  animations: [onSideNavChange, animateText]
})
export class MauaSidenavDrawerMenuItemsComponent implements OnDestroy {

  private subscriptions: Subscription = new Subscription();
  public linkText = false;

  @Input() menuStructure: Menuitem[];

  constructor(
    private sideNavService: SidenavService,
    private router: Router
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
          .sideNavState$
          .subscribe(sn => {
            if (!sn) {
              this.menuStructure.map(x => x.isFold = true);
            }
            this.linkText = sn;
          })
      );
  }

  public toggleMenu(e: Event, mi: Menuitem): void {
    let elParent: HTMLElement;
    e.stopPropagation();
    if (!this.linkText) {
      elParent = (e.target as HTMLElement).parentElement.parentElement;
      this.onSidenavToggle();
      setTimeout(_ => {
        elParent.scrollIntoView();
      }, 500);
    }
    mi.isFold = !mi.isFold;
    // console.log(mi);
  }

  public go(e: Event, mi: Menuitem): void {
    e.stopPropagation();
    // console.log('go');
    // console.log(e);
    // console.log(mi);
    this.router.navigateByUrl(mi.href);
  }

  onSidenavToggle() {

    this.linkText = !this.linkText;

    this.sideNavService
      .sideNavState$
      .next(this.linkText);

  }

}
