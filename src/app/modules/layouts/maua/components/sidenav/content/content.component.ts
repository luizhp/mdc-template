import { Component, OnInit } from '@angular/core';

import { MaterialModule } from './../../../../material.module';

import { SidenavService } from '../../../../../../services/layout/sidenav.service';
import { onMainContentChange } from '../../../../../../animations/layouts/maua.animations';

@Component({
  selector: 'mdc-maua-sidenav-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [onMainContentChange]
})
export class MauaSidenavContentComponent implements OnInit {

  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe(res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit() {
  }

}
