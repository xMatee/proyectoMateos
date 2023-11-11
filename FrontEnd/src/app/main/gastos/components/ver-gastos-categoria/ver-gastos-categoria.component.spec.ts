import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGastosCategoriaComponent } from './ver-gastos-categoria.component';

describe('VerGastosCategoriaComponent', () => {
  let component: VerGastosCategoriaComponent;
  let fixture: ComponentFixture<VerGastosCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerGastosCategoriaComponent]
    });
    fixture = TestBed.createComponent(VerGastosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
