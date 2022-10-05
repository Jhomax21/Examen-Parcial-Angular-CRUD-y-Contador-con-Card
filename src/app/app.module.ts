import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
//COMPONENTS
import { ArtistsComponent } from './page/artists/artists.component';
import { ArtistsListarComponent } from './page/artists/artists-listar/artists-listar.component';
import { ArtistsCreaeditaComponent } from './page/artists/artists-creaedita/artists-creaedita.component';
import { ArtistsBuscarComponent } from './page/artists/artists-buscar/artists-buscar.component';
import { ArtistsDialogoComponent } from './page/artists/artists-listar/artists-dialogo/artists-dialogo.component';
import { ArtistsActualizarComponent } from './page/artists/artists-actualizar/artists-actualizar.component';




@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistsListarComponent,
    ArtistsCreaeditaComponent,
    ArtistsBuscarComponent,
    ArtistsDialogoComponent,
    ArtistsActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
