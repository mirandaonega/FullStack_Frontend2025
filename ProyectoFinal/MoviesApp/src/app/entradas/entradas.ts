import { Component } from '@angular/core';

interface Entrada {
  Pelicula: string; 
  fecha: Date;
  hora: string;
  sala: string;
  asiento: string;
  precio: number;
}

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.html',
  styleUrls: ['./entradas.css']
})
export class EntradasComponent { 
  entradas: Entrada[] = [
    { Pelicula: 'Taylor Swift: The Eras Tour', fecha: new Date('2024-10-03'), hora: '20:00', sala: 'Sala 1', asiento: 'A12', precio: 15.00 },
    { Pelicula: 'Inception', fecha: new Date('2024-10-04'), hora: '18:30', sala: 'Sala 2', asiento: 'B7', precio: 12.50 },
    { Pelicula: 'The Dark Knight', fecha: new Date('2024-10-05'), hora: '21:00', sala: 'Sala 3', asiento: 'C15', precio: 14.00 },
    { Pelicula: 'Interstellar', fecha: new Date('2024-10-06'), hora: '19:00', sala: 'Sala 4', asiento: 'D10', precio: 13.50 }
  ];
}