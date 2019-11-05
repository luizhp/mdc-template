import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './sidenav/container/container.component';
import { ContentComponent } from './sidenav/content/content.component';
import { DrawerComponent } from './sidenav/drawer/drawer.component';
import { DrawerProfileComponent } from './sidenav/drawer-profile/drawer-profile.component';
import { DrawerMenuComponent } from './sidenav/drawer-menu/drawer-menu.component';
import { DrawerMenuItemsComponent } from './sidenav/drawer-menu-items/drawer-menu-items.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ContainerComponent,
        ContentComponent,
        DrawerComponent,
        DrawerProfileComponent,
        DrawerMenuComponent,
        DrawerMenuItemsComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        MaterialModule,
    ],
    providers: [],
    exports: [
        MaterialModule,
        HeaderComponent,
        ContainerComponent,
        ContentComponent,
        DrawerComponent,
        DrawerProfileComponent,
        DrawerMenuComponent,
        DrawerMenuItemsComponent,
    ]
})
export class LayoutPaganiniComponentsModule { }