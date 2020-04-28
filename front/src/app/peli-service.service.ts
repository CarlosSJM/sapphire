import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliServiceService {

  url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fd9bfa52ee459c4167b706d3d210b3b1';
  urlTmd :string = 'https://api.themoviedb.org/3/';
  youtube : string = 'https://www.youtube.com/watch?v=';
  apiKey = '0e90da3d1d5b2554b95ae8e121183b3a';
  urlAll = 'https://api.themoviedb.org/3/discover/movie?api_key=${token}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${genre}${releaseDate}${lateDate}${cast}'


  sort_by = '&sort_by=';
  release_date_gte = '&release_date.gte=';
  release_date_lte = '&release_date.lte=';
  with_genres = '&with_genres=';





  constructor(private http: HttpClient) { }

  getMovies() {
    const moviedbUrl =  `${this.urlTmd}discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get<any[]>(moviedbUrl);
  }

  // RECIBO OBJETOS DE VIDEO
  getVideoMovie(movie_id) {
    const urlVideo = `${this.urlTmd}movie/${movie_id}/videos?api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlVideo);
  }

  getMoreMovies(i) {
    const moviedbUrl =  `${this.urlTmd}discover/movie?sort_by=popularity.desc&page=${i}&api_key=${this.apiKey}`;
    return this.http.get<any[]>(moviedbUrl);
  }

  getMovieById(movie_id) {
    const moviedbURL = `${this.urlTmd}movie/${movie_id}?api_key=${this.apiKey}`;
    return this.http.get<any[]>(moviedbURL);
  }

  searchMovie(searchInput) {
    const moviedbUrl =  `${this.urlTmd}search/movie?api_key=${this.apiKey}&query=${searchInput}`;
    return this.http.get<any[]>(moviedbUrl);
  }

  listGenders() {
    const moviedbUrl = `${this.urlTmd}genre/movie/list?api_key=${this.apiKey}`;
    return this.http.get<any[]>(moviedbUrl);
  }

  pintarAccion() {
    const urlSearchMovie = `${this.urlTmd}discover/movie?with_genres=28&api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlSearchMovie);
  }

  pintarPeli(texto_busqueda) {
    const urlSearchMovie = `${this.urlTmd}search/movie?api_key=${this.apiKey}&query=${texto_busqueda}`;
    return this.http.get<any[]>(urlSearchMovie);
  }

  pintarQuery(filter) {
    const urlSearchQuery = `${this.urlTmd}discover/movie?api_key=${this.apiKey}&language=es-ES${filter}`;
    return this.http.get<any[]>(urlSearchQuery);
  }
  
}


