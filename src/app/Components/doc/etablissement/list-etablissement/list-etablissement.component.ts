import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etablissement } from '../shared/model/etablissement';
import { EtablissementService } from '../shared/service/etablissement.service';

@Component({
  selector: 'app-list-etablissement',
  templateUrl: './list-etablissement.component.html',
  styleUrls: ['./list-etablissement.component.scss']
})
export class ListEtablissementComponent implements OnInit {

  etablissements : Etablissement[] =  [];

  constructor(
    private etablissementService: EtablissementService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVillesEtablissement() ;
  }

  private getVillesEtablissement(){
    this.etablissementService.getEtablissementsList().subscribe(data => {
      this.etablissements = data ;
    });
  }

  updateEtablissement(id: number){
    this.router.navigate(['/etablissements/update', id])
  }

  deleteEtablissement(id: number){
    console.log("Suppréssion eta :"+ id)
  }

}
