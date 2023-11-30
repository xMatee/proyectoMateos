import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../categorias/interfaces/categoria';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services/global-service.service';
import { Ingreso } from '../../interfaces/ingreso';
import { IngresosService } from '../../ingresos.service';
import { CategoriasService } from 'src/app/main/categorias/categorias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  private readonly USER_KEY = environment.USER_KEY;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);
  datosA: Ingreso[] = [];
  categoriasTotales: any[] = [];
  categorias: Categoria[] = [];
  totalIngresos: number = 0;

  constructor(private ingresosService: IngresosService, private categoriasService: CategoriasService, private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.ingresosService.ConsultarIngresos(this.userAndToken.user.id).subscribe((datos) => {
      this.datosA = datos;
      this.categoriasService.ConsultarCategoriasIngresos(this.userAndToken.user.id).subscribe((datosC) => {
        this.categorias = datosC;
        this.calcularCantidadesTotales(this.datosA);
        this.globalService.setCategoriasTotalesIngresos(this.categoriasTotales);
      });
    });
  }

  calcularCantidadesTotales(ingresos: Ingreso[]): void {
    const categoriasMap = new Map<number, { id: number, nombre: string, cantidad: number, imagen: string }>();

    // Agrupar ingresos por categoría y sumar las cantidades
    ingresos.forEach((ingreso) => {
      const categoriaId = ingreso.categoria_id;
      const cantidad = ingreso.cantidad;

      this.totalIngresos += cantidad;

      if (categoriasMap.has(categoriaId)) {
        categoriasMap.get(categoriaId)!.cantidad += cantidad;
      } else {
        const categoria = this.categorias.find(c => c.id === categoriaId);
        const categoriaNombre = categoria ? categoria.nombre : 'Categoría Desconocida';
        const categoriaImagen = categoria ? categoria.imagen : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-yxtos&psig=AOvVaw3KXZ4StP_xqlLh1C460kHx&ust=1699999406379000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCFhLn9wYIDFQAAAAAdAAAAABAE'
        categoriasMap.set(categoriaId, { id: categoriaId, nombre: categoriaNombre, cantidad, imagen: categoriaImagen });
      }
    });
    this.globalService.setTotalIngresos(this.totalIngresos);
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
    this.router.navigate(['/ingresos/ver', idCategoria]);
  }
  getTotal() {
    return this.globalService.getTotalDiferencia()
  }
  nuevoIngreso(): void {
    this.router.navigate(['/ingresos/new']);
  }
}
