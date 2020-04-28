import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

//LE IMPORTO EL SERVICIO
import { ActivatedRoute } from '@angular/router';
import { PeliServiceService } from '../peli-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  slug: string;
  movie: any = {};

  constructor(private _sanitizer: DomSanitizer, private _router: Router, private activatedRoute: ActivatedRoute, private _movieService: PeliServiceService, private _location: Location) {
    this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug'];

      this._movieService.getMovieById(this.slug).subscribe(datos => {
        this.movie = datos;
        console.log(this.movie)
      })
    })
  }

  ngOnInit() {
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(https://image.tmdb.org/t/p/w1280/${image})`);
  }

  verPelicula() {
    this._router.navigate(['verpelicula']);
  }

  iraVideoPeli(ytb: string) {
    this._router.navigate(['verpelicula', ytb])
  }

  volverPelis() {
    this._location.back();
  }
  
    

}
