import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIngresosCategoriaComponent } from './ver-ingresos-categoria.component';

describe('VerIngresosCategoriaComponent', () => {
  let component: VerIngresosCategoriaComponent;
  let fixture: ComponentFixture<VerIngresosCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerIngresosCategoriaComponent]
    });
    fixture = TestBed.createComponent(VerIngresosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
