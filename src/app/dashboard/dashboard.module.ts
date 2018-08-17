import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ DashboardComponent ]
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
