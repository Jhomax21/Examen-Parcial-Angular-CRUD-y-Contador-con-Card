import { artists } from 'src/app/model/artists';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArtistsService } from 'src/app/service/artists.service';
@Component({
  selector: 'app-artists-creaedita',
  templateUrl: './artists-creaedita.component.html',
  styleUrls: ['./artists-creaedita.component.css']
})
export class ArtistsCreaeditaComponent implements OnInit {
  artists: artists = new artists();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private artistsservice: ArtistsService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.artists.name.length > 0 && this.artists.points.length > 0) {
      if (this.edicion) {
        this.artistsservice.modificar(this.artists).subscribe(data => {
          this.artistsservice.listar().subscribe(data => {
            this.artistsservice.setLista(data);
          })
        })
      } else {

        this.artistsservice.insertar(this.artists).subscribe(data => {
          this.artistsservice.listar().subscribe(data => {
            this.artistsservice.setLista(data);
            this.artistsservice.numbero++;
          })
        })
      }
      this.router.navigate(['business/artists']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.artistsservice.listarId(this.id).subscribe(data => {
        this.artists = data;
      })
    }
  }
}
