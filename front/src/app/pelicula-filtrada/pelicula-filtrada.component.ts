import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeliServiceService } from '../peli-service.service';

@Component({
  selector: 'app-pelicula-filtrada',
  templateUrl: './pelicula-filtrada.component.html',
  styleUrls: ['./pelicula-filtrada.component.css']
})
export class PeliculaFiltradaComponent implements OnInit {

  filter: {};
  busquedas: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _movieService: PeliServiceService, private _router: Router) {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params.filter);
      this.filter = params.filter;

      this._movieService.pintarQuery(this.filter).subscribe(datos => {
        this.busquedas = [];
        datos['results'].forEach(element => {
          if (element.backdrop_path !== null) {
            this.busquedas.push(element);
          }
        });
      })
    })
  }

  ngOnInit() {
  } 

  iraPeliculaBuscada(slug: string) {
    this._router.navigate(['pelicula', slug])
  }

}
