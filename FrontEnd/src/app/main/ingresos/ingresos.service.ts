import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IngresosService {

    server = "http://127.0.0.1:3000"
    constructor(private http: HttpClient) { }

    ConsultarIngresos(): Observable<any> {
        return this.http.get(`${this.server}/usuarios/3/ingresos`);
    }
}
