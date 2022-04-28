import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListVilleComponent } from './list-ville/list-ville.component';
import { AddVilleComponent } from './add-ville/add-ville.component';
import { UpdateVilleComponent } from './update-ville/update-ville.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'villes',  component: ListVilleComponent},
      { path: 'villes/list',  redirectTo: 'villes', pathMatch: 'full'},
      { path: 'villes/add',  component: AddVilleComponent},
      { path: 'villes/update/:id',  component: UpdateVilleComponent}
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class VilleRoutingModule { }
