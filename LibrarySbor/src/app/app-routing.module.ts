import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { LibraryPageComponent } from './screens/library-page/library-page.component';
import { BibliothecaPageComponent } from './screens/bibliotheca-page/bibliotheca-page.component';
import { ContactPageComponent } from './screens/contact-page/contact-page.component';

const routes: Routes = [

  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'Library',
    component: LibraryPageComponent
  },

  {
    path: 'Bibliotheca',
    component: BibliothecaPageComponent
  },

  {
    path: 'Contact',
    component: ContactPageComponent
  },

  {
    path: '**',
    component: HomePageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
