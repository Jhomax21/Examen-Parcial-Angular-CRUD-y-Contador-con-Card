 import { ArtistsActualizarComponent } from './page/artists/artists-actualizar/artists-actualizar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { artists } from 'src/app/model/artists';
import { ArtistsComponent } from './page/artists/artists.component';
import { ArtistsCreaeditaComponent } from './page/artists/artists-creaedita/artists-creaedita.component';

const routes: Routes = [
  {
    path: 'business', component: ArtistsComponent, children: [
  
      { path: 'artists', component: ArtistsComponent, children:[  
      { path: 'edit/:id', component: ArtistsCreaeditaComponent }
 ]}, 
    ]
  },
  {
    path: 'admin', component: ArtistsCreaeditaComponent, children: [
      
     { path: 'new', component: ArtistsCreaeditaComponent },
    ]
  },
  
  { path: 'edit/:id', component: ArtistsCreaeditaComponent },

  {path: 'home', component: ArtistsActualizarComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
