// categorias.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categoriaIdSource = new BehaviorSubject<number>(0);
  categoriaId$ = this.categoriaIdSource.asObservable();

  setCategoriaIdGastos(id: number | undefined): void {
    // Puedes manejar el caso de undefined aquí si es necesario
    if (id !== undefined) {
      this.categoriaIdSource.next(id);
    }
  }
  setCategoriaIdIngresos(id: number | undefined): void {
    // Puedes manejar el caso de undefined aquí si es necesario
    if (id !== undefined) {
      this.categoriaIdSource.next(id);
    }
  }

}
