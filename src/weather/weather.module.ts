import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './weather-display.component';
import { PrefixPipe } from './pipes';
import { IfLeftDirective } from './directives/if-either.directive';
import { IfRightDirective } from './directives/if-either.directive';

const components = [WeatherDisplayComponent, PrefixPipe, IfLeftDirective, IfRightDirective];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [...components],
  exports: [...components]
})
export class WeatherModule {}
