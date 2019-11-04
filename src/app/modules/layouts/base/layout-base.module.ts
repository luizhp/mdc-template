import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutBaseComponentsModule } from './components/layout-base.components.module';
import { LayoutBasePageComponent } from './pages/layout-base-page/layout-base-page.component';


@NgModule({
    declarations: [
        LayoutBasePageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        LayoutBaseComponentsModule,
    ],
    providers: [],
    exports: [
        LayoutBasePageComponent,
    ]
})
export class LayoutBaseModule { }
