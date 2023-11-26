import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../categorias/interfaces/categoria';
import { Ingreso } from './interfaces/ingreso';

@Injectable({
    providedIn: 'root'
})
export class IngresosService {

    server = "http://127.0.0.1:3000"
    constructor(private http: HttpClient) { }

    ConsultarIngresos(usuarioId: number): Observable<Ingreso[]> {
        return this.http.get<Ingreso[]>(`/usuarios/${usuarioId}/ingresos`);
    }
    consultarIngresoPorId(usuarioId: number, ingresoId: number): Observable<Ingreso> {
        return this.http.get<Ingreso>(`/usuarios/${usuarioId}/ingresos/${ingresoId}`);
    }

    ConsultarIngresosPorCategoria(usuarioId: number, categoriaId: number): Observable<Ingreso[]> {
        return this.http.get<Ingreso[]>(`/usuarios/${usuarioId}/ingresos/categorias/${categoriaId}`);
    }

    guardarIngreso(nuevoIngreso: any): Observable<any> {
        return this.http.post<any>(`/usuarios/3/ingresos`, nuevoIngreso);
    }
    editarIngreso(usuarioId: number, gastoId: number, ingreso: any): Observable<any> {
        return this.http.put<any>(`/usuarios/${usuarioId}/ingresos/${gastoId}`, ingreso);
    }

    eliminarIngreso(usuarioId: number, gastoId: number): Observable<any> {
        return this.http.delete<any>(`/usuarios/${usuarioId}/ingresos/${gastoId}`);
    }
}
