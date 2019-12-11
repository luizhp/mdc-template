import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LayoutModule } from '@angular/cdk/layout';

//import { SharedComponentsModule } from './components/shared-components.module';

import { LayoutBaseModule } from './modules/layouts/base/layout-base.module';
import { LayoutMauaModule } from './modules/layouts/maua/pages/layout-maua.module';

import { PrettyPrintPipe } from './pipes/pretty-print.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrettyPrintPipe
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // FlexLayoutModule,
    AppRoutingModule,
    //LayoutModule,
    //SharedComponentsModule,
    LayoutBaseModule,
    LayoutMauaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
