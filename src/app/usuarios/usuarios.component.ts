import { Component, OnInit} from '@angular/core';
import { UsuariosService} from "./usuarios.service";
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  /* booleano: boolean = true;
  listado: any[] = [
    {
      text: "Valor1",
      disable: true,
    },
    {
      text: "Valor1",
      disable: false,
    },
  ];
  isEspecial: boolean = true; */

  usuarios: any[] = [Usuario];


  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

}
