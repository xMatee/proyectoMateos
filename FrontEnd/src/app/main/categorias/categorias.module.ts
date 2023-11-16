import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './components/categoriasComponent/categorias.component';


@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
