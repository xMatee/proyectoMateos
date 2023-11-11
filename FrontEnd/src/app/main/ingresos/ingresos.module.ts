import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './components/ingresosComponents/ingresos.component';
import { VerIngresosCategoriaComponent } from './components/ver-ingresos-categoria/ver-ingresos-categoria.component';


@NgModule({
  declarations: [
    VerIngresosCategoriaComponent,
    IngresosComponent
  ],
  imports: [
    CommonModule,
    IngresosRoutingModule
  ]
})
export class IngresosModule { }
