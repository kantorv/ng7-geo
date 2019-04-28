import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsRoutingModule } from './stations-routing/stations-routing.module';
import { MaterialImportsModule } from './../material-imports/material-imports.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapViewComponent } from './map-view/map-view.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { PlacesListItemComponent } from './places-list-item/places-list-item.component';


@NgModule({
  declarations: [
    StationsListComponent,
    StationsMapComponent,
    MapViewComponent,
    CitiesListComponent,
    PlacesListItemComponent
],
  imports: [
    CommonModule,
    StationsRoutingModule,
    MaterialImportsModule,
    FormsModule ,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class StationsModule { }
