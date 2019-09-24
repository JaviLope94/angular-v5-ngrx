import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { Page1HijaRoutingModule } from './page1-hija-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Page1HijaRoutingModule
  ],
  declarations: [ComponentComponent]
})
export class Page1HijaModule { }
