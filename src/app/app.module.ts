import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LayoutModule } from '@angular/cdk/layout';

//import { SharedComponentsModule } from './components/shared-components.module';

import { LayoutBaseModule } from './modules/layouts/base/layout-base.module';
import { LayoutPaganiniModule } from './modules/layouts/paganini/layout-paganini.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AppRoutingModule,
    //LayoutModule,
    //SharedComponentsModule,
    LayoutBaseModule,
    LayoutPaganiniModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
