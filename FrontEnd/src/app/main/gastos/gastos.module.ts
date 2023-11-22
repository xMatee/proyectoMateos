import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './components/gastosComponent/gastos.component';
import { VerGastosCategoriaComponent } from './components/ver-gastos-categoria/ver-gastos-categoria.component';
import { GastosFormComponent } from './components/gastos-form/gastos-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarGastoComponent } from './components/editar-gasto/editar-gasto.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [GastosComponent, VerGastosCategoriaComponent, GastosFormComponent, EditarGastoComponent],
  imports: [
    CommonModule,
    GastosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
})
export class GastosModule { }
