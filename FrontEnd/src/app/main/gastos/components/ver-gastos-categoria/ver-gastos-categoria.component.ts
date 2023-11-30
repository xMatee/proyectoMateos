import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../gastos.service';
import { Gasto } from '../../interfaces/gasto';
import { GlobalService } from '../../../services/global-service.service';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/main/categorias/categorias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ver-gastos-categoria',
  templateUrl: './ver-gastos-categoria.component.html',
  styleUrls: ['./ver-gastos-categoria.component.css']
})
export class VerGastosCategoriaComponent implements OnInit {
  private readonly USER_KEY = environment.USER_KEY;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);
  gastos: Gasto[] = [];
  categoriaId: number = 0;

  constructor(
    private gastosService: GastosService,
    private categoriasService: CategoriasService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.globalService.categoriaId$.subscribe(id => {
      this.categoriaId = id;
      this.obtenerGastosPorCategoria();
    });
  }

  obtenerGastosPorCategoria(): void {
    this.gastosService.ConsultarGastosPorCategoria(this.userAndToken.user.id, this.categoriaId).subscribe(gastos => {
      this.gastos = gastos;
    });
  }

  editarGasto(gastoId: number): void {
    this.router.navigate([`/gastos/ver/${gastoId}/editar`]);
  }

  eliminarGasto(gastoId: number): void {
    this.gastosService.eliminarGasto(this.userAndToken.user.id, gastoId).subscribe()
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
