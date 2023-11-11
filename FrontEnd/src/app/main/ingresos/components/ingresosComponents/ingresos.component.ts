import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { Router } from '@angular/router';
import { CategoriasService } from '../../../services/categorias-service.service';
import { Ingreso } from '../../interfaces/ingreso';
import { IngresosService } from '../../ingresos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  datosA: Ingreso[] = [];
  categoriasTotales: any[] = [];
  categorias: Categoria[] = [];

  constructor(private ingresosService: IngresosService, private router: Router, private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.ingresosService.ConsultarIngresos(3).subscribe((datos) => {
      this.datosA = datos;
      this.ingresosService.ConsultarCategorias(3, "ingresos").subscribe((datosC) => {
        this.categorias = datosC;
        this.calcularCantidadesTotales(this.datosA);
      });
    });
  }

  calcularCantidadesTotales(ingresos: Ingreso[]): void {
    const categoriasMap = new Map<number, { id: number, nombre: string, cantidad: number }>();

    // Agrupar gastos por categoría y sumar las cantidades
    ingresos.forEach((ingreso) => {
      const categoriaId = ingreso.categoria_id;
      const cantidad = ingreso.cantidad;

      if (categoriasMap.has(categoriaId)) {
        categoriasMap.get(categoriaId)!.cantidad += cantidad;
      } else {
        const categoria = this.categorias.find(c => c.id === categoriaId);
        const categoriaNombre = categoria ? categoria.nombre : 'Categoría Desconocida';
        categoriasMap.set(categoriaId, { id: categoriaId, nombre: categoriaNombre, cantidad });
      }
    });

    this.categoriasTotales = Array.from(categoriasMap.values());
    this.categoriasTotales.sort((a, b) => b.cantidad - a.cantidad);
  }

  verDetalleCategoria(idCategoria: number): void {

    console.log('ID de Categoría:', idCategoria);
    this.categoriasService.setCategoriaId(idCategoria)
    this.router.navigate(['/ingresos/ver', idCategoria]);
  }


}
