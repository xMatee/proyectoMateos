import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "gastos",
    loadChildren: () => import("./main/gastos/gastos.module").then(m => m.GastosModule)
  },
  {
    path: "ingresos",
    loadChildren: () => import("./main/ingresos/ingresos.module").then(m => m.IngresosModule)
  },
  {
    path: "",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}