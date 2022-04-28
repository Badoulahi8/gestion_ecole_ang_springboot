import { NgModule } from '@angular/core';
import { AddEtablissementComponent } from './add-etablissement/add-etablissement.component';
import { ListEtablissementComponent } from './list-etablissement/list-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EtablissementRoutingModule } from './etablissement-routing.module';



@NgModule({
  declarations: [
    ListEtablissementComponent,
    AddEtablissementComponent,
    UpdateEtablissementComponent
  ],
  imports: [
    SharedModule,
    EtablissementRoutingModule,
  ]
})
export class EtablissementModule { }
