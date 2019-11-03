import { Component, OnInit, Input } from '@angular/core';

import { Menuitem } from './../../../../../../models/layouts/menuitem.interface';

@Component({
  selector: 'mdc-sidenav-drawer-menu-items',
  templateUrl: './drawer-menu-items.component.html',
  styleUrls: ['./drawer-menu-items.component.css']
})
export class DrawerMenuItemsComponent implements OnInit {

  @Input('menu') menuStructure: Menuitem[];

  constructor() { }

  ngOnInit() {
  }

}
