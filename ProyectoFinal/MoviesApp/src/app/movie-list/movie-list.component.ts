import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieService,  Movie } from '../movie.service';

/*
interface Movie {
  title: string;
  year: number;
  description: string;
}
*/

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{ 
  Movies: Movie[] = [];
  selectedMovie: string | null = null;
/*
movies: Movie[] = [
  { title: 'Taylor Swift: The Eras Tour', year: 2024, description: 'A concert film capturing the magic of Taylor Swift\'s Eras Tour.' },
  { title: 'Inception', year: 2010, description: 'A mind-bending thriller about dreams within dreams.' },
  { title: 'The Dark Knight', year: 2008, description: 'Batman faces off against the Joker in this iconic superhero film.' },
  { title: 'Interstellar', year: 2014, description: 'A journey through space and time to save humanity.' },
  { title: 'Avatar', year: 2009, description: 'A visually stunning sci-fi epic set on the alien world of Pandora.' },
  { title: 'The Matrix', year: 1999, description: 'A hacker discovers the true nature of reality and his role in the war against its controllers.' },
  { title: 'Titanic', year: 1997, description: 'A tragic love story set against the backdrop of the ill-fated RMS Titanic.' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, description: 'The beginning of an epic fantasy adventure to destroy a powerful ring.' },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977, description: 'The original Star Wars film that started it all.' },
  { title: 'Jurassic Park', year: 1993, description: 'Dinosaurs are brought back to life in a theme park with disastrous results.' }
];
*/
constructor(private movieService: MovieService) {}

ngOnInit(): void {
  this.Movies = this.movieService.getMovies();
}

onMovieSelected(movieTitle: string): void {
  this.selectedMovie = movieTitle;
  }
}