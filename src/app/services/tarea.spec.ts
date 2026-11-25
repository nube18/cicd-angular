import { TestBed } from '@angular/core/testing';
import { Tarea } from './tarea';

describe('Tarea (servicio)', () => {
  let servicio: Tarea;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servicio = TestBed.inject(Tarea);
  });

  it('empieza sin tareas', () => {
    expect(servicio.obtenerTareas()).toEqual([]);
  });

  it('agrega una tarea', () => {
    servicio.agregarTarea('Comprar pan');
    expect(servicio.obtenerTareas()).toEqual(['Comprar pan']);
  });

  it('elimina los espacios al principio y al final', () => {
    servicio.agregarTarea('   Estudiar   ');
    expect(servicio.obtenerTareas()).toEqual(['Estudiar']);
  });

  it('ignora textos vacíos o con solo espacios', () => {
    servicio.agregarTarea('');
    servicio.agregarTarea('    ');
    expect(servicio.obtenerTareas()).toEqual([]);
  });

  it('devuelve una copia y no el array interno', () => {
    servicio.agregarTarea('A');
    const copia = servicio.obtenerTareas();
    copia.push('intruso');
    expect(servicio.obtenerTareas()).toEqual(['A']);
  });

  it('limpia todas las tareas', () => {
    servicio.agregarTarea('A');
    servicio.agregarTarea('B');
    servicio.limpiar();
    expect(servicio.obtenerTareas()).toEqual([]);
  });
});