import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('muestra el título y los dos componentes hijos', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('h1')?.textContent).toContain('Gestor de tareas');
    expect(el.querySelector('app-contador')).not.toBeNull();
    expect(el.querySelector('app-lista-tareas')).not.toBeNull();
  });
});
