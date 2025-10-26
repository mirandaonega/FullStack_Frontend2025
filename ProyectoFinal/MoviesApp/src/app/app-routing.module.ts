import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';


/*En el archivo app.routes.ts, agregar 2 paths: pelis y ejercicios. Cada uno con su componente MovieComponent y EjerciciosComponent respectivamente. */
const routes: Routes = [
{path: '/pelis', component: MoviesComponent},
{path: '/ejercicios', component: EjerciciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
