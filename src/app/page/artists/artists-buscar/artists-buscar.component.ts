import { ArtistsService } from 'src/app/service/artists.service';
import { artists } from 'src/app/model/artists';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-buscar',
  templateUrl: './artists-buscar.component.html',
  styleUrls: ['./artists-buscar.component.css']
})
export class ArtistsBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private artistsservice:ArtistsService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: artists[] = [];
    this.artistsservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.name.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.artistsservice.setLista(array);
    })
  }
}