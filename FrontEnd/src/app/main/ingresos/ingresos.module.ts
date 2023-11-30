import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './components/ingresosComponents/ingresos.component';
import { VerIngresosCategoriaComponent } from './components/ver-ingresos-categoria/ver-ingresos-categoria.component';
import { IngresosFormComponent } from './components/ingresos-form/ingresos-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarIngresoComponent } from './components/editar-ingreso/editar-ingreso.component';
import { PieChartComponent } from './components/graficaIngresos/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    VerIngresosCategoriaComponent,
    IngresosComponent,
    IngresosFormComponent,
    EditarIngresoComponent,
    PieChartComponent

  ],
  imports: [
    CommonModule,
    IngresosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IngresosModule { }
