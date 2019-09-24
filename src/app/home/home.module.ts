import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './redux/home.reducer';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('countHome', counterReducer)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
