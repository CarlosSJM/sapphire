import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTES ALEX
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./dashboard/users/users.component";
import { VideosComponent } from "./dashboard/videos/videos.component";

// COMPONENTES CARLOS
import { HomedashboardComponent } from "./dashboard/homedashboard/homedashboard.component";

// COMPONENTES GUILLE
import { LandingComponent } from './landing/landing.component';
import { RegistroComponent } from './registro/registro.component';
import { LoguserComponent } from './loguser/loguser.component';
import { LogadminComponent } from './logadmin/logadmin.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { VerpeliculaComponent } from './verpelicula/verpelicula.component';

import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { PeliculaBuscadaComponent } from './pelicula-buscada/pelicula-buscada.component';
import { PeliculaFiltradaComponent } from './pelicula-filtrada/pelicula-filtrada.component';

// COMPONENTE GUS
import { HomeComponent } from './home/home.component';

//COMPONENTES CELIA
import {PanelUsuarioComponent} from './panel-usuario/panel-usuario.component';


// RUTAS ALEX
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'videos', component: VideosComponent },
      // RUTAS CARLOS
      { path: 'homedash', component: HomedashboardComponent }
      
    ]
  },

  // RUTAS GUILLE
  { path: 'landing', component: LandingComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'loguser', component: LoguserComponent },
  { path: 'logadmin', component: LogadminComponent },
  { path: 'navbar', component: UserNavbarComponent },
  { path: 'pelicula/:slug', component: PeliculaComponent },
  { path: 'verpelicula/:ytb', component: VerpeliculaComponent },
  { path: 'peliculabuscada/:search', component: PeliculaBuscadaComponent },
  { path: 'peliculafiltrada/:filter', component: PeliculaFiltradaComponent },

  // RUTAS GUS
  { path: 'home', component: HomeComponent },

  // RUTAS CELIA
  { path: 'user', component: PanelUsuarioComponent },

  // RUTA POR DEFECTO, SIEMPRE SERÁ LA LANDING
  { path: '**', pathMatch: 'full', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
