import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from './interfaces/gasto';
import { Categoria } from '../categorias/interfaces/categoria';

@Injectable({
    providedIn: 'root'
})
export class GastosService {

    constructor(private http: HttpClient) { }

    ConsultarGastos(usuarioId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos`);
    }

    ConsultarGastosPorCategoria(usuarioId: number, categoriaId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos/categorias/${categoriaId}`);
    }

    ConsultarGastoPorId(usuarioId: number, gastoid: number): Observable<Gasto> {
        return this.http.get<Gasto>(`/usuarios/${usuarioId}/gastos/${gastoid}`);
    }

    guardarCategoria(nuevaCategoria: any): Observable<any> {
        return this.http.post<any>(`/usuarios/3/categorias`, nuevaCategoria);
    }

    guardarGasto(nuevoGasto: any): Observable<any> {
        return this.http.post<any>(`/usuarios/3/gastos`, nuevoGasto);
    }

    editarGasto(usuarioId: number, gastoId: number, gasto: any): Observable<any> {
        return this.http.put<any>(`/usuarios/${usuarioId}/gastos/${gastoId}`, gasto);
    }

    eliminarGasto(usuarioId: number, gastoId: number): Observable<any> {
        return this.http.delete<any>(`/usuarios/${usuarioId}/gastos/${gastoId}`);
    }
}