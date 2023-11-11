import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../gastos.service';
import { Gasto } from '../../interfaces/gasto';
import { Categoria } from '../../interfaces/categoria';
import { Router } from '@angular/router';
import { CategoriasService } from '../../../services/categorias-service.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  datosA: Gasto[] = [];
  categoriasTotales: any[] = [];
  categorias: Categoria[] = [];

  constructor(private gastosService: GastosService, private router: Router, private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.gastosService.ConsultarGastos(3).subscribe((datos) => {
      this.datosA = datos;
      this.gastosService.ConsultarCategorias(3, "gastos").subscribe((datosC) => {
        this.categorias = datosC;
        this.calcularCantidadesTotales(this.datosA);
      });
    });
  }

  calcularCantidadesTotales(gastos: Gasto[]): void {
    const categoriasMap = new Map<number, { id: number, nombre: string, cantidad: number }>();

    // Agrupar gastos por categoría y sumar las cantidades
    gastos.forEach((gasto) => {
      const categoriaId = gasto.categoria_id;
      const cantidad = gasto.cantidad;

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
    this.router.navigate(['/gastos/ver', idCategoria]);
  }


}
