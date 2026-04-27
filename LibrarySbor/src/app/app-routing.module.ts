import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { HistoryPageComponent } from './screens/history-page/history-page.component';

const routes: Routes = [

  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'history',
    component: HistoryPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
