import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { GastosComponent } from './gastos/components/gastosComponent/gastos.component';
import { IngresosComponent } from './ingresos/components/ingresosComponents/ingresos.component';
import { GastosService } from './gastos/gastos.service';
import { CategoriasComponent } from './categorias/components/categoriasComponent/categorias.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
