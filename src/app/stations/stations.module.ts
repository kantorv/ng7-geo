import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsRoutingModule } from './stations-routing/stations-routing.module';
import { MaterialImportsModule } from './../material-imports/material-imports.module';
import { TimeStampPipe }  from '../pipes/ts.pipe';




@NgModule({
  declarations: [
    StationsListComponent,
    TimeStampPipe
],
  imports: [
    CommonModule,
    StationsRoutingModule,
    MaterialImportsModule
  ]
})
export class StationsModule { }
