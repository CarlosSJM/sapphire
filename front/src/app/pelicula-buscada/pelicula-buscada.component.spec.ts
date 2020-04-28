import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaBuscadaComponent } from './pelicula-buscada.component';

describe('PeliculaBuscadaComponent', () => {
  let component: PeliculaBuscadaComponent;
  let fixture: ComponentFixture<PeliculaBuscadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaBuscadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaBuscadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
