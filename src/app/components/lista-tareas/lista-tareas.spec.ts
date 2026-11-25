import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTareas } from './lista-tareas';

describe('ListaTareas', () => {
  let fixture: ComponentFixture<ListaTareas>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ListaTareas] }).compileComponents();
    fixture = TestBed.createComponent(ListaTareas);
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('muestra "No hay tareas" al empezar', () => {
    expect(el.textContent).toContain('No hay tareas');
    expect(el.querySelectorAll('li').length).toBe(0);
  });

  it('añade una tarea al escribir y pulsar el botón', () => {
    const input = el.querySelector('input') as HTMLInputElement;
    const boton = el.querySelector('button') as HTMLButtonElement;

    input.value = 'Comprar pan';
    input.dispatchEvent(new Event('input'));
    boton.click();
    fixture.detectChanges();

    const items = el.querySelectorAll('li');
    expect(items.length).toBe(1);
    expect(items[0].textContent).toContain('Comprar pan');
    expect(el.textContent).not.toContain('No hay tareas');
    expect(input.value).toBe('');
  });

  it('no añade tareas vacías', () => {
    const input = el.querySelector('input') as HTMLInputElement;
    const boton = el.querySelector('button') as HTMLButtonElement;

    input.value = '   ';
    boton.click();
    fixture.detectChanges();

    expect(el.querySelectorAll('li').length).toBe(0);
    expect(el.textContent).toContain('No hay tareas');
  });
});