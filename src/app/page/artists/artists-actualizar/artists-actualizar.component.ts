import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/service/artists.service';
import { MatTableDataSource } from '@angular/material/table';
import { artists} from 'src/app/model/artists';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-artists-actualizar',
  templateUrl: './artists-actualizar.component.html',
  styleUrls: ['./artists-actualizar.component.css']
})
export class ArtistsActualizarComponent implements OnInit {
  constructor(private as: ArtistsService) { }

  ngOnInit(): void {

  }


  valor()
  {
    return this.as.numbero;
  }
}
