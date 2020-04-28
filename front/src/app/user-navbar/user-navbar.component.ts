import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PeliServiceService } from '../peli-service.service';

import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FetchUsersService } from '../services/fetch-users.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  sort_by = '&sort_by=';
  release_date_gte = '&release_date.gte=';
  release_date_lte = '&release_date.lte=';
  with_genres = '&with_genres=';
  

  token: string;
  urlUser = `http://127.0.0.1:3000/user`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  }

  public avatar = {
    img_src: "../assets/profile.jpg"
  }

  constructor(private _movieService: PeliServiceService, private _router: Router, private http: HttpClient, private fetchUsersService: FetchUsersService) { }

  ngOnInit() {
  }


  showFilters() {
    let filters = document.querySelector('.section-filters');
    filters.classList.remove('none');
    filters.classList.add('top');
  }

  closeMenu() {
    let filters = document.querySelector('.section-filters');
    filters.classList.add('none');
    filters.classList.remove('top');
  }

  iraHome() {
    this._router.navigate(['home']);
  }

  iraUser() {
    this._router.navigate(['user']);
  }


  queryMovie(filter) {
    console.log(filter.value);
    let val_gte = filter.value.from;
    console.log(val_gte);
    let val_genre = filter.value.genreMovie;
    console.log(val_genre);
    let f = filter.value.nation;
    //console.log(f);
    let val_sort = filter.value.order;
    console.log(val_sort);
    let val_lte = filter.value.until;
    console.log(val_lte);

    

    const filters = `${this.sort_by}${val_sort}&include_adult=false&include_video=false&page=1${this.release_date_gte}${val_gte}${this.release_date_lte}${val_lte}${this.with_genres}${val_genre}`;

    this._router.navigate(['peliculafiltrada', filters]);
  }



  getUserName() {
    const helper = new JwtHelperService();
    this.token = localStorage.getItem('access_token');
    return helper.decodeToken(this.token).user;
  }

  getToken() {
    this.token = localStorage.getItem('access_token');
    return this.token;
  }

}
