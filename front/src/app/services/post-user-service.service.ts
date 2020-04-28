import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostUserServiceService {

  url = 'http://127.0.0.1:3000/auth/login';
  urlAdmin = 'http://127.0.0.1:3000/auth/admin';
  constructor(private http: HttpClient) { }

  postUser(user, password){
    return this.http.post<object[]>(this.url, {
      'user': user,
      'password': password
    }, httpOptions);
  }

  postAdmin(user, password){
    return this.http.post<object[]>(this.urlAdmin, {
      'user': user,
      'password': password
    }, httpOptions);
  }
}
