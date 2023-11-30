import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from 'src/app/share/pages/main-layout-page/main-layout-page.component';
import { IngresosComponent } from './components/ingresosComponents/ingresos.component';
import { VerIngresosCategoriaComponent } from './components/ver-ingresos-categoria/ver-ingresos-categoria.component';
import { IngresosFormComponent } from './components/ingresos-form/ingresos-form.component';
import { EditarIngresoComponent } from './components/editar-ingreso/editar-ingreso.component';
import { authGuardGuard } from 'src/app/auth/guards/auth-guard.guard';


const routes: Routes = [{
  path: "",
  component: MainLayoutPageComponent,
  canActivateChild: [authGuardGuard],
  children: [
    {
      path: "",
      component: IngresosComponent
    },
    {
      path: "ver/:id",
      component: VerIngresosCategoriaComponent
    },
    {
      path: "ver/:id/editar",
      component: EditarIngresoComponent
    },
    {
      path: "new",
      component: IngresosFormComponent
    },
    {
      path: "*",
      component: MainLayoutPageComponent
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosRoutingModule { }
