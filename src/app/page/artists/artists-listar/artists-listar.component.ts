import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/service/artists.service';
import { MatTableDataSource } from '@angular/material/table';
import { artists} from 'src/app/model/artists';
import { MatDialog } from '@angular/material/dialog';
import { ArtistsDialogoComponent } from './artists-dialogo/artists-dialogo.component';
@Component({
  selector: 'app-artists-listar',
  templateUrl: './artists-listar.component.html',
  styleUrls: ['./artists-listar.component.css']
})
export class ArtistsListarComponent implements OnInit {
  dataSource: MatTableDataSource<artists>= new MatTableDataSource();
  displayedColumns:string[]=["id","name","photo", "favoritesports","points", "groupId", 'ACCIÓN 1', 'ACCIÓN 2']; 
  private idMayor = 0;
  constructor(private as: ArtistsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.as.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.as.getLista().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      });
      this.as.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ArtistsDialogoComponent);
  }
  mensaje()
  {
    return this.as.mensaje;
  }
  eliminar(id: number) {
    this.as.eliminar(id).subscribe(() => {
      this.as.listar().subscribe(data => {
        this.as.setLista(data);
      });
    });

  }
}



