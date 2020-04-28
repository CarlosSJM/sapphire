import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.getToken()
  })
};*/

@Injectable({
  providedIn: 'root'
})
export class FetchUsersService {

  token: string;
  // urlUsers = `http://127.0.0.1:3000/users?authorization=${this.getToken()}`;
  urlUsers = `http://127.0.0.1:3000/users`;
  urlUser = `http://127.0.0.1:3000/user`;
  urlRegister = `http://127.0.0.1:3000/auth/register`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  };

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any[]>(this.urlRegister, user);
  }

  getUsers() {
    // console.log(this.http.get<object[]>(this.url));
    return this.http.get<any[]>(this.urlUsers, this.httpOptions);
  }

  getUserById(id){
    // this.urlUser = `${this.urlUser}/${id}`;
    console.log(`${this.urlUser}/${id}`);
    return this.http.get<any[]>(`${this.urlUser}/${id}`, this.httpOptions);
  }

  getUserByName(name, surname, lastname) {
    console.log(`${this.urlUser}/${name}/${surname} ${lastname}`);
    return this.http.get(`${this.urlUser}/${name}/${surname} ${lastname}`, this.httpOptions);
  }

  putUser(id, nombre, apellidos, dni, direccion, email, fechaNacimiento) {
    //this.urlUser = `${this.urlUser}/${id}`;
    console.log(`${this.urlUser}/${id}`);
    const user = {
      nombre: nombre,
      apellidos: apellidos,
      dni: dni,
      direccion: direccion,
      email: email,
      fechaNacimiento: fechaNacimiento
    };
    console.log(user.fechaNacimiento);
    return this.http.put<object[]>(`${this.urlUser}/${id}`, user, this.httpOptions);
  }

  deleteUserById(id){
    return this.http.delete<object[]>(`${this.urlUser}/${id}`, this.httpOptions);
  }

  getToken() {
    this.token = localStorage.getItem('access_token');
    return this.token;
  }
}
