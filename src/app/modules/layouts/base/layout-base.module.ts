import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LayoutModule } from '@angular/cdk/layout';

// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';

import { LayoutBaseComponentsModule } from './components/layout-base.components.module';
import { LayoutBasePageComponent } from './pages/layout-base-page/layout-base-page.component';

@NgModule({
    declarations: [
        LayoutBasePageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        // BrowserAnimationsModule,
        // LayoutModule,
        // MatToolbarModule,
        // MatButtonModule,
        // MatSidenavModule,
        // MatIconModule,
        // MatListModule,
        LayoutBaseComponentsModule
    ],
    providers: [],
    exports: [
        LayoutBasePageComponent
    ]
})
export class LayoutBaseModule { }
