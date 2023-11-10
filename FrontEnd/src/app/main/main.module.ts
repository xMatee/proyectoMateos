import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { GastosComponent } from './gastos/gastosComponent/gastos.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosService } from './gastos/gastos.service';


@NgModule({
  declarations: [IngresosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
