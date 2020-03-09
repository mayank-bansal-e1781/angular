import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackingListComponent } from './components/packing-list/packing-list.component';
import { CreatePackingListComponent } from './components/create-packing-list/create-packing-list.component';
import { SharedModule } from './shared.module';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 
import { AccordionModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
const appRoutes: Routes = [
  { path: '', component: PackingListComponent },
  { path: 'create/:id',      component: CreatePackingListComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PackingListComponent,
    CreatePackingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
