import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchVideosService {

  token: string;
  urlVideos = 'http://127.0.0.1:3000/videos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  };
  constructor(private http: HttpClient) { }

  getToken() {
    this.token = localStorage.getItem('access_token');
    return this.token;
  }

  getVideos() {
    return this.http.get<object[]>(this.urlVideos, this.httpOptions);
  }

}
