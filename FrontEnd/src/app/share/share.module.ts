import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MainLayoutPageComponent } from './pages/main-layout-page/main-layout-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [MenuComponent, MainLayoutPageComponent, NotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShareModule { }
