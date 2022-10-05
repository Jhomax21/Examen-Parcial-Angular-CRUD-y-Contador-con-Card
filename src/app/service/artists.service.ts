import { artists } from '../model/artists';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  url: string = "http://localhost:3000/artists"
  private listaCambio = new Subject<artists[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  numbero = 3;
  mensaje: string = "";
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<artists[]>(this.url);
  }
  insertar(artists: artists) {
    return this.http.post(this.url, artists);
  }
  setLista(listaNueva: artists[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(artists: artists) {
    return this.http.put(this.url + "/" + artists.id, artists);
    //si se quiere cambiar para que no salga el url, cambiar la linea de arriba
  }
  listarId(id: number) {
    return this.http.get<artists>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<artists[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
