import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser'

//LE IMPORTO EL SERVICIO
import { ActivatedRoute } from '@angular/router';
import { PeliServiceService } from '../peli-service.service';

@Component({
  selector: 'app-verpelicula', 
  templateUrl: './verpelicula.component.html',
  styleUrls: ['./verpelicula.component.css']
})
export class VerpeliculaComponent implements OnInit {

  ytb : string;
  traillers : any = {};
  key : string;

  youtubeUrl = 'https://www.youtube.com/embed/';
  options : string= '?autoplay=1&mute=1&modestbranding=1&showinfo=0';

  urlV : string;

  constructor(private _location: Location, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private _movieService: PeliServiceService) {
    this.activatedRoute.params.subscribe(params => {
      this.ytb = params['ytb'];

      this._movieService.getVideoMovie(this.ytb).subscribe(datos => {
        this.traillers = datos;
        this.key = this.traillers.results[0].key;

        this.urlV = this.youtubeUrl + this.key;
        console.log(this.urlV);
      })
      
    })
  }

  ngOnInit() {

  }

  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl + this.key + this.options);
  }

  volver() {
    this._location.back();
  }
}