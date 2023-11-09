import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from './interface/gasto';

@Injectable({
    providedIn: 'root'
})
export class GastosService {

    server = "http://127.0.0.1:3000"
    constructor(private http: HttpClient) { }

    ConsultarGastos(): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/3/gastos`);
    }
    ConsultarGastosPorCategoria(usuarioId: number, categoriaId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`/usuarios/3/gastos/categorias/31`);
    }
}
