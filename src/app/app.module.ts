import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LayoutModule } from '@angular/cdk/layout';

//import { SharedComponentsModule } from './components/shared-components.module';

import { LayoutBaseModule } from './modules/layouts/base/layout-base.module';
import { LayoutPaganiniModule } from './modules/layouts/paganini/layout-paganini.module';
import { LayoutMauaModule } from './modules/layouts/maua/pages/layout-maua.module';

//import { AppMauaModule } from './modules/layouts/maua/app.module';
//import { LayoutMauaPageComponent } from './modules/layouts/maua/pages/layout-maua-page/layout-maua-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // FlexLayoutModule,
    AppRoutingModule,
    //LayoutModule,
    //SharedComponentsModule,
    LayoutBaseModule,
    LayoutPaganiniModule,
    LayoutMauaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
