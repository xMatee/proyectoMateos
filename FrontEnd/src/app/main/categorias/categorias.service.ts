import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './interfaces/categoria';
import { Gasto } from '../gastos/interfaces/gasto';
import { Ingreso } from '../ingresos/interfaces/ingreso';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  consultarCategoriaPorId(usuarioId: number, categoriaId: number): Observable<Categoria> {
    return this.http.get<Categoria>(`/usuarios/${usuarioId}/categorias/${categoriaId}`);
  }
  ConsultarCategoriasGastos(usuarioId: number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`/usuarios/${usuarioId}/categorias/gastos`);
  }

  ConsultarCategoriasIngresos(usuarioId: number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`/usuarios/${usuarioId}/categorias/ingresos`);
  }

  editarCategoria(usuarioId: number, categoriaId: number, categoriaEditada: any): Observable<any> {
    return this.http.put<any>(`/usuarios/${usuarioId}/categorias/${categoriaId}`, categoriaEditada);
  }

  eliminarCategoria(usuarioId: number, categoriaId: number): Observable<any> {
    return this.http.delete<any>(`/usuarios/${usuarioId}/categorias/${categoriaId}`);
  }

}
