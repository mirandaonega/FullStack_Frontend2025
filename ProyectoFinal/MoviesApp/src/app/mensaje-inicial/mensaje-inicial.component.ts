import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje-inicial',
  templateUrl: './mensaje-inicial.component.html',
  styleUrls: ['./mensaje-inicial.component.css']
})
export class MensajeInicialComponent {

titulo: string = 'Bienvenido/a a MoviesApp';
mensaje: string = "Acá se podrán ver pelis!";
mensajeVisible: boolean = true;

cerrarMensaje() {
  this.mensajeVisible = false;
}

}
