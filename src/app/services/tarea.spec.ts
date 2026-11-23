import { TestBed } from '@angular/core/testing';

import { Tarea } from './tarea';

describe('Tarea', () => {
  let service: Tarea;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tarea);
  });

  it('adds and returns tasks', () => {
    service.agregarTarea('Estudiar CI');

    expect(service.obtenerTareas()).toEqual(['Estudiar CI']);
  });

  it('does not add empty or whitespace-only tasks', () => {
    service.agregarTarea('');
    service.agregarTarea('   ');

    expect(service.obtenerTareas()).toEqual([]);
  });

  it('clears all tasks', () => {
    service.agregarTarea('Estudiar CI');
    service.limpiar();

    expect(service.obtenerTareas()).toEqual([]);
  });
});
