import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global-service.service';
import { Ingreso } from '../../interfaces/ingreso';
import { IngresosService } from '../../ingresos.service';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/main/categorias/categorias.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-ver-ingresos-categoria',
  templateUrl: './ver-ingresos-categoria.component.html',
  styleUrls: ['./ver-ingresos-categoria.component.css']
})
export class VerIngresosCategoriaComponent implements OnInit {
  ingresos: Ingreso[] = [];
  categoriaId: number = 0;
  private readonly USER_KEY = environment.USER_KEY;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

  constructor(private ingresosService: IngresosService, private categoriasService: CategoriasService, private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.globalService.categoriaId$.subscribe(id => {
      this.categoriaId = id;
      this.obtenerGastosPorCategoria();
    });
  }

  obtenerGastosPorCategoria(): void {
    this.ingresosService.ConsultarIngresosPorCategoria(this.userAndToken.user.id, this.categoriaId).subscribe(ingresos => {
      this.ingresos = ingresos;
    });
  }
  editarIngreso(ingresoId: number): void {
    this.router.navigate([`/ingresos/ver/${ingresoId}/editar`]);
  }

  eliminarIngreso(gastoId: number): void {
    this.ingresosService.eliminarIngreso(this.userAndToken.user.id, gastoId).subscribe()
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
