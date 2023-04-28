import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TablaUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
