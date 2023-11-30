// gastos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from 'src/app/share/pages/main-layout-page/main-layout-page.component';
import { GastosComponent } from './components/gastosComponent/gastos.component';
import { VerGastosCategoriaComponent } from './components/ver-gastos-categoria/ver-gastos-categoria.component';
import { GastosFormComponent } from './components/gastos-form/gastos-form.component';
import { EditarGastoComponent } from './components/editar-gasto/editar-gasto.component';
import { authGuardGuard } from 'src/app/auth/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutPageComponent,
    canActivateChild: [authGuardGuard],  // Utiliza canActivateChild en lugar de canActivate
    children: [
      {
        path: "",
        component: GastosComponent
      },
      {
        path: "ver/:id",
        component: VerGastosCategoriaComponent
      },
      {
        path: "ver/:id/editar",
        component: EditarGastoComponent
      },
      {
        path: "new",
        component: GastosFormComponent
      },
      {
        path: "*",
        component: MainLayoutPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosRoutingModule { }
