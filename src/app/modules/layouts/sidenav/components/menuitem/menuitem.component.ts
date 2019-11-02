import { Component, OnInit, Input } from '@angular/core';

import { Menuitem } from './../../../../../models/layouts/menuitem.interface';

@Component({
  selector: 'mdc-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input('menu') menuStructure: Menuitem[];

  constructor() { }

  ngOnInit() {

    console.log('menu');
    console.log(this.menuStructure);

  }

}
