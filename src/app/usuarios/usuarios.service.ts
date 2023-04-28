import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // constructor(private usuariosService: UsuariosService) { }

  private apiUrl = 'http://localhost:8000/api/index';

  constructor(private usuariosService: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.usuariosService.get<Usuario[]>(this.apiUrl);
  }
}
