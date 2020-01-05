import { MenuService } from './../../../../services/structure/menu.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
// import { SharedComponentsModule } from './../../../../components/shared-components.module';

import { SidenavService } from '../../../../services/layout/sidenav.service';
import { DrawerLayoutService } from './../../../../services/layout/drawer-layout.service';

// import { HelloComponent } from './hello.component';
import { MauaHeaderComponent } from '../components/header/header.component'
import { LeftMenuComponent } from '../components/left-menu/left-menu.component';
import { MauaFooterComponent } from '../components/footer/footer.component';
import { MauaSidenavContentComponent } from './../components/sidenav/content/content.component';

import { MauaSidenavDrawerProfileComponent } from './../components/sidenav/drawer/profile/profile.component';
import { MauaSidenavDrawerMenuComponent } from './../components/sidenav/drawer/menu/menu.component';
import { MauaSidenavDrawerMenuItemsComponent } from '../components/sidenav/drawer/menu-items/menu-items.component';

import { LayoutMauaPageComponent } from '../pages/layout-maua-page/layout-maua-page.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    // SharedComponentsModule
  ],
  declarations: [
    // HelloComponent,
    MauaHeaderComponent,
    LeftMenuComponent,
    MauaFooterComponent,
    MauaSidenavContentComponent,
    MauaSidenavDrawerProfileComponent,
    MauaSidenavDrawerMenuComponent,
    MauaSidenavDrawerMenuItemsComponent,
    LayoutMauaPageComponent,
  ],
  exports: [
    // SharedComponentsModule,
    MauaSidenavContentComponent,
    MauaSidenavDrawerProfileComponent,
    MauaSidenavDrawerMenuComponent,
    MauaSidenavDrawerMenuItemsComponent,
    LayoutMauaPageComponent,
  ],
  providers: [
    SidenavService,
    DrawerLayoutService,
    MenuService
  ]
})
export class LayoutMauaModule { }
