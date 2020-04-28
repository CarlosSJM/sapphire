import { Component, OnInit } from '@angular/core';
//
import { ActivatedRoute, Router } from '@angular/router';
import { PostUserServiceService } from "../services/post-user-service.service";

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.component.html',
  styleUrls: ['./logadmin.component.css']
})
export class LogadminComponent implements OnInit {

  user: String;
  password: String;
  constructor(private postUserService: PostUserServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  iraDashboard() {
    this.router.navigate(['dashboard']);
  }

  postAdmin(user, password) {
    this.user = user;
    this.password = password;
    const response = this.postUserService.postAdmin(this.user, this.password);
    response.subscribe(data =>{
      // console.log(data['data'][0].token);
      if (data['ok'] === true) {
        localStorage.setItem('access_token', data['data'][0].token);
        this.router.navigate(['/dashboard']);
      }
    })
  }

}
