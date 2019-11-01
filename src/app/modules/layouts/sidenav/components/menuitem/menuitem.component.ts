import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdc-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input('menu') menuStructure;

  constructor() { }

  ngOnInit() {

    console.log('menu');
    console.log(this.menuStructure);

  }

}
