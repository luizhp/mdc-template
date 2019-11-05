import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from './../../../../../../animations/layouts/paganini.animations';
import { SidenavService } from './../../../../../../services/layout/sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'mdc-sidenav-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  animations: [
    onSideNavChange,
    animateText
  ]
})
export class DrawerComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    { name: 'Inbox', link: 'some-link', icon: 'inbox' },
    { name: 'Starred', link: 'some-link', icon: 'star' },
    { name: 'Send email', link: 'some-link', icon: 'send' },
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}