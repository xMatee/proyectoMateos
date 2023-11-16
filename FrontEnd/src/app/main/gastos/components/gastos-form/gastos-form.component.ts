import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GastosService } from '../../gastos.service';
import { Categoria } from '../../../interfaces/categoria';

@Component({
  selector: 'app-gastos-form',
  templateUrl: './gastos-form.component.html',
  styleUrls: ['./gastos-form.component.css']
})
export class GastosFormComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(
    private gastosService: GastosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  public gastosForm: FormGroup = this.formBuilder.group({
    cantidad: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    categoria: ['', [Validators.required]]
  });


  obtenerCategorias(): void {
    this.gastosService.ConsultarCategorias(3).subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  guardarGasto(): void {
    console.log(this.gastosForm)
    if (this.gastosForm.valid) {
      const nuevoGasto = this.gastosForm.value;
      this.gastosService.guardarGasto(nuevoGasto).subscribe(
        (respuesta) => {
          console.log('Gasto guardado exitosamente:', respuesta);
          // Puedes redirigir a la página de gastos o hacer alguna otra acción después de guardar.
        },
        (error) => {
          console.error('Error al guardar el gasto:', error);
        }
      );
    }
  }
}
