import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';

import { LayoutsSidenavModule } from './modules/layouts/sidenav/sidenav.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LayoutsSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
