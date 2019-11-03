import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdc-sidenav-drawer-toolbar',
  templateUrl: './drawer-toolbar.component.html',
  styleUrls: ['./drawer-toolbar.component.css']
})
export class DrawerToolbarComponent implements OnInit {

  toolbarMenuTitle: string = 'Remark';

  constructor() { }

  ngOnInit() {
  }

}
