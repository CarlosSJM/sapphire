import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: [
    './aside.component.css',
    '../../../assets/css/fontawesome.min.css',
    '../../../assets/css/light.min.css'
  ]
})
export class AsideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getUsersPanel() {
    this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/dashboard/users']));
  }

}
