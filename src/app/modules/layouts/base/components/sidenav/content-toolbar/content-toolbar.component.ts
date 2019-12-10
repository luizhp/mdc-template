import { Component } from '@angular/core';

import { DrawerLayoutService } from './../../../../../../services/layout/drawer-layout.service';

@Component({
  selector: 'app-mdc-sidenav-content-toolbar',
  templateUrl: './content-toolbar.component.html',
  styleUrls: ['./content-toolbar.component.css']
})
export class ContentToolbarComponent {

  showToolbarMenuButton = true;
  showToolbarTitle = true;
  toolbarTitle = 'Angular Material Template';

  constructor(
    private drawerLayoutService: DrawerLayoutService
  ) { }

  drawerToggle() {
    this.drawerLayoutService.toggle();
  }

}
