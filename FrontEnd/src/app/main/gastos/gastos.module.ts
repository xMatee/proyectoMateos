import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './components/gastosComponent/gastos.component';
import { VerGastosCategoriaComponent } from './components/ver-gastos-categoria/ver-gastos-categoria.component';
import { GastosFormComponent } from './components/gastos-form/gastos-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GastosComponent, VerGastosCategoriaComponent, GastosFormComponent],
  imports: [
    CommonModule,
    GastosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class GastosModule { }
