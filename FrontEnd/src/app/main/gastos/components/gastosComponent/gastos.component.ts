import { GlobalService } from './../../../services/global-service.service';
import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../gastos.service';
import { Gasto } from '../../interfaces/gasto';
import { Categoria } from '../../../categorias/interfaces/categoria';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/main/categorias/categorias.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  datosA: Gasto[] = [];
  categoriasTotales: any[] = [];
  categorias: Categoria[] = [];
  totalGastos: number = 0;

  constructor(private gastosService: GastosService, private categoriasSerivce: CategoriasService, private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.gastosService.ConsultarGastos(3).subscribe((datos) => {
      this.datosA = datos;
      this.categoriasSerivce.ConsultarCategoriasGastos(3).subscribe((datosC) => {
        this.categorias = datosC;
        this.calcularCantidadesTotales(this.datosA);
        this.globalService.setCategoriasTotales(this.categoriasTotales);
      });
    });
  }
  calcularCantidadesTotales(gastos: Gasto[]): void {
    const categoriasMap = new Map<number, { id: number, nombre: string, cantidad: number, imagen: string }>();
    gastos.forEach((gasto) => {
      const categoriaId = gasto.categoria_id;
      const cantidad = gasto.cantidad;

      this.totalGastos += cantidad;

      if (categoriasMap.has(categoriaId)) {
        categoriasMap.get(categoriaId)!.cantidad += cantidad;
      } else {
        const categoria = this.categorias.find(c => c.id === categoriaId);
        const categoriaNombre = categoria ? categoria.nombre : 'Sin categoria';
        const categoriaImagen = categoria ? categoria.imagen : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-yxtos&psig=AOvVaw3KXZ4StP_xqlLh1C460kHx&ust=1699999406379000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCFhLn9wYIDFQAAAAAdAAAAABAE'
        categoriasMap.set(categoriaId, { id: categoriaId, nombre: categoriaNombre, cantidad, imagen: categoriaImagen });
      }
    });
    this.globalService.setTotalGastos(this.totalGastos)
    this.categoriasTotales = Array.from(categoriasMap.values());
    this.categoriasTotales.sort((a, b) => b.cantidad - a.cantidad);
    this.asignarColores(this.categoriasTotales);
  }
  private asignarColores(categorias: any[]): void {
    const colores = [
      'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue',
      'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime',
      'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey',
      'grey', 'black'
    ];


    categorias.forEach((categoria, index) => {
      categoria.color = colores[index % colores.length];
      console.log(categoria.color)
    });
  }


  verDetalleCategoria(idCategoria: number): void {
    this.globalService.setCategoriaId(idCategoria)
    this.router.navigate(['/gastos/ver', idCategoria]);
  }
  getTotal() {
    return this.globalService.getTotalDiferencia()
  }
  nuevoGasto(): void {
    this.router.navigate(['/gastos/new']);
  }

}
