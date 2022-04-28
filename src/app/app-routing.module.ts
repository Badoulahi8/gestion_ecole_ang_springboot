import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Components/accueil/accueil.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: AccueilComponent},
      { path: 'home',  redirectTo: '', pathMatch: 'full'}
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
