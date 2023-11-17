import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../interfaces/categoria';
import { GastosService } from '../../../gastos/gastos.service';
import { IngresosService } from '../../../ingresos/ingresos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  gastosCategorias: Categoria[] = [];
  ingresosCategorias: Categoria[] = [];

  constructor(private gastosService: GastosService, private ingresosService: IngresosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.gastosService.ConsultarCategorias(3).subscribe(
      (categorias) => {
        this.gastosCategorias = categorias;
      },
      (error) => {
        console.error('Error al obtener categorías de gastos:', error);
      }
    );

    this.ingresosService.ConsultarCategorias(3).subscribe(
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
}
