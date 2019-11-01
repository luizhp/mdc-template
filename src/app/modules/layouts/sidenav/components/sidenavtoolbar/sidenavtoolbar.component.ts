import { Component, OnInit } from '@angular/core';

import { DrawerLayoutService } from './../../../../../services/layout/drawer-layout.service';

@Component({
  selector: 'mdc-sidenavtoolbar',
  templateUrl: './sidenavtoolbar.component.html',
  styleUrls: ['./sidenavtoolbar.component.css']
})
export class SidenavtoolbarComponent implements OnInit {

  showToolbarMenuButton: boolean = true;
  showToolbarTitle: boolean = true;
  toolbarTitle: string = 'MDC TEMPLATE';

  constructor(
    private drawerLayoutService: DrawerLayoutService
  ) { }

  ngOnInit() {

  }

  drawerToggle() {
    this.drawerLayoutService.toggle();
  }

}
