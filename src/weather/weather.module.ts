import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './weather-display.component';
import { PrefixPipe } from './pipes';

const components = [WeatherDisplayComponent, PrefixPipe];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [...components],
  exports: [...components]
})
export class WeatherModule {}
