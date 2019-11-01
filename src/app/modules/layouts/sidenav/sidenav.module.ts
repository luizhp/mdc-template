import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { SidenavPageComponent } from './pages/sidenav/sidenav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { SidenavmenubarComponent } from './components/sidenavmenubar/sidenavmenubar.component';
import { SidenavtoolbarComponent } from './components/sidenavtoolbar/sidenavtoolbar.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavPageComponent,
    SidenavbarComponent,
    SidenavmenubarComponent,
    SidenavtoolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  exports: [
    SidenavPageComponent
  ]
})
export class LayoutsSidenavModule { }
