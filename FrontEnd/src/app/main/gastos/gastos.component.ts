import { Component, OnInit } from '@angular/core';
import { GastosService } from '../gastos/gastos.service'
import { Gasto } from './gasto';
@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  datosA: Array<Gasto> = []
  constructor(private gastosService: GastosService) { }
  ngOnInit(): void {
    this.gastosService.ConsultarGastos().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.datosA.push(datos[i])
      }
    })
  }
}
