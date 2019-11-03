import { Component, OnInit } from '@angular/core';

import { DrawerLayoutService } from './../../../../../../services/layout/drawer-layout.service';

@Component({
  selector: 'mdc-sidenav-content-toolbar',
  templateUrl: './content-toolbar.component.html',
  styleUrls: ['./content-toolbar.component.css']
})
export class ContentToolbarComponent implements OnInit {

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