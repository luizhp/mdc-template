import { Component, OnInit, Input } from '@angular/core';

import { DrawerLayoutService } from './../../../../../services/layout/drawer-layout.service';

@Component({
  selector: 'mdc-maua-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class MauaHeaderComponent implements OnInit {

  constructor(
    private _drawerLayoutService: DrawerLayoutService,
  ) { }

  ngOnInit() {
  }

  onDrawerToggle() {
    console.log('HEADER click menu to drawer toggle');
    this._drawerLayoutService.toggle();
  }

}