import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/service/artists.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-artists-dialogo',
  templateUrl: './artists-dialogo.component.html',
  styleUrls: ['./artists-dialogo.component.css']
})
export class ArtistsDialogoComponent implements OnInit {
  constructor(private artistsservice: ArtistsService,
    private dialogRef: MatDialogRef<ArtistsDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.artistsservice.setConfirmaEliminacion(estado);
    if(estado)
    {
      this.artistsservice.numbero--;
      this.artistsservice.mensaje = "Artista eliminado con exito";
    }
    this.dialogRef.close();

  }
}
