import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDropdownModule, NgbModalModule, NgbModule, NgbNavModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NavTopComponent } from './shared/nav-top/nav-top.component';
import { LibraryPageComponent } from './screens/library-page/library-page.component';
import { BibliothecaPageComponent } from './screens/bibliotheca-page/bibliotheca-page.component';
import { ContactPageComponent } from './screens/contact-page/contact-page.component';
import { NavBottomComponent } from './shared/nav-bottom/nav-bottom.component';
import { CarouselSlidingComponent } from './shared/carousel-sliding/carousel-sliding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavTopComponent,
    LibraryPageComponent,
    BibliothecaPageComponent,
    ContactPageComponent,
    NavBottomComponent,
    CarouselSlidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule,
    NgbModalModule,
    NgbNavModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
