import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosFormComponent } from './gastos-form.component';

describe('GastosFormComponent', () => {
  let component: GastosFormComponent;
  let fixture: ComponentFixture<GastosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GastosFormComponent]
    });
    fixture = TestBed.createComponent(GastosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
