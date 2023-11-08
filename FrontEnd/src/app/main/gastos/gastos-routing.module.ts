import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from 'src/app/share/pages/main-layout-page/main-layout-page.component';

const routes: Routes = [{
  path: "",
  component: MainLayoutPageComponent,
  children: [
    // {
    //   path: "new",
    //   component: GastoFormComponent
    // },
    // {
    //   path: "edit/:id",
    //   component: GastoFormComponent
    // },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosRoutingModule { }
