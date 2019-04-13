import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StationsListComponent } from '../stations-list/stations-list.component';
import { StationsMapComponent } from '../stations-map/stations-map.component';
import { CitiesListComponent } from '../cities-list/cities-list.component';



const routes: Routes = [
  { path: 'list', component: StationsListComponent },
  { path: 'map', component: StationsMapComponent },
  { path: 'cities', component: CitiesListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class StationsRoutingModule { }
