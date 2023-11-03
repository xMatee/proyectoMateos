import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { GastosComponent } from './gastos/gastos.component';
import { IngresosComponent } from './ingresos/ingresos.component';


@NgModule({
  declarations: [GastosComponent, IngresosComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }