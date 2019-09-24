import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './components/page1.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component
  },
  {
    path: 'page1hija',
    loadChildren: './page1-hija/page1-hija.module#Page1HijaModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1RoutingModule { }
