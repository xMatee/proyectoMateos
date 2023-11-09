import { Component, OnInit } from '@angular/core';
import { GastosService } from './gastos.service';
import { Gasto } from './interfaces/gasto';
import { Categoria } from './interfaces/categoria';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  datosA: Gasto[] = [];
  categoriasTotales: any[] = [];

  constructor(private gastosService: GastosService) { }

  ngOnInit(): void {
    this.gastosService.ConsultarGastos().subscribe((datos) => {
      this.datosA = datos;
      console.log(this.datosA);

      // Calcular las cantidades totales por categoría
      this.calcularCantidadesTotales(this.datosA);
    });
  }

  calcularCantidadesTotales(gastos: Gasto[]): void {
    const categoriasMap = new Map<number, number>(); // Usar number para los IDs y la cantidad

    // Agrupar gastos por categoría y sumar las cantidades
    gastos.forEach((gasto) => {
      const categoriaId = gasto.categoria_id;
      const cantidad = gasto.cantidad;

      if (categoriasMap.has(categoriaId)) {
        categoriasMap.set(categoriaId, categoriasMap.get(categoriaId)! + cantidad);
      } else {
        categoriasMap.set(categoriaId, cantidad);
      }
    });

    // Crear objetos para cada categoría
    const categoriasTotales: any[] = [];
    categoriasMap.forEach((cantidad, categoriaId) => {
      // Deberías obtener los nombres de las categorías según tu estructura de datos
      const categoria: Categoria = this.gastosService.ConsultarCategoria(categoriaId)
      const categoriaNombre = categoria.nombre // Reemplaza esto con la obtención real del nombre
      categoriasTotales.push({ categoria: categoriaNombre, cantidad });
    });

    // Ordenar el arreglo de categorías por la cantidad total en orden descendente
    categoriasTotales.sort((a, b) => b.cantidad - a.cantidad);

    this.categoriasTotales = categoriasTotales;
  }
}
