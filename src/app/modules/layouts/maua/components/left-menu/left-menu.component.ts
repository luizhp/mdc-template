import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from './../../../../../animations/layouts/maua.animations';
import { SidenavService } from 'src/app/services/layout/sidenav.service';


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState
    console.log('sideNavState 1');
    console.log(this.sideNavState);
    setTimeout(() => {
      console.log('sideNavState 2');
      console.log(this.sideNavState);
        this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}