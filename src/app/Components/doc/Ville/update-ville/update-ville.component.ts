import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from '../shared/model/ville';
import { VilleService } from '../shared/service/ville.service';

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.scss']
})
export class UpdateVilleComponent implements OnInit {

  ville: Ville = new Ville() ;
  id: number = 0 ;

  constructor(
    private villeService : VilleService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.villeService.getVille(this.id).subscribe( data => {
      this.ville = data ;
    },
    error => {
      console.log(error)
    })
  }

  onSubmit(){
    this.updateVille() ;
  }
  updateVille(){
    this.villeService.updateVille(this.id, this.ville).subscribe(data =>{
      this.router.navigate(['/villes']) ;
    },
    error =>{
      console.log(error) ;
    })
  }



}
