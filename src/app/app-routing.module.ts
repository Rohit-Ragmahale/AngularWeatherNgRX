import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, 
  { path: 'forecast/:zip', component: ForecastsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
