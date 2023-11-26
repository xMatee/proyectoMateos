import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './components/categoriasComponent/categorias.component';
import { CategoriasFormIngresoComponent } from './components/categorias-form-ingreso/categorias-form.component';
import { CategoriasFormGastoComponent } from './components/categorias-form-gasto/categorias-form-gasto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';


@NgModule({
  declarations: [CategoriasComponent, CategoriasFormIngresoComponent, CategoriasFormGastoComponent, EditarCategoriaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
