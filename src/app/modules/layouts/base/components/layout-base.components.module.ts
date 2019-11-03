import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ContainerComponent } from './sidenav/container/container.component';
import { ContentToolbarComponent } from './sidenav/content-toolbar/content-toolbar.component';
import { DrawerToolbarComponent } from './sidenav/drawer-toolbar/drawer-toolbar.component';
import { DrawerMenuComponent } from './sidenav/drawer-menu/drawer-menu.component';
import { DrawerMenuItemsComponent } from './sidenav/drawer-menu-items/drawer-menu-items.component';

// import { SidenavContainerContentToolbarComponent } from './sidenav/xcontent/sidenav-container-content-toolbar/sidenav-container-content-toolbar.component';
// import { SidenavContainerSidenavToolbarComponent } from './sidenav/xsidenav/sidenav-container-sidenav-toolbar/sidenav-container-sidenav-toolbar.component';
// import { SidenavContainerSidenavMenuComponent } from './sidenav/xsidenav/sidenav-container-sidenav-menu/sidenav-container-sidenav-menu.component';
// import { SidenavContainerSidenavMenuItemsComponent } from './sidenav/xsidenav/sidenav-container-sidenav-menu-items/sidenav-container-sidenav-menu-items.component';

@NgModule({
    declarations: [
        // SidenavContainerContentToolbarComponent,
        // SidenavContainerSidenavToolbarComponent,
        // SidenavContainerSidenavMenuComponent,
        // SidenavContainerSidenavMenuItemsComponent,

        ContainerComponent,
        ContentToolbarComponent,
        DrawerToolbarComponent,
        DrawerMenuComponent,
        DrawerMenuItemsComponent,
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    providers: [],
    exports: [
        ContainerComponent,
        ContentToolbarComponent,
        DrawerToolbarComponent,
        DrawerMenuComponent,
        DrawerMenuItemsComponent,
    ]
})
export class LayoutBaseComponentsModule { }
