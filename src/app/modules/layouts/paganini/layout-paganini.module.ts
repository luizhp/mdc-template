import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    providers: [],
    exports: [
        LayoutPaganiniPageComponent,
    ]
})
export class LayoutPaganiniModule { }
