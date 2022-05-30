import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from '../../Ville/shared/model/ville';
import { VilleService } from '../../Ville/shared/service/ville.service';
import { Etablissement } from '../shared/model/etablissement';
import { EtablissementService } from '../shared/service/etablissement.service';

@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.scss']
})
export class UpdateEtablissementComponent implements OnInit {
  villes : Ville[] = [] ;
  etablissement: Etablissement = new Etablissement()
  id: number  = 0 ;
  constructor(
    private etablissementService: EtablissementService,
    private villeService: VilleService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {


    this.id = this.route.snapshot.params['id'] ;
    this.etablissementService.getEtablissement(this.id).subscribe(data => {
      this.etablissement = data
    },
      error => {
        console.log(error);
      })

    this.villeService.getVillesListExceptId(this.etablissement.idVille).subscribe(data => {
      this.villes = data ;
    },
    error => {
      console.log(error)
    }
    )

  }


  onSubmit(){
    this.updateEtablissement();
   }

   updateEtablissement(){
     this.etablissementService.updateEtablissement(this.id, this.etablissement, this.etablissement.idVille).subscribe(data => {
       this.router.navigate(["/etablissements"])
     },
     error => {
       console.log(error)
     }
     )
   }

}
