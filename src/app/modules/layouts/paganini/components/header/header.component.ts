import { Component, OnInit, Input } from '@angular/core';
//import { MatSidenav } from '@angular/material';

import { DrawerLayoutService } from './../../../../../services/layout/drawer-layout.service';

@Component({
  selector: 'mdc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //@Input() sidenav: MatSidenav;
  // [sidenav]="leftSidenav"

  constructor(
    private _drawerLayoutService: DrawerLayoutService
  ) { }

  ngOnInit() {
  }

  drawerToggle() {
    this._drawerLayoutService.toggle();
  }

}
