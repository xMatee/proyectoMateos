import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresosService } from '../../ingresos.service';
import { Categoria } from '../../../categorias/interfaces/categoria';
import { CategoriasService } from 'src/app/main/categorias/categorias.service';

@Component({
  selector: 'app-ingresos-form',
  templateUrl: './ingresos-form.component.html',
  styleUrls: ['./ingresos-form.component.css']
})
export class IngresosFormComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(
    private ingresosService: IngresosService,
    private categoriasService: CategoriasService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  public ingresosForm: FormGroup = this.formBuilder.group({
    cantidad: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    categoria: ['', [Validators.required]]
  });


  obtenerCategorias(): void {
    this.categoriasService.ConsultarCategoriasIngresos(3).subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  guardarIngreso(): void {
    if (this.ingresosForm.valid) {
      const nuevoIngreso = { ...this.ingresosForm.value, categoria_id: +this.ingresosForm.value.categoria };
      this.ingresosService.guardarIngreso(nuevoIngreso).subscribe(
        (respuesta) => {
          console.log('Gasto guardado exitosamente:', respuesta);
          this.router.navigate(['/ingresos']);
        },
        (error) => {
          console.error('Error al guardar el gasto:', error);
        }
      );
    }
  }
}
