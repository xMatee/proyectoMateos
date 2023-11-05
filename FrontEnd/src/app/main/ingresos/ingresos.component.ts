import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso';
import { IngresosService } from './ingresos.service';
@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  datosA: Array<Ingreso> = []
  constructor(private ingresosService: IngresosService) { }
  ngOnInit(): void {
    this.ingresosService.ConsultarIngresos().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.datosA.push(datos[i])
      }
    })
  }
}
