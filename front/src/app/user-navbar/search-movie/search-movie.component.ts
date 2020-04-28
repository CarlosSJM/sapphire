import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarPeli(search) {
    console.log(search.value.pelicula);
    this._router.navigate(['peliculabuscada', search.value.pelicula])
  }

}
 