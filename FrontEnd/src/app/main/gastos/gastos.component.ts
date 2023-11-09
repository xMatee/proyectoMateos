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
  categorias: Categoria[] = []

  constructor(private gastosService: GastosService) { }

  ngOnInit(): void {
    this.gastosService.ConsultarGastos().subscribe((datos) => {
      this.datosA = datos;

      // Calcular las cantidades totales por categoría
      this.calcularCantidadesTotales(this.datosA);

    })
    this.gastosService.ConsultarCategorias().subscribe((datosC) => {
      this.categorias = datosC
      console.log(this.categorias)
    })

  }

  calcularCantidadesTotales(gastos: Gasto[]): void {
    const categoriasMap = new Map<number, number>();

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

    // Crear objetos para cada categoría con su nombre y cantidad
    const categoriasTotales: any[] = [];
    categoriasMap.forEach((cantidad, categoriaId) => {
      // Buscar el nombre de la categoría correspondiente en la lista de categorías
      const categoria = this.categorias.find(c => c.id === categoriaId);
      const categoriaNombre = categoria ? categoria.nombre : 'Categoría Desconocida';
      categoriasTotales.push({ categoria: categoriaNombre, cantidad });
    });

    // Ordenar el arreglo de categorías por la cantidad total en orden descendente
    categoriasTotales.sort((a, b) => b.cantidad - a.cantidad);

    this.categoriasTotales = categoriasTotales;
  }
}
