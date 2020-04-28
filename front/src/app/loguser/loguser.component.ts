import { Component, OnInit } from '@angular/core';
//
import { ActivatedRoute, Router } from '@angular/router';
import { PostUserServiceService } from "../services/post-user-service.service";

@Component({
  selector: 'app-loguser',
  templateUrl: './loguser.component.html',
  styleUrls: ['./loguser.component.css']
})
export class LoguserComponent implements OnInit {

  user: String;
  password: String;
  constructor(private postUserService: PostUserServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  
  postUser(user, password) {
    this.user = user;
    this.password = password;
    const response = this.postUserService.postUser(this.user, this.password);
    response.subscribe(data =>{
      console.log(data);
      if (data['ok'] === true) {
        // ESTA LINEA DE LOCALSTORAGE ES LA QUE HE CREADO YO PARA PROBAR Y HE CAMBIADO HOME, PONIA DASHBOARD
        localStorage.setItem('access_token', data['data'][0].token);
        this.router.navigate(['/home']);
      }
    });
  }






}
