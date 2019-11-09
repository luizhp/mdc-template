import { Component } from '@angular/core';
import { SidenavService } from './../../../../../services/layout/sidenav.service';
import { onMainContentChange } from './../../../../../animations/layouts/maua.animations';

@Component({
  selector: 'mdc-layout-maua-page',
  templateUrl: './layout-maua-page.component.html',
  styleUrls: ['./layout-maua-page.component.css'],
  animations: [onMainContentChange]
})
export class LayoutMauaPageComponent {

  //constructor() {}

  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe(res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

}
