import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GastosService } from '../../gastos.service';
import { Categoria } from '../../../categorias/interfaces/categoria';
import { CategoriasService } from 'src/app/main/categorias/categorias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gastos-form',
  templateUrl: './gastos-form.component.html',
  styleUrls: ['./gastos-form.component.css']
})
export class GastosFormComponent implements OnInit {
  categorias: Categoria[] = [];
  private readonly USER_KEY = environment.USER_KEY;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

  constructor(
    private gastosService: GastosService,
    private categoriasService: CategoriasService,
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
    this.categoriasService.ConsultarCategoriasGastos(this.userAndToken.user.id).subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  guardarGasto(): void {
    if (this.gastosForm.valid) {
      const nuevoGasto = { ...this.gastosForm.value, categoria_id: +this.gastosForm.value.categoria };
      this.gastosService.guardarGasto(nuevoGasto).subscribe(
        (respuesta) => {
          console.log('Gasto guardado exitosamente:', respuesta);
          this.router.navigate(['/gastos']);
        },
        (error) => {
          console.error('Error al guardar el gasto:', error);
        }
      );
    }
  }
}
