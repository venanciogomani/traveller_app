import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TravellersListComponent } from './components/travellers/travellers-list/travellers-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddTravellerComponent } from './components/travellers/add-traveller/add-traveller.component';
import { ViewTravellerComponent } from './components/travellers/view-traveller/view-traveller.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: TravellersListComponent
  },
  {
    path: 'travellers',
    component: TravellersListComponent
  },
  {
    path: 'travellers/add',
    component: AddTravellerComponent
  },
  {
    path: 'travellers/view/:id',
    component: ViewTravellerComponent
  },
  {
    path: 'travellers/edit/:id',
    component: AddTravellerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TravellersListComponent,
    AddTravellerComponent,
    ViewTravellerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
