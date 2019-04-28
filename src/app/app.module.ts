import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import {   ReactiveFormsModule } from '@angular/forms';
import { TimeStampPipe }  from './pipes/ts.pipe';
import { SafePipe }  from './pipes/safe.pipe';

@NgModule({
  declarations: [
    TimeStampPipe,
    SafePipe,
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NotFoundComponent,
    ServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
