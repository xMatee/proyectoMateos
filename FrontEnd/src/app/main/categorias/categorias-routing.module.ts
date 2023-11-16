import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categoriasComponent/categorias.component';
import { MainLayoutPageComponent } from 'src/app/share/pages/main-layout-page/main-layout-page.component';

const routes: Routes = [{
  path: "",
  component: MainLayoutPageComponent,
  children: [
    {
      path: "",
      component: CategoriasComponent
    },

  ]
},];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
