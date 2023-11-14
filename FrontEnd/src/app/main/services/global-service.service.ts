// global.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private categoriaIdSource = new BehaviorSubject<number>(0);
  categoriaId$ = this.categoriaIdSource.asObservable();

  private totalIngresosSource = new BehaviorSubject<number>(0);
  totalIngresos$ = this.totalIngresosSource.asObservable();

  private totalGastosSource = new BehaviorSubject<number>(0);
  totalGastos$ = this.totalGastosSource.asObservable();

  setCategoriaId(id: number | undefined): void {
    if (id !== undefined) {
      this.categoriaIdSource.next(id);
    }
  }

  setTotalIngresos(total: number): void {
    this.totalIngresosSource.next(total);
  }

  setTotalGastos(total: number): void {
    this.totalGastosSource.next(total);
  }

  getTotalDiferencia(): number {
    return this.totalIngresosSource.value - this.totalGastosSource.value;
  }
}
