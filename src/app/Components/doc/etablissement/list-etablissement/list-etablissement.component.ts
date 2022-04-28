import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../shared/model/etablissement';
import { EtablissementServiceService } from '../shared/service/etablissement-service.service';

@Component({
  selector: 'app-list-etablissement',
  templateUrl: './list-etablissement.component.html',
  styleUrls: ['./list-etablissement.component.scss']
})
export class ListEtablissementComponent implements OnInit {

  etablissements : Etablissement[] =  [];
  constructor(
    private etablissementService: EtablissementServiceService
  ) { }

  ngOnInit(): void {
    this.getVillesEtablissement() ;
  }

  private getVillesEtablissement(){
    this.etablissementService.getEtablissementsList().subscribe(data => {
      this.etablissements = data ;
    });
  }

}
