import { Component, OnInit } from '@angular/core';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: string;
  constructor() { }

  ngOnInit() {
  }

  getUserName() {
    const helper = new JwtHelperService();
    this.token = localStorage.getItem('access_token');
    // console.log(helper.decodeToken(this.token).user);
    return helper.decodeToken(this.token).user;
  }

}
