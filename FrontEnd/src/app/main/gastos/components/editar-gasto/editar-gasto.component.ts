import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GastosService } from '../../gastos.service';
import { Categoria } from '../../../interfaces/categoria';

@Component({
  selector: 'app-editar-gasto',
  templateUrl: './editar-gasto.component.html',
  styleUrls: ['./editar-gasto.component.css']
})
export class EditarGastoComponent implements OnInit {
  gastoId: number = 0;
  usuarioId: number = 3; // Ajusta el usuarioId según tus necesidades
  categorias: Categoria[] = [];

  constructor(
    private gastosService: GastosService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const gastoIdParam = this.route.snapshot.paramMap.get('id');
    this.gastoId = gastoIdParam ? +gastoIdParam : 0;

    if (!this.gastoId) {
      console.error('ID de gasto no válido.');
      // Puedes manejar la falta de ID según tus necesidades, como redirigir a una página de error.
      return;
    }

    this.obtenerCategorias();
    this.cargarGasto();
  }

  obtenerCategorias(): void {
    this.gastosService.ConsultarCategorias(this.usuarioId).subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  public gastoForm: FormGroup = this.formBuilder.group({
    cantidad: [null, [Validators.required, Validators.min(0)]],
    descripcion: [null, [Validators.required]],
    fecha: [null, [Validators.required]],
    categoria: [null, [Validators.required]]
  });


  cargarGasto(): void {
    this.gastosService.ConsultarGastoPorId(this.usuarioId, this.gastoId).subscribe(
      (gasto) => {
        this.gastoForm.patchValue({
          cantidad: +gasto.cantidad, // Convertir a número
          descripcion: gasto.descripcion,
          fecha: gasto.fecha,
          categoria: +gasto.categoria_id // Convertir a número
        });
      },
      (error) => {
        console.error('Error al cargar el gasto:', error);
      }
    );
  }

  guardarEdicion(): void {
    if (this.gastoForm.valid) {
      const gastoEditado = this.gastoForm.value;
      this.gastosService.editarGasto(this.usuarioId, this.gastoId, gastoEditado).subscribe(
        (respuesta) => {
          console.log('Gasto editado exitosamente:', respuesta);
          this.router.navigate(['/gastos']);
        },
        (error) => {
          console.error('Error al editar el gasto:', error);
        }
      );
    }
  }
}
