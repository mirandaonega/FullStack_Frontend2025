import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
@Input() movie!: { title: string; year: number; description: string };
@Output() movieSelected = new EventEmitter<string>();

selectMovie(): void {
  this.movieSelected.emit(this.movie.title);
}

}

/*Declarar una propiedad @Input() llamada movie de tipo objeto para recibir los datos de cada película.
Declarar un evento @Output() llamado movieSelected utilizando EventEmitter<string>.
Crear un método selectMovie() que emita el evento movieSelected con el título de la película (this.movie.title).*/ 