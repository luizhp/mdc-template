import { Component } from '@angular/core';

import { SidenavService } from 'src/app/services/layout/sidenav.service';

import { onMainContentChange } from './../../../../../../animations/layouts/maua.animations';

@Component({
  selector: 'mdc-sidenav-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [onMainContentChange]
})
export class ContentComponent {

  name = 'Angular';
  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {

    this._sidenavService
      .sideNavState$
      .subscribe(
        res => {
          console.log(res)
          this.onSideNavChange = res;
        }
      );

  }

}