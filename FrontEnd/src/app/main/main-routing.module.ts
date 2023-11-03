import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../share/menu/menu.component';
import { GastosComponent } from './gastos/gastos.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { MainLayoutPageComponent } from '../share/pages/main-layout-page/main-layout-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutPageComponent,
    children: [
      {
        path: "gastos",
        component: GastosComponent
      },
      {
        path: "ingresos",
        component: IngresosComponent
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
