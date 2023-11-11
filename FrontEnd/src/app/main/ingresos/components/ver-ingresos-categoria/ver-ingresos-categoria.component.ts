import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias-service.service';
import { Ingreso } from '../../interfaces/ingreso';
import { IngresosService } from '../../ingresos.service';
@Component({
  selector: 'app-ver-ingresos-categoria',
  templateUrl: './ver-ingresos-categoria.component.html',
  styleUrls: ['./ver-ingresos-categoria.component.css']
})
export class VerIngresosCategoriaComponent implements OnInit {
  ingresos: Ingreso[] = [];
  categoriaId: number = 0;

  constructor(private ingresosService: IngresosService, private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.categoriaId$.subscribe(id => {
      this.categoriaId = id;
      this.obtenerGastosPorCategoria();
    });
  }

  obtenerGastosPorCategoria(): void {
    this.ingresosService.ConsultarIngresosPorCategoria(3, this.categoriaId).subscribe(ingresos => {
      this.ingresos = ingresos;
    });
  }
}
