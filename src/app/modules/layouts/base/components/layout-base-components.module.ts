import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';

import { BreakpointLayoutService } from './../../../../services/layout/breakpoint-layout.service';
import { DrawerLayoutService } from './../../../../services/layout/drawer-layout.service';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';

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
        SharedComponentsModule,
    ],
    providers: [
        BreakpointLayoutService,
        DrawerLayoutService,
    ],
    exports: [
        MaterialModule,
        SharedComponentsModule,
        ContainerComponent,
        ContentToolbarComponent,
        DrawerToolbarComponent,
        DrawerMenuComponent,
        DrawerMenuItemsComponent,
    ]
})
export class LayoutBaseComponentsModule { }
