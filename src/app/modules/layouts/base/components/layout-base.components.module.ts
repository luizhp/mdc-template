import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../../material.module';

import { ContainerComponent } from './sidenav/container/container.component';
import { ContentToolbarComponent } from './sidenav/content-toolbar/content-toolbar.component';
import { DrawerToolbarComponent } from './sidenav/drawer-toolbar/drawer-toolbar.component';
import { DrawerMenuComponent } from './sidenav/drawer-menu/drawer-menu.component';
import { DrawerMenuItemsComponent } from './sidenav/drawer-menu-items/drawer-menu-items.component';

@NgModule({
    declarations: [
        ContainerComponent,
        ContentToolbarComponent,
        DrawerToolbarComponent,
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
        ContainerComponent,
        ContentToolbarComponent,
        DrawerToolbarComponent,
        DrawerMenuComponent,
        DrawerMenuItemsComponent,
    ]
})
export class LayoutBaseComponentsModule { }