import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoldComponent } from './gold/gold.component';
import { LocationListComponent } from './location-list/location-list.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { LoginRegComponent } from './login-reg/login-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    LocationListComponent,
    ActivityListComponent,
    LoginRegComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
