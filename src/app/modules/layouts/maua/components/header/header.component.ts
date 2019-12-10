import { Component } from '@angular/core';
import { DrawerLayoutService } from './../../../../../services/layout/drawer-layout.service';

@Component({
  selector: 'app-mdc-maua-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class MauaHeaderComponent {

  constructor(
    private drawerLayoutService: DrawerLayoutService,
  ) { }

  onDrawerToggle() {
    this.drawerLayoutService.toggle();
  }

}
