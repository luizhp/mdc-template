import { Component, Input } from '@angular/core';
import { Menuitem } from './../../../../../../models/layouts/menuitem.interface';

@Component({
  selector: 'app-mdc-sidenav-drawer-menu-items',
  templateUrl: './drawer-menu-items.component.html',
  styleUrls: ['./drawer-menu-items.component.css']
})
export class DrawerMenuItemsComponent {

  @Input() menuStructure: Menuitem[];

  constructor() { }

}
