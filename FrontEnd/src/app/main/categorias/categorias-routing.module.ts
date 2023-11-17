import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categoriasComponent/categorias.component';
import { MainLayoutPageComponent } from 'src/app/share/pages/main-layout-page/main-layout-page.component';
import { CategoriasFormIngresoComponent } from './components/categorias-form-ingreso/categorias-form.component';
import { CategoriasFormGastoComponent } from './components/categorias-form-gasto/categorias-form-gasto.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';

const routes: Routes = [{
  path: "",
  component: MainLayoutPageComponent,
  children: [
    {
      path: "",
      component: CategoriasComponent
    },
    {
      path: "new/ingreso",
      component: CategoriasFormIngresoComponent
    },
    {
      path: "new/gasto",
      component: CategoriasFormGastoComponent
    },
    {
      path: "editar/:id",
      component: EditarCategoriaComponent
    },

  ]
},];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
