import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { ZipEntryComponent } from './zip-entry/zip-entry.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import {HttpClientModule} from "@angular/common/http";
import { WeatherItemDirective } from './weather-item.directive';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CurrentConditionEffects } from './effects/current-condition.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { WeatherService } from './weather.service';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { ForecastEffects } from './effects/forecast.effects';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ZipEntryComponent,
    WeatherListComponent,
    WeatherItemDirective,
    ForecastsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([CurrentConditionEffects, ForecastEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
