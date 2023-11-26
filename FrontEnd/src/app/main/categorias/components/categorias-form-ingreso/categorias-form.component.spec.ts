import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasFormComponent } from './categorias-form.component';

describe('CategoriasFormComponent', () => {
  let component: CategoriasFormComponent;
  let fixture: ComponentFixture<CategoriasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasFormComponent]
    });
    fixture = TestBed.createComponent(CategoriasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});