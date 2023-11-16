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
    ConsultarGastoPorId(usuarioId: number, gastoid: number): Observable<Gasto> {
        return this.http.get<Gasto>(`/usuarios/${usuarioId}/gastos/${gastoid}`);
    }

    ConsultarCategorias(usuarioId: number): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`/usuarios/${usuarioId}/categorias/gastos`);
    }

    ConsultarGastosPorCategoria(usuarioId: number, categoriaId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos/categorias/${categoriaId}`);
    }

    guardarGasto(nuevoGasto: any): Observable<any> {
        return this.http.post<any>(`/usuarios/3/gastos`, nuevoGasto);
    }
    editarGasto(usuarioId: number, gastoId: number, gasto: any): Observable<any> {
        return this.http.put<any>(`/usuarios/${usuarioId}/gastos/${gastoId}`, gasto);
    }

    eliminarGasto(usuarioId: number, gastoId: number): Observable<any> {
        console.log("llego aca")
        console.log("usuario: ", usuarioId)
        console.log("gasto: ", gastoId)
        return this.http.delete<any>(`/usuarios/${usuarioId}/gastos/${gastoId}`);
    }
}