import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './components/page1.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './redux/page1.reducer';

@NgModule({
  imports: [
    CommonModule,
    Page1RoutingModule,
    StoreModule.forFeature('countPage1', counterReducer)
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
