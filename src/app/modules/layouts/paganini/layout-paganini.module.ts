import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidenavService } from './../../../services/layout/sidenav.service';

import { LayoutPaganiniComponentsModule } from './components/layout-paganini-components.module';
import { LayoutPaganiniPageComponent } from './pages/layout-paganini-page/layout-paganini-page.component';

@NgModule({
    declarations: [
        LayoutPaganiniPageComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        LayoutPaganiniComponentsModule,
    ],
    providers: [
        SidenavService
    ],
    exports: [
        LayoutPaganiniPageComponent,
    ]
})
export class LayoutPaganiniModule { }
