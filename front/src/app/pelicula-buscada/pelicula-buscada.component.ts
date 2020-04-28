import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeliServiceService } from '../peli-service.service';

@Component({
  selector: 'app-pelicula-buscada',
  templateUrl: './pelicula-buscada.component.html',
  styleUrls: ['./pelicula-buscada.component.css']
})
export class PeliculaBuscadaComponent implements OnInit {

  search: string;
  busquedas: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _movieService: PeliServiceService, private _router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      this.search = params['search'];

      this._movieService.pintarPeli(this.search).subscribe(datos => {
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

  iraPelicula(slug: string) {
    this._router.navigate(['pelicula', slug])
  }

}