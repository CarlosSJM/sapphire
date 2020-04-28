import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostUserServiceService} from '../../services/post-user-service.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FetchUsersService} from '../../services/fetch-users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  email: String;
  password: String;

    token: string;
    urlUser = `http://127.0.0.1:3000/user`;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      })
  };

  constructor(private _router: Router, private postUserService: PostUserServiceService, private http: HttpClient, private fetchUsersService: FetchUsersService) {
  }

  ngOnInit() {
  }
  iraDatos(selector, visible) {
      let botonCambiarDatos = document.querySelector(selector);
      if (botonCambiarDatos != null) {
        botonCambiarDatos.style.display = visible ? 'block' : 'none';
      }
    }
    guardados() {
      alert('Datos modificados correctamente');
    }

  mostrarAlerta() {

    const opcion = confirm('¿Quieres dejar de disfrutar del streaming de Saphire?');
    if (opcion === true) {
      alert('Revisa tu correo, te hemos enviado un mensaje para cancelar tu cuenta');
    } else {
      alert('Gracias por tu confianza, sigue disfrutando de Saphire');
    }

  }

  postUser(email, password) {
    this.email = email;
    this.password = password;
    const response = this.postUserService.postUser(this.email, this.password);
    response.subscribe(data => {
      console.log(data);
      if (data['ok'] === true) {
        // ESTA LINEA DE LOCALSTORAGE ES LA QUE HE CREADO YO PARA PROBAR Y HE CAMBIADO HOME, PONIA DASHBOARD
        localStorage.setItem('access_token', data['data'][0].token);
        this._router.navigate(['/home']);
        alert('Tus datos han sido actualizados');
      }
      alert('Tus datos son incorrectos');
    });

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
