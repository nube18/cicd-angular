import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tarea {
  private tareas: string[] = [];

  obtenerTareas(): string[] {
    return [...this.tareas];
  }

  agregarTarea(texto: string): void {
    const tarea = texto.trim();
    if (!tarea) return;
    this.tareas.push(tarea);
  }

  limpiar(): void {
    this.tareas = [];
  }
}
