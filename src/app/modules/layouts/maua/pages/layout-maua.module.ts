import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
import { SharedComponentsModule } from './../../../../components/shared-components.module';

import { SidenavService } from '../../../../services/layout/sidenav.service';

//import { HelloComponent } from './hello.component';
import { HeaderComponent } from '../components/header/header.component'
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';
import { MauaSidenavContentComponent } from './../components/sidenav/content/content.component';

import { MauaSidenavDrawerProfileComponent } from './../components/sidenav/drawer/profile/profile.component';
import { MauaSidenavDrawerMenuComponent } from './../components/sidenav/drawer/menu/menu.component';

import { LayoutMauaPageComponent } from '../pages/layout-maua-page/layout-maua-page.component'


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    SharedComponentsModule
  ],
  declarations: [
    //HelloComponent,
    HeaderComponent,
    LeftMenuComponent,
    MauaSidenavContentComponent,
    MauaSidenavDrawerProfileComponent,
    MauaSidenavDrawerMenuComponent,
    LayoutMauaPageComponent,
  ],
  exports: [
    SharedComponentsModule,
    MauaSidenavContentComponent,
    MauaSidenavDrawerProfileComponent,
    MauaSidenavDrawerMenuComponent,
    LayoutMauaPageComponent,
  ],
  providers: [SidenavService]
})
export class LayoutMauaModule { }
