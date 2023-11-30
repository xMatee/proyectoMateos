import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasFormGastoComponent } from './categorias-form-gasto.component';

describe('CategoriasFormGastoComponent', () => {
  let component: CategoriasFormGastoComponent;
  let fixture: ComponentFixture<CategoriasFormGastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasFormGastoComponent]
    });
    fixture = TestBed.createComponent(CategoriasFormGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
