import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './components/gastosComponent/gastos.component';
import { VerGastosCategoriaComponent } from './components/ver-gastos-categoria/ver-gastos-categoria.component';


@NgModule({
  declarations: [GastosComponent, VerGastosCategoriaComponent],
  imports: [
    CommonModule,
    GastosRoutingModule
  ]
})
export class GastosModule { }
