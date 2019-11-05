import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.modules';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutsModule,
    ],
    exports: [
        LayoutsModule,
    ],
})
export class SharedComponentsModule { }