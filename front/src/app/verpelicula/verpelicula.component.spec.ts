import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpeliculaComponent } from './verpelicula.component';

describe('VerpeliculaComponent', () => {
  let component: VerpeliculaComponent;
  let fixture: ComponentFixture<VerpeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerpeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
