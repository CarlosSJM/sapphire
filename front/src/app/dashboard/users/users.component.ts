import {Component, OnInit, AfterViewInit, AfterContentInit, ElementRef, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { FetchUsersService } from "../../services/fetch-users.service";
import { Renderer2, Inject, Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { format } from "./js/date.js";
/*import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";*/

// import { DynamicScriptLoaderServiceService } from "../../dynamic-script-loader-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild('panel') panel: ElementRef;
  @ViewChild('dashboard') dashboard: ElementRef;
  // @ViewChildren('editButton') editButton: ElementRef;
  @ViewChildren('editButton') editButtons: QueryList<ElementRef>;
  // @ViewChild('id') id: ElementRef;
  // @ViewChildren('deleteButton') deleteButton: ElementRef;
  @ViewChildren('deleteButton') deleteButtons: QueryList<ElementRef>;
  @ViewChild('close') closeButton: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('userData') userData: ElementRef;
  timeDiff;
  keys = Object.keys;
  values = Object.values;
  users = [];
  user;
  userModal;
  userId: string;
  currentPage = 1;
  pageSize = 4;
  /* variables para datos del usuario */
  name: string;
  surname: string;
  lastname: string;
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  direccion: string;
  email: string;
  fechaNacimiento: Date;
  fechaAlta: Date;

  constructor(private fetchUsersService: FetchUsersService, private router: Router, private activatedRoute: ActivatedRoute, private renderer: Renderer2, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
    this.getUsers();
    format();
  }

  ngAfterViewInit() {

    setTimeout(()=>{

      /*this.editButton.nativeElement.addEventListener('click', (e)=>{
        console.log(e.target);
        this.userId = e.target.parentNode.parentNode.getAttribute('id');
        this.user = this.getUserById(this.userId);
        this.panel.nativeElement.style.opacity = 0.6;
        this.panel.nativeElement.style.zIndex = -1;
        this.modal.nativeElement.style.display = "flex";
        this.modal.nativeElement.style.zIndex = 1;
        this.modal.nativeElement.style.opacity = 1;
        this.modal.nativeElement.style.backgroundColor = "rgb(101, 102, 103)";
        this.renderer.appendChild(this.panel.nativeElement, this.modal.nativeElement);
      });*/

      /*console.log(this.editButtons.forEach(button=>{
        console.log(button);
      }));*/
      this.editButtons.forEach(button=>{
        button.nativeElement.addEventListener('click', (e)=>{
          // console.log(e.target.parentNode.parentNode.getAttribute('id'));
          this.userId = e.target.parentNode.parentNode.getAttribute('id');
          this.user = this.getUserById(this.userId);
          this.panel.nativeElement.style.opacity = 0.6;
          this.panel.nativeElement.style.zIndex = -1;
          this.modal.nativeElement.style.display = "flex";
          this.modal.nativeElement.style.zIndex = 1;
          this.modal.nativeElement.style.opacity = 1;
          // this.modal.nativeElement.style.backgroundColor = "black";
          this.renderer.appendChild(this.panel.nativeElement, this.modal.nativeElement);
        });
      });

      this.deleteButtons.forEach((button)=>{
        button.nativeElement.addEventListener('click', (e)=>{
          this.userId = e.target.parentNode.parentNode.getAttribute('id');
          this.deleteUserById(this.userId);
        });
      });

      this.closeButton.nativeElement.addEventListener('click', (e)=>{
        this.modal.nativeElement.style.display = "none";
        this.panel.nativeElement.style.opacity = 1;
        this.panel.nativeElement.style.zIndex = 1;
      });

    }, 500);
  }

  /*openModal() {
    this.editButton.nativeElement.addEventListener('click', (e)=>{
      console.log();
      this.panel.nativeElement.style.opacity = 0.6;
      this.panel.nativeElement.style.zIndex = -1;
      this.modal.nativeElement.style.display = "flex";
      this.modal.nativeElement.style.zIndex = 1;
      this.modal.nativeElement.style.opacity = 1;
      this.modal.nativeElement.style.backgroundColor = "rgb(101, 102, 103)";
      this.renderer.appendChild(this.panel.nativeElement, this.modal.nativeElement);
    });
  }*/

  getUsers() {
    this.fetchUsersService.getUsers().subscribe(data => {

      data['data'].forEach(json => {
        this.timeDiff = Math.abs(new Date().getTime() - new Date(json.fecha_alta).getTime());
        this.timeDiff = Math.ceil(this.timeDiff / (1000*3600*24));
        if(new Date(json.fecha_alta).getMonth() < 10){
          if(new Date(json.fecha_alta).getDay() < 10){
            json.fecha_alta = new Date(json.fecha_alta).getFullYear() + '-0' + new Date(json.fecha_alta).getMonth() + '-0' + new Date(json.fecha_alta).getDay();
          }
        }else if(new Date(json.fecha_alta).getMonth() > 10 && new Date(json.fecha_alta).getDay() > 10){
          json.fecha_alta = new Date(json.fecha_alta).getFullYear() + '-' + new Date(json.fecha_alta).getMonth() + '-' + new Date(json.fecha_alta).getDay();
        }
        json.timeDiff = this.timeDiff;
        this.users.push(json);
        return this.users;
      });
    });
  }

  getUserById(id) {
    this.fetchUsersService.getUserById(id).subscribe(data=>{
      // console.log(data['data'][0]);
      this.user = data['data'][0];
      return this.user;
    });
  }

  deleteUserById(id){
    this.fetchUsersService.deleteUserById(id).subscribe(data=>{

      if(data['data'].affectedRows === 1){

        this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(()=>
          this.router.navigate(['/dashboard/users']));
      }
    });
  }

  getUserByName(form: any) {
    // console.log(form.value.nombre);
    this.name = form.value.nombre.split(' ')[0];
    this.surname = form.value.nombre.split(' ')[1];
    this.lastname = form.value.nombre.split(' ')[2];
    // console.log(this.name, this.surname);
    this.fetchUsersService.getUserByName(this.name, this.surname, this.lastname).subscribe(data=>{
      // console.log(data['data']);
      this.user = data['data'];

      this.timeDiff = Math.abs(new Date().getTime() - new Date(this.user.fecha_alta).getTime());
      this.timeDiff = Math.ceil(this.timeDiff / (1000*3600*24));
      if(new Date(this.user.fecha_alta).getMonth() < 10){
        if(new Date(this.user.fecha_alta).getDay() < 10){
          this.user.fecha_alta = new Date(this.user.fecha_alta).getFullYear() + '-0' + new Date(this.user.fecha_alta).getMonth() + '-0' + new Date(this.user.fecha_alta).getDay();
        }
      }else if(new Date(this.user.fecha_alta).getMonth() > 10 && new Date(this.user.fecha_alta).getDay() > 10){
        this.user.fecha_alta = new Date(this.user.fecha_alta).getFullYear() + '-' + new Date(this.user.fecha_alta).getMonth() + '-' + new Date(this.user.fecha_alta).getDay();
      }
      this.user.timeDiff = this.timeDiff;
      // console.log(this.user);
      return this.user;
    });
  }

  suggest(event) {
    console.log(event);
  }

  saveUser(form: any) {
    // console.log(form.value);
    this.id = form.value.id;
    this.nombre = form.value.nombre;
    this.apellidos = form.value.apellidos;
    this.dni = form.value.dni;
    this.direccion = form.value.dir;
    this.email = form.value.email;
    this.fechaNacimiento = form.value.fechaNacimiento;

    this.fetchUsersService.putUser(this.id, this.nombre, this.apellidos, this.dni, this.direccion, this.email, this.fechaNacimiento).subscribe(data=>{
      // console.log(data['data']);
      if(data['data'].affectedRows === 1){

        this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(()=>
          this.router.navigate(['/dashboard/users']));
      }
    });
  }
}
