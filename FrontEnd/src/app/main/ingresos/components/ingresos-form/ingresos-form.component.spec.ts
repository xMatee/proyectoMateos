import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosFormComponent } from './ingresos-form.component';

describe('IngresosFormComponent', () => {
  let component: IngresosFormComponent;
  let fixture: ComponentFixture<IngresosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresosFormComponent]
    });
    fixture = TestBed.createComponent(IngresosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
