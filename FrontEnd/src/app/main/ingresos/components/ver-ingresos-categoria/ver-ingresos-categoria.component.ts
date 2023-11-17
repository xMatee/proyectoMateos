import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global-service.service';
import { Ingreso } from '../../interfaces/ingreso';
import { IngresosService } from '../../ingresos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ver-ingresos-categoria',
  templateUrl: './ver-ingresos-categoria.component.html',
  styleUrls: ['./ver-ingresos-categoria.component.css']
})
export class VerIngresosCategoriaComponent implements OnInit {
  ingresos: Ingreso[] = [];
  categoriaId: number = 0;

  constructor(private ingresosService: IngresosService, private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.globalService.categoriaId$.subscribe(id => {
      this.categoriaId = id;
      this.obtenerGastosPorCategoria();
    });
  }

  obtenerGastosPorCategoria(): void {
    this.ingresosService.ConsultarIngresosPorCategoria(3, this.categoriaId).subscribe(ingresos => {
      this.ingresos = ingresos;
    });
  }
  editarIngreso(gastoId: number): void {
    this.router.navigate([`/gastos/ver/${gastoId}/editar`]);
  }

  eliminarIngreso(gastoId: number): void {
    this.ingresosService.eliminarIngreso(3, gastoId).subscribe()
  }
}
