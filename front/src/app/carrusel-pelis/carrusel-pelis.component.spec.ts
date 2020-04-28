import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPelisComponent } from './carrusel-pelis.component';

describe('CarruselPelisComponent', () => {
  let component: CarruselPelisComponent;
  let fixture: ComponentFixture<CarruselPelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselPelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
