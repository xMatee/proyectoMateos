import { Component, OnInit } from '@angular/core';
import { GastosService } from '../gastos/gastos.service'
import { Gasto } from './gasto';
@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  datosA: Gasto[] = []
  constructor(private gastosService: GastosService) { }
  ngOnInit(): void {
    this.gastosService.ConsultarGastos().subscribe(datos => {
      console.log(datos)
      this.datosA = datos
    }
    )
  }
}
