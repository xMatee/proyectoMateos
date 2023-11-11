import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from 'src/app/share/pages/main-layout-page/main-layout-page.component';
import { IngresosComponent } from './components/ingresosComponents/ingresos.component';
import { VerIngresosCategoriaComponent } from './components/ver-ingresos-categoria/ver-ingresos-categoria.component';


const routes: Routes = [{
  path: "",
  component: MainLayoutPageComponent,
  children: [
    {
      path: "",
      component: IngresosComponent
    },
    {
      path: "ver/:id",
      component: VerIngresosCategoriaComponent
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosRoutingModule { }
