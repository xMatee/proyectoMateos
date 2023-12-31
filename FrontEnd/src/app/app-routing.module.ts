import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./share/pages/not-found/not-found.component";

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
    path: "categorias",
    loadChildren: () => import("./main/categorias/categorias.module").then(m => m.CategoriasModule)
  },
  {
    path: "",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}