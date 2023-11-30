import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './interfaces/categoria';
import { Gasto } from '../gastos/interfaces/gasto';
import { Ingreso } from '../ingresos/interfaces/ingreso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private readonly USER_KEY = environment.USER_KEY;
  private baseUrl = environment.apiURL;
  private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

  constructor(private http: HttpClient) { }

  consultarCategoriaPorId(usuarioId: number, categoriaId: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/usuarios/${usuarioId}/categorias/${categoriaId}`, {
      headers: {
        'Authorization': `Bearer ${this.userAndToken?.token}`
      }
    });
  }
  ConsultarCategoriasGastos(usuarioId: number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/usuarios/${usuarioId}/categorias/gastos`, {
      headers: {
        'Authorization': `Bearer ${this.userAndToken?.token}`
      }
    });
  }

  ConsultarCategoriasIngresos(usuarioId: number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/usuarios/${usuarioId}/categorias/ingresos`, {
      headers: {
        'Authorization': `Bearer ${this.userAndToken?.token}`
      }
    });
  }

  editarCategoria(usuarioId: number, categoriaId: number, categoriaEditada: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/usuarios/${usuarioId}/categorias/${categoriaId}`, categoriaEditada, {
      headers: {
        'Authorization': `Bearer ${this.userAndToken?.token}`
      }
    });
  }

  eliminarCategoria(usuarioId: number, categoriaId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/usuarios/${usuarioId}/categorias/${categoriaId}`, {
      headers: {
        'Authorization': `Bearer ${this.userAndToken?.token}`
      }
    });
  }

}
