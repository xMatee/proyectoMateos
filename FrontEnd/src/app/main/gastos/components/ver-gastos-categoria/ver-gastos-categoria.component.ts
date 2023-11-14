import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../gastos.service';
import { Gasto } from '../../interfaces/gasto';
import { GlobalService } from '../../../services/global-service.service';
@Component({
  selector: 'app-ver-gastos-categoria',
  templateUrl: './ver-gastos-categoria.component.html',
  styleUrls: ['./ver-gastos-categoria.component.css']
})
export class VerGastosCategoriaComponent implements OnInit {
  gastos: Gasto[] = [];
  categoriaId: number = 0;

  constructor(private gastosService: GastosService, private globalServuce: GlobalService) { }

  ngOnInit(): void {
    this.globalServuce.categoriaId$.subscribe(id => {
      this.categoriaId = id;
      console.log('ID CATEGORIA2:', this.categoriaId);
      this.obtenerGastosPorCategoria();
    });
  }

  obtenerGastosPorCategoria(): void {
    this.gastosService.ConsultarGastosPorCategoria(3, this.categoriaId).subscribe(gastos => {
      this.gastos = gastos;
      // Puedes hacer cualquier otra lógica que necesites con los gastos.
    });
  }
}
