import { NgModule } from '@angular/core';
import { PrettyPrintPipe } from '../../pipes/pretty-print.pipe';

import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        PrettyPrintPipe,
        HomeComponent
    ],
    imports: [
    ],
    exports: [
        HomeComponent
    ]
})
export class TemplatesModule { }
