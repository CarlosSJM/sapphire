import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

// Import your library
import { SlickModule } from 'ngx-slick';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { AsideComponent } from './dashboard/aside/aside.component';
import { UsersComponent } from './dashboard/users/users.component';
import { VideosComponent } from './dashboard/videos/videos.component';

// COMPONENTES GUILLE
import { LandingComponent } from './landing/landing.component';
import { RegistroComponent } from './registro/registro.component';
import { LogadminComponent } from './logadmin/logadmin.component';
import { LoguserComponent } from './loguser/loguser.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { VerpeliculaComponent } from './verpelicula/verpelicula.component';
import { CarruselPelisComponent } from './carrusel-pelis/carrusel-pelis.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { PathApiPipe } from './path-api.pipe';
import { PathApiBackPipe } from './path-api-back.pipe';
import { PeliculaBuscadaComponent } from './pelicula-buscada/pelicula-buscada.component';

// COMPONENTES CARLOS
import { HomedashboardComponent } from './dashboard/homedashboard/homedashboard.component';

// COMPONENTE GUSTAVO
import { HomeComponent } from './home/home.component';

// COMPONENTE CELIA
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';
import { MenuComponent } from './panel-usuario/menu/menu.component';
import { UsuarioComponent } from './panel-usuario/usuario/usuario.component';
import { SearchMovieComponent } from './user-navbar/search-movie/search-movie.component';
import { PeliculaFiltradaComponent } from './pelicula-filtrada/pelicula-filtrada.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AsideComponent,
    UsersComponent,
    LandingComponent,
    LogadminComponent,
    LoguserComponent,
    PeliculaComponent,
    VerpeliculaComponent,
    HomeComponent,
    CarruselPelisComponent,
    HomedashboardComponent,
    VideosComponent,
    PanelUsuarioComponent,
    RegistroComponent,
    UserNavbarComponent,
    PathApiPipe,
    PathApiBackPipe,
    MenuComponent,
    UsuarioComponent,
    SearchMovieComponent,
    PeliculaBuscadaComponent,
    PeliculaFiltradaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
