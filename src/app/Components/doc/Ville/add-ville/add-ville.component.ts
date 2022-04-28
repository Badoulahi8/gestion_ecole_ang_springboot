import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ville } from '../shared/model/ville';
import { VilleService } from '../shared/service/ville.service';

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.scss']
})
export class AddVilleComponent implements OnInit {

  ville: Ville = new Ville() ;
  constructor(
    private serviceVille: VilleService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.createVille();
  }

  createVille(){
    this.serviceVille.createVille(this.ville).subscribe(data => {
      this.router.navigate(["/villes"])
    },
    error => {
      console.log(error)
    }
    )
  }

}
