export class Usuario {
  id: number;
  name: string;
  email: string;
  domicilio: string;
  numero_exterior: number;
  colonia: string;
  cp: number;
  ciudad: string;
  edad: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.domicilio = '';
    this.numero_exterior = 0;
    this.colonia = '';
    this.cp = 0;
    this.ciudad = '';
    this.edad = 0;
  }
}
