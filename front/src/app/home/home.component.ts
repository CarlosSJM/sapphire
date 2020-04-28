import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { PeliServiceService } from '../peli-service.service';
import { Router } from '@angular/router';
import { FetchVideosService } from "../services/fetch-videos.service";
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public listaGenero = [];
  public generos = [];
  public peliculas = [];
  
  public imagenes_carrusel = [
    "../../assets/images/slider-home/aladdin.jpg",
    "../../assets/images/slider-home/elhijo.jpg",
    "../../assets/images/slider-home/jonhwick.jpg",
    "../../assets/images/slider-home/pokemon.jpg",
    "../../assets/images/slider-home/thepoisonrose.jpg",
    "../../assets/images/slider-home/vengadores.jpg",
  ]; 
  
  public contador = 0;
  public img = "../../assets/images/slider-home/elhijo.jpg";


  @ViewChild('video') video: ElementRef;
  @ViewChild('source') source: ElementRef;
  src: string;
  videos = [];
  constructor (private _movieService: PeliServiceService, private fetchVideosService: FetchVideosService, private router: Router) { }
  ngOnInit() {
    
    this._movieService.listGenders().subscribe(datos => {     
      this.listaGenero = datos;
      
      // this.generos = this.listaGenero['genres'];
      let a = this.listaGenero['genres'];
      //console.log(a)
       
      for (let i = 0; i < a.length; i ++) {
        if (a[i].name !== "Comedy" && a[i].name !== "Documentary" && a[i].name !== "History" && a[i].name !== "Music" && a[i].name !== "TV Movie" && a[i].name !== "Thriller" && a[i].name !== "War" && a[i].name !== "Western") {
          this.generos.push(a[i]);
        }
      }
      //console.log(this.generos)
    });

    let pagePelis =[];

    for (let i =1 ; i<=4 ; i++) { // i paginas x 20 pelis/paginas = 100 pelis if i = 5
      this._movieService.getMoreMovies(i).subscribe(datos => {     
        pagePelis = datos['results'];
        pagePelis.forEach(element => {
          this.peliculas.push(element);
        });
      });
    }

    this.getVideos();
  }

  getVideos() {
    this.fetchVideosService.getVideos().subscribe(data=>{
      //console.log(data);
      this.videos = data['data'];
      return this.videos;
    });
  }

  play(src) {
    console.log(src);
    // `http://127.0.0.1:3000/video/${src}`
    this.source.nativeElement.setAttribute('src', `http://127.0.0.1:3000/video/${src}`);
    this.video.nativeElement.load();
    this.video.nativeElement.play();
    // this.video.nativeElement.webkitRequestFullscreen();
  }

  irAtras() {
    if ( this.contador > 0 ){
        this.img = this.imagenes_carrusel[this.contador-1];
        this.contador--;
        } else {
        this.img = this.imagenes_carrusel[this.imagenes_carrusel.length - 1];
        this.contador = this.imagenes_carrusel.length -1;
        }
      return this.img;
    }

  irAdelante() {
    if (this.contador < this.imagenes_carrusel.length -1) {
      this.img = this.imagenes_carrusel[this.contador+1];
      this.contador++;
    } else {
      this.img = this.imagenes_carrusel[0];
      this.contador = 0;
    }
    return this.img;
  }

  selectGenre(genero) {
    let pelisGender = [];

    this.peliculas.forEach(element => {
      // console.log(element.genre_ids)
      // console.log(genero);
      // console.log(element.genre_ids);
      let arrGenders = element.genre_ids;
      // console.log(arrGenders)
      var check = false;
      check = arrGenders.includes(genero.id);
      // console.log(check);
      // pelisGender.push(element);
      // console.log(genero.id)


      if (genero.id !== 99 && genero.id !== 35 && genero.id !== 36 && genero.id !== 10402 && genero.id !== 10770 && genero.id !==53 && genero.id !== 10752 && genero.id !==37 ) {
        if (arrGenders.includes(genero.id)) {
          pelisGender.push(element);
        }
      }


    });
    return pelisGender;
  }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 3,
    "autoplay": true,
    "draggable": true,
    "autoplaySpeed": 6000,
    "arrows": true
  }

  iraPeli(slug: string) {
    this.router.navigate(['pelicula', slug])
  }
}
