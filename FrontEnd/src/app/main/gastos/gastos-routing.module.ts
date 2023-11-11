import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from 'src/app/share/pages/main-layout-page/main-layout-page.component';
import { GastosComponent } from './components/gastosComponent/gastos.component';
import { VerGastosCategoriaComponent } from './components/ver-gastos-categoria/ver-gastos-categoria.component';

const routes: Routes = [{
  path: "",
  component: MainLayoutPageComponent,
  children: [
    {
      path: "",
      component: GastosComponent
    },
    {
      path: "ver/:id",
      component: VerGastosCategoriaComponent
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosRoutingModule { }
