import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './interfaces/categoria';
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
    ConsultarCategorias(usuarioId: number, tipo: string): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`/usuarios/${usuarioId}/categorias/${tipo}`);
    }
    ConsultarIngresosPorCategoria(usuarioId: number, categoriaId: number): Observable<Ingreso[]> {
        return this.http.get<Ingreso[]>(`/usuarios/${usuarioId}/gastos/categorias/${categoriaId}`);
    }
}
