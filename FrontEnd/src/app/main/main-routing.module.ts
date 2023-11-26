import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../share/menu/menu.component';
import { GastosComponent } from './gastos/components/gastosComponent/gastos.component';
import { IngresosComponent } from './ingresos/components/ingresosComponents/ingresos.component';
import { MainLayoutPageComponent } from '../share/pages/main-layout-page/main-layout-page.component';
import { HomeComponent } from '../share/pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
