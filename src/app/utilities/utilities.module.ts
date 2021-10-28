import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { UtilitiesComponent } from './utilities.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';


@NgModule({
  declarations: [
    UtilitiesComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    ThemeModule
  ]
})
export class UtilitiesModule { }
