import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from './interfaces/gasto';
import { Categoria } from './interfaces/categoria';

@Injectable({
    providedIn: 'root'
})
export class GastosService {

    constructor(private http: HttpClient) { }

    ConsultarGastos(usuarioId: number): Observable<Gasto[]> {
        console.log(this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos`))
        return this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos`);
    }

    ConsultarCategorias(usuarioId: number, tipo: string): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`/usuarios/${usuarioId}/categorias/${tipo}`);
    }

    ConsultarGastosPorCategoria(usuarioId: number, categoriaId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/${usuarioId}/gastos/categorias/${categoriaId}`);
    }
}
