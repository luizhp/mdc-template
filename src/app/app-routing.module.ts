import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/templates/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: HomeComponent
  }
];

// const appRoutes: Routes = [
//   {
//     path: 'grids',
//     loadChildren: () => import('./modules/grids/grids.module').then(m => m.GridsModule),
//   },
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'grids'
//   },
//   {
//     path: '**',
//     pathMatch: 'full',
//     redirectTo: 'grids'
//   }
// ];

@NgModule({
  imports: [
    RouterModule
      .forRoot(appRoutes,
        { useHash: true }
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
