//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpacerComponent } from './spacer/spacer.component';


@NgModule({
    declarations: [
        SpacerComponent
    ],
    imports: [
        CommonModule,
        //BrowserModule,
        // BrowserAnimationsModule,
        // RouterModule,
        // MatToolbarModule,
        // MatIconModule,
        // MatSidenavModule,
        // MatListModule,
        // MatButtonModule
    ],
    providers: [],
    exports: [
        SpacerComponent
    ]
})
export class LayoutsModule { }
