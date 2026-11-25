import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './components/contador/contador';
import { ListaTareas } from './components/lista-tareas/lista-tareas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, ListaTareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gestor de tareas');
}
