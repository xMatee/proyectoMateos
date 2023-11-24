import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { ShareModule } from './share/share.module';
import { MainModule } from './main/main.module';
import { GastosModule } from './main/gastos/gastos.module';
import { IngresosModule } from './main/ingresos/ingresos.module';
import { HomeComponent } from './share/pages/home/home.component';
import { CategoriasModule } from './main/categorias/categorias.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    ShareModule,
    MainModule,
    GastosModule,
    IngresosModule,
    CategoriasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
