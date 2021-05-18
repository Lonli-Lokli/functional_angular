import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, WeatherModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
