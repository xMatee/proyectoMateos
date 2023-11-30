import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from './interfaces/gasto';
import { Categoria } from '../categorias/interfaces/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GastosService {
    private readonly USER_KEY = environment.USER_KEY;
    private baseUrl = environment.apiURL;
    private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);

    constructor(private http: HttpClient) { }

    ConsultarGastos(usuarioId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`${this.baseUrl}/usuarios/${usuarioId}/gastos`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    ConsultarGastosPorCategoria(usuarioId: number, categoriaId: number): Observable<Gasto[]> {
        return this.http.get<Gasto[]>(`${this.baseUrl}/usuarios/${usuarioId}/gastos/categorias/${categoriaId}`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    ConsultarGastoPorId(usuarioId: number, gastoid: number): Observable<Gasto> {
        return this.http.get<Gasto>(`${this.baseUrl}/usuarios/${usuarioId}/gastos/${gastoid}`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    guardarCategoria(nuevaCategoria: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/usuarios/${this.userAndToken.user.id}/categorias`, nuevaCategoria, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    guardarGasto(nuevoGasto: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/usuarios/${this.userAndToken.user.id}/gastos`, nuevoGasto, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    editarGasto(usuarioId: number, gastoId: number, gasto: any): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/usuarios/${usuarioId}/gastos/${gastoId}`, gasto, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    eliminarGasto(usuarioId: number, gastoId: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/usuarios/${usuarioId}/gastos/${gastoId}`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }
}