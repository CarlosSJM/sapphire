import { Component, OnInit, Input } from '@angular/core';
import { PeliServiceService } from '../peli-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel-pelis',
  templateUrl: './carrusel-pelis.component.html',
  styleUrls: ['./carrusel-pelis.component.css']
})
export class CarruselPelisComponent implements OnInit {

  peliculas = [];
  

  constructor (private _movieService: PeliServiceService, private router: Router) {
   
    // @Output() private pedirDinero: EventEmitter<number>;
 
 
    // this._movieService.getMovies().subscribe(datos => {     // esta funcion podria tambien ir dentro al ngOnInit
    // this.peliculas = datos['results'];
    // console.log(this.peliculas);
//  });
    
    

}
  ngOnInit() {

    

  }


}
