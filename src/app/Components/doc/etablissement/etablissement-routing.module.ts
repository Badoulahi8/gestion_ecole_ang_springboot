import { NgModule } from '@angular/core';
import { ListEtablissementComponent } from './list-etablissement/list-etablissement.component';
import { RouterModule } from '@angular/router';
import { AddEtablissementComponent } from './add-etablissement/add-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'etablissements',  component: ListEtablissementComponent},
      { path: 'etablissements/list',  redirectTo: 'etablissements', pathMatch: 'full'},
      { path: 'etablissements/add',  component: AddEtablissementComponent},
      { path: 'etablissements/update/:id',  component: UpdateEtablissementComponent}
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class EtablissementRoutingModule { }
