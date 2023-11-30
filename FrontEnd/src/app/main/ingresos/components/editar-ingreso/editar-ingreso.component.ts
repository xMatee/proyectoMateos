import { Component } from '@angular/core';
import { IngresosService } from '../../ingresos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/main/categorias/interfaces/categoria';
import { Ingreso } from '../../interfaces/ingreso';
import { CategoriasService } from 'src/app/main/categorias/categorias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-ingreso',
  templateUrl: './editar-ingreso.component.html',
  styleUrls: ['./editar-ingreso.component.css']
})
export class EditarIngresoComponent {
  private readonly USER_KEY = environment.USER_KEY;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);
  ingresoId: number = 0;
  usuarioId: number = this.userAndToken.user.id;
  categorias: Categoria[] = [];
  ingreso: Ingreso = { id: 0, cantidad: 0, fecha: "", descripcion: "", categoria_id: 0, subcategoria_id: 0, usuario_id: 0 }

  constructor(
    private ingresosService: IngresosService,
    private categoriasService: CategoriasService,
    private FormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const ingresoIdParam = this.route.snapshot.paramMap.get('id');
    this.ingresoId = ingresoIdParam ? +ingresoIdParam : 0;

    if (!this.ingresoId) {
      console.error('ID de ingreso no válido.');
      return;
    }

    this.obtenerCategorias();
    this.obtenerIngreso();
    this.cargarIngreso();
  }

  obtenerIngreso() {
    this.ingresosService.consultarIngresoPorId(this.usuarioId, this.ingresoId).subscribe(
      (ingreso) => {
        this.ingreso = ingreso;
      },
      (error) => {
        console.error('Error al obtener categorías de ingresos:', error);
      }
    );
  }
  obtenerCategorias(): void {
    this.categoriasService.ConsultarCategoriasIngresos(this.usuarioId).subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  public ingresoForm: FormGroup = this.FormBuilder.group({
    cantidad: [this.ingreso.cantidad, [Validators.required, Validators.min(0)]],
    descripcion: [this.ingreso.descripcion, [Validators.required]],
    fecha: [this.ingreso.fecha, [Validators.required]],
    categoria: [this.ingreso.categoria_id, [Validators.required]]
  });


  cargarIngreso(): void {
    this.ingresosService.consultarIngresoPorId(this.usuarioId, this.ingresoId).subscribe(
      (ingreso) => {
        this.ingresoForm.setValue({
          cantidad: ingreso.cantidad,
          descripcion: ingreso.descripcion,
          fecha: ingreso.fecha,
          categoria: ingreso.categoria_id
        });
      },
      (error) => {
        console.error('Error al cargar el ingreso:', error);
      }
    );
  }

  guardarEdicion(): void {
    if (this.ingresoForm.valid) {
      const ingresoEditado = {
        cantidad: this.ingresoForm.value.cantidad,
        descripcion: this.ingresoForm.value.descripcion,
        fecha: this.ingresoForm.value.fecha,
        categoria_id: this.ingresoForm.value.categoria
      };

      this.ingresosService.editarIngreso(this.usuarioId, this.ingresoId, ingresoEditado).subscribe(
        (respuesta) => {
          console.log('Ingreso editado exitosamente:', respuesta);
          this.router.navigate(['/ingresos']);
        },
        (error) => {
          console.error('Error al editar el gasto:', error);
        }
      );
    }
  }
}
