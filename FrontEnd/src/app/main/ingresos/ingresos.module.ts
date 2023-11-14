import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './components/ingresosComponents/ingresos.component';
import { VerIngresosCategoriaComponent } from './components/ver-ingresos-categoria/ver-ingresos-categoria.component';
import { IngresosFormComponent } from './components/ingresos-form/ingresos-form.component';


@NgModule({
  declarations: [
    VerIngresosCategoriaComponent,
    IngresosComponent,
    IngresosFormComponent
  ],
  imports: [
    CommonModule,
    IngresosRoutingModule
  ]
})
export class IngresosModule { }
