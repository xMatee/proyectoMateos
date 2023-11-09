import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from './interfaces/gasto';
import { Categoria } from './interfaces/categoria';

@Injectable({
    providedIn: 'root'
})
export class GastosService {

    server = "http://127.0.0.1:3000"
    constructor(private http: HttpClient) { }

    ConsultarGastos(): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/3/gastos`);
    }
    ConsultarCategoria(id: number): Observable<Categoria> {
        return this.http.get<Categoria>(`/usuarios/3/categorias/${id}`);
    }
    ConsultarGastosPorCategoria(usuarioId: number, categoriaId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/3/gastos/categorias/31`);
    }
}
