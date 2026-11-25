import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contador } from './contador';

describe('Contador', () => {
  let fixture: ComponentFixture<Contador>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Contador] }).compileComponents();
    fixture = TestBed.createComponent(Contador);
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('muestra el contador inicial en 0', () => {
    expect(el.querySelector('p')?.textContent).toContain('Contador: 0');
  });

  it('incrementa al hacer clic en el botón', () => {
    const boton = el.querySelector('button') as HTMLButtonElement;
    boton.click();
    boton.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.contador).toBe(2);
    expect(el.querySelector('p')?.textContent).toContain('Contador: 2');
  });
});