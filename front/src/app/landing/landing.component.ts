import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  iraRegistro() {
    this._router.navigate(['registro']);
  }

  iraLogin() {
    this._router.navigate(['loguser']);
  }

}
