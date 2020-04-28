import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  public avatar = {
    img_src: "../../../assets/profile.jpg"
  }

  constructor(private _router: Router) { }

  ngOnInit() {

  }

  iraUser() {
    this._router.navigate(['/user']);
  }

  iraHome() {
    this._router.navigate(['home']);
  }
  
}
