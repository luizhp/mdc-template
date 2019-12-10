import { Component } from '@angular/core';
import { SidenavService } from '../../../../../../services/layout/sidenav.service';
import { onMainContentChange } from '../../../../../../animations/layouts/maua.animations';

@Component({
  selector: 'app-mdc-maua-sidenav-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [onMainContentChange]
})
export class MauaSidenavContentComponent {

  public onSideNavChange: boolean;

  constructor(private sideNavService: SidenavService) {
    this.sideNavService
      .sideNavState$
      .subscribe(res => {
        console.log(res)
        this.onSideNavChange = res;
      });
  }

}
