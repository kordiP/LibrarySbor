import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { HistoryPageComponent } from './screens/history-page/history-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
