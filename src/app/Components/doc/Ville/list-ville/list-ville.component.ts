import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ville} from '../shared/model/ville';
import { VilleService } from '../shared/service/ville.service';
@Component({
  selector: 'app-list-ville',
  templateUrl: './list-ville.component.html',
  styleUrls: ['./list-ville.component.scss']
})
export class ListVilleComponent implements OnInit {

  villes: Ville[] = [];

  constructor( private villeService: VilleService, private router: Router) { }

  ngOnInit(): void {
    this.getListVille() ;
  }
  updateVille(id: number){
    this.router.navigate(['/villes/update', id])
  }

  private getListVille(){
    this.villeService.getVillesList().subscribe(data => {
      this.villes = data ;
    });
  }

  deleteVille(id: number){
    if(confirm("Etes-vous sùre de vouloir supprimer cette ville ? ")) {
      this.villeService.deleteVille(id).subscribe(data =>{
      this.getListVille() ;
    },
    error => {
      console.log(error) ;
    }) ;
    }
   }
}
