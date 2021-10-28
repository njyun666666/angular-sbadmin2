import { OtherComponent } from './other/other.component';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import { ColorsComponent } from './colors/colors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesComponent } from './utilities.component';

const routes: Routes = [
  {
    path: '', component: UtilitiesComponent,
    children: [
      { path: 'colors', component: ColorsComponent },
      { path: 'borders', component: BordersComponent },
      { path: 'animations', component: AnimationsComponent },
      { path: 'other', component: OtherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
