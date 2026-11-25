import { Component, inject } from '@angular/core';
import { Tarea } from '../../services/tarea';

@Component({
  selector: 'app-lista-tareas',
  imports: [],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})
export class ListaTareas {
  private readonly servicio = inject(Tarea);
  tareas: string[] = this.servicio.obtenerTareas();

  agregar(input: HTMLInputElement): void {
    this.servicio.agregarTarea(input.value);
    this.tareas = this.servicio.obtenerTareas();
    input.value = '';
  }
}
