import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ville } from '../../Ville/shared/model/ville';
import { VilleService } from '../../Ville/shared/service/ville.service';
import { Etablissement } from '../shared/model/etablissement';
import { EtablissementService } from '../shared/service/etablissement.service';

@Component({
  selector: 'app-add-etablissement',
  templateUrl: './add-etablissement.component.html',
  styleUrls: ['./add-etablissement.component.scss']
})
export class AddEtablissementComponent implements OnInit {
  villes : Ville[] = []
  ville: Ville = new Ville() ;
  etablissement: Etablissement = new Etablissement() ;
  constructor(
    private villeService: VilleService,
    private etablissementService: EtablissementService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.villeService.getVillesList().subscribe(data =>
      {
        this.villes = data
      })
  }

  onSubmit(){
   this.createEtablissement();
  }

  createEtablissement(){

    this.etablissementService.createEtablissement(this.etablissement, this.etablissement.idVille).subscribe(data => {
      this.router.navigate(["/etablissements"])
    },
    error => {
      console.log(error)
    }
    )

  }

}
