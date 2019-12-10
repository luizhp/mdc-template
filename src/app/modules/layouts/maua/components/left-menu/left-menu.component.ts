import { Component } from '@angular/core';
import { onSideNavChange } from './../../../../../animations/layouts/maua.animations';
import { SidenavService } from 'src/app/services/layout/sidenav.service';

@Component({
  selector: 'app-mdc-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange]
})
export class LeftMenuComponent {

  public sideNavState = false;

  constructor(
    private sideNavService: SidenavService
  ) { }

  onSidenavToggle() {

    this.sideNavState = !this.sideNavState;

    this.sideNavService
      .sideNavState$
      .next(this.sideNavState);

  }

}
