import { NgModule } from '@angular/core';
import { ListVilleComponent } from './list-ville/list-ville.component';
import { AddVilleComponent } from './add-ville/add-ville.component';
import { SharedModule } from '../../../shared/shared.module';
import { VilleRoutingModule } from './ville-routing.module';
import { UpdateVilleComponent } from './update-ville/update-ville.component';



@NgModule({
  declarations: [
    ListVilleComponent,
    AddVilleComponent,
    UpdateVilleComponent
  ],
  imports: [
    SharedModule,
    VilleRoutingModule,
  ]
})
export class VilleModule { }
