import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

//import { MaterialMauaModule } from './material.module';
import { MaterialModule } from '../../material.module';

//import { SidenavService } from './services/sidenav.service'
import { SidenavService } from '../../../../services/layout/sidenav.service';

//import { HelloComponent } from './hello.component';
import { HeaderComponent } from '../components/header/header.component'
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';
import { MauaSidenavContentComponent } from './../components/sidenav/content/content.component';

import { LayoutMauaPageComponent } from '../pages/layout-maua-page/layout-maua-page.component'


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    //HelloComponent,
    HeaderComponent,
    LeftMenuComponent,
    MauaSidenavContentComponent,
    LayoutMauaPageComponent,
  ],
  exports: [
    MauaSidenavContentComponent,
    LayoutMauaPageComponent,
  ],
  providers: [SidenavService]
})
export class LayoutMauaModule { }
