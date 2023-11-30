import { User } from './../../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../categorias/interfaces/categoria';
import { Ingreso } from './interfaces/ingreso';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class IngresosService {

    constructor(private http: HttpClient) { }

    private readonly USER_KEY = environment.USER_KEY;
    private baseUrl = environment.apiURL;
    private userAndToken = JSON.parse(localStorage.getItem(this.USER_KEY)!);


    ConsultarIngresos(usuarioId: number): Observable<Ingreso[]> {
        return this.http.get<Ingreso[]>(`${this.baseUrl}/usuarios/${usuarioId}/ingresos`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }
    consultarIngresoPorId(usuarioId: number, ingresoId: number): Observable<Ingreso> {
        return this.http.get<Ingreso>(`${this.baseUrl}/usuarios/${usuarioId}/ingresos/${ingresoId}`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    ConsultarIngresosPorCategoria(usuarioId: number, categoriaId: number): Observable<Ingreso[]> {
        return this.http.get<Ingreso[]>(`${this.baseUrl}/usuarios/${usuarioId}/ingresos/categorias/${categoriaId}`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    guardarIngreso(nuevoIngreso: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/usuarios/${this.userAndToken.user.id}/ingresos`, nuevoIngreso, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }
    editarIngreso(usuarioId: number, gastoId: number, ingreso: any): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/usuarios/${usuarioId}/ingresos/${gastoId}`, ingreso, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }

    eliminarIngreso(usuarioId: number, gastoId: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/usuarios/${usuarioId}/ingresos/${gastoId}`, {
            headers: {
                'Authorization': `Bearer ${this.userAndToken?.token}`
            }
        });
    }
}