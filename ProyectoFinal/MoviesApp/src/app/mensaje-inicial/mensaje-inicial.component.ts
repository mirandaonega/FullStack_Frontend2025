import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje-inicial',
  templateUrl: './mensaje-inicial.component.html',
  styleUrls: ['./mensaje-inicial.component.css']
})
export class MensajeInicialComponent {

titulo: string = 'Bienvenido/a a MoviesApp';
mensaje: string = "Explora nuestra cartelera y descubre las últimas películas disponibles. ¡Disfruta de la mejor experiencia cinematográfica!";
mensajeVisible: boolean = true;

cerrarMensaje() {
  this.mensajeVisible = false;
}

}
