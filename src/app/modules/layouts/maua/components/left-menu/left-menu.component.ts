import { Component, OnInit } from '@angular/core';

import { onSideNavChange } from './../../../../../animations/layouts/maua.animations';

import { SidenavService } from 'src/app/services/layout/sidenav.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;

  constructor(
    private _sidenavService: SidenavService,
  ) { }

  ngOnInit() {
  }

  onSidenavToggle() {

    this.sideNavState = !this.sideNavState;

    this._sidenavService
      .sideNavState$
      .next(this.sideNavState);

  }

}