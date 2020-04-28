import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from "../services/fetch-users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre: string;
  apellidos: string;
  password: string;
  dni: string;
  fechaNacimiento: Date;
  genero: string;
  creditCard: number;
  constructor(private fetchUsersService: FetchUsersService, private router: Router) { }

  ngOnInit() {
  }

  register(nombre, apellidos, password, dni, fechaNacimiento, genero, creditCard){
    // console.log(nombre, apellidos, password, dni, fechaNacimiento, genero, creditCard);
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.password = password;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero.toLowerCase();
    this.creditCard = creditCard;

    let user = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      password: this.password,
      dni: this.dni,
      email: "mail@domain.com",
      direccion: "C/ ",
      tarjeta_credito: this.creditCard,
      fecha_nacimiento: this.fechaNacimiento,
      sexo: this.genero
    };

    this.fetchUsersService.registerUser(user).subscribe(data=>{

      if(data['data'][0].affectedRows === 1){

        this.router.navigate(['/landing']);
      }
    });
  }

}

