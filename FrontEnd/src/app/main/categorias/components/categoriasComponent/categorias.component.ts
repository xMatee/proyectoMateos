import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { GastosService } from '../../../gastos/gastos.service';
import { IngresosService } from '../../../ingresos/ingresos.service';
import { Router } from '@angular/router';
import { CategoriasService } from '../../categorias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  gastosCategorias: Categoria[] = [];
  ingresosCategorias: Categoria[] = [];

  private readonly USER_KEY = environment.USER_KEY;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.categoriasService.ConsultarCategoriasGastos(this.userAndToken.user.id).subscribe(
      (categorias) => {
        this.gastosCategorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías de gastos:', error);
      }
    );

    this.categoriasService.ConsultarCategoriasIngresos(this.userAndToken.user.id).subscribe(
      (categorias) => {
        this.ingresosCategorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías de ingresos:', error);
      }
    );
  }
  nuevaCategoriaIngreso(): void {
    this.router.navigate(['/categorias/new/ingreso']);
  }
  nuevaCategoriaGasto(): void {
    this.router.navigate(['/categorias/new/gasto']);
  }

  editarCategoria(categoriaId: number): void {
    this.router.navigate([`/categorias/editar/${categoriaId}`]);
  }

  eliminarCategoria(categoriaId: number): void {
    this.categoriasService.eliminarCategoria(3, categoriaId).subscribe()
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
