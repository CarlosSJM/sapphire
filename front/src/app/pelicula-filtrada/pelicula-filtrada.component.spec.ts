import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaFiltradaComponent } from './pelicula-filtrada.component';

describe('PeliculaFiltradaComponent', () => {
  let component: PeliculaFiltradaComponent;
  let fixture: ComponentFixture<PeliculaFiltradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaFiltradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaFiltradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
