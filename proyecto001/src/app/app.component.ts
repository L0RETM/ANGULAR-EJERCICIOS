import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    return this.activo ? 'trabajador activo': 'trabajador inactivo';
  }

  ultimos3Sueldos() {
    return this.sueldos.reduce((a, v) => (a += v, a), 0);
  }

  /*incrementar() {
    ++this.contador;
  }

  decrementar() {
    --this.contador;
  }*/

}

