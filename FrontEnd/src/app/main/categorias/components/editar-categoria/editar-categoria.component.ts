import { Component } from '@angular/core';
import { CategoriasService } from '../../categorias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../interfaces/categoria';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  private readonly USER_KEY = environment.USER_KEY;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

  usuarioId: number = this.userAndToken.user.id;
  categoria: Categoria = { id: 0, nombre: "", estado: -1, usuario_id: -1, tipo: -1, imagen: "" }

  constructor(
    private categoriasService: CategoriasService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const categoriaIdParam = this.route.snapshot.paramMap.get('id');
    this.categoriaId = categoriaIdParam ? +categoriaIdParam : 0;

    if (!this.categoriaId) {
      console.error('ID de categoria no válido.');
      return;
    }

    this.obtenerCategoria();
    this.cargarCategoria();
  }

  obtenerCategoria() {
    this.categoriasService.consultarCategoriaPorId(this.usuarioId, this.categoriaId).subscribe(
      (categoria) => {
        this.categoria = categoria;
      },
      (error) => {
        console.error('Error al obtener categorías de gastos:', error);
      }
    );
  }


  public categoriaForm: FormGroup = this.formBuilder.group({
    nombre: [this.categoria.nombre, [Validators.required, Validators.min(0)]],
    imagen: [this.categoria.imagen, [Validators.required]],
  });


  cargarCategoria(): void {
    this.categoriasService.consultarCategoriaPorId(this.usuarioId, this.categoriaId).subscribe(
      (categoria) => {
        this.categoriaForm.setValue({
          nombre: categoria.nombre,
          imagen: categoria.imagen,
        });
      },
      (error) => {
        console.error('Error al cargar la categoria:', error);
      }
    );
  }

  guardarEdicion(): void {
    if (this.categoriaForm.valid) {
      const categoriaEditada = {
        nombre: this.categoriaForm.value.nombre,
        imagen: this.categoriaForm.value.imagen,
      };

      this.categoriasService.editarCategoria(this.usuarioId, this.categoriaId, categoriaEditada).subscribe(
        (respuesta) => {
          console.log('Categoria editada exitosamente:', respuesta);
          this.router.navigate(['/categorias'])
        },
        (error) => {
          console.error('Error al editar la categoria:', error);
        }
      );
    }
  }
}