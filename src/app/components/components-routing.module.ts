import { CardsComponent } from './cards/cards.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'cards', component: CardsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
