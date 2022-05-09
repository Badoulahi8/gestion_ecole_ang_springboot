import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etablissement } from '../shared/model/etablissement';
import { EtablissementService } from '../shared/service/etablissement.service';

@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.scss']
})
export class UpdateEtablissementComponent implements OnInit {

  etablissement: Etablissement = new Etablissement()
  id: number  = 0 ;
  constructor(
    private etablissementService: EtablissementService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.etablissementService.getEtablissement(this.id).subscribe( data => {
      this.etablissement = data ;
    },
    error => {
      console.log(error)
    })
  }

}
