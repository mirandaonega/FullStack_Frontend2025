import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje-inicial',
  templateUrl: './mensaje-inicial.component.html',
  styleUrls: ['./mensaje-inicial.component.css']
})
export class MensajeInicialComponent {

titulo: string = 'Bienvenido/a a TaylorApp';
mensaje: string = "Próximo álbum disponible el 3 de octubre!";
mensajeVisible: boolean = true;

info: {
  fechaSalida: string;
  numeroCanciones: number;
  duracionTotal: string;
  colaboraciones: string[];
} = {
  fechaSalida: '3 de octubre',
  numeroCanciones: 10,
  duracionTotal: '45 minutos',
  colaboraciones: ['Artista 1', 'Artista 2', 'Artista 3']
};



cerrarMensaje() {
  this.mensajeVisible = false;
}


}
