import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsRoutingModule } from './stations-routing/stations-routing.module';
import { MaterialImportsModule } from './../material-imports/material-imports.module';
import { TimeStampPipe }  from '../pipes/ts.pipe';
import {  SafePipe }  from '../pipes/safe.pipe';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { CardSampleComponent } from './card-sample/card-sample.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MapContainerComponent } from './map-container/map-container.component';
import { MapViewComponent } from './map-view/map-view.component';
import { CitiesListComponent } from './cities-list/cities-list.component';


@NgModule({
  declarations: [
    StationsListComponent,
    TimeStampPipe,
    SafePipe,
    StationsMapComponent,
    CardSampleComponent,
    MapContainerComponent,
    MapViewComponent,
    CitiesListComponent
],
  imports: [
    CommonModule,
    StationsRoutingModule,
    MaterialImportsModule,
     FormsModule ,
     ReactiveFormsModule,
     FlexLayoutModule,
     HttpClientModule
  ]
})
export class StationsModule { }
