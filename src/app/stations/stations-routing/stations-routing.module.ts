import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StationsListComponent } from '../stations-list/stations-list.component';

const routes: Routes = [
  { path: 'list', component: StationsListComponent }
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
