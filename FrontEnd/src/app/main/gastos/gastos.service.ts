import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from './interfaces/gasto';
import { Categoria } from '../interfaces/categoria';

@Injectable({
    providedIn: 'root'
})
export class GastosService {

    constructor(private http: HttpClient) { }

    ConsultarGastos(usuarioId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos`);
    }

    ConsultarCategorias(usuarioId: number): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`/usuarios/${usuarioId}/categorias/gastos`);
    }

    ConsultarGastosPorCategoria(usuarioId: number, categoriaId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos/categorias/${categoriaId}`);
    }

    guardarGasto(nuevoGasto: any): Observable<any> {
        // Asegúrate de ajustar el siguiente endpoint según tu backend
        return this.http.post<any>(`/usuarios/3/gastos`, nuevoGasto);
    }
}
