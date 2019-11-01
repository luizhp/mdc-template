import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdc-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  toolbarMenuTitle: string = 'Remark';

  constructor() { }

  ngOnInit() {
  }

}
