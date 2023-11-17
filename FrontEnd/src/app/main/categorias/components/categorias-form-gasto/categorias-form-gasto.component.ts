import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GastosService } from 'src/app/main/gastos/gastos.service';

@Component({
  selector: 'app-categorias-form-gasto',
  templateUrl: './categorias-form-gasto.component.html',
  styleUrls: ['./categorias-form-gasto.component.css']
})
export class CategoriasFormGastoComponent {
  nombre: string = '';
  imagen: string = '';

  constructor(private gastosService: GastosService, private router: Router) { }

  guardarCategoria(): void {
    if (this.nombre && this.imagen) {
      const nuevaCategoria = {
        nombre: this.nombre,
        tipo: 0,
        imagen: this.imagen
      };
      this.gastosService.guardarCategoria(nuevaCategoria).subscribe(
        (respuesta) => {
          console.log('Categoría guardada exitosamente:', respuesta);
          this.router.navigate(['/categorias']);
        },
        (error) => {
          console.error('Error al guardar la categoría:', error);
        }
      );
    } else {
      console.error('Nombre e imagen son campos obligatorios.');
    }
  }
}
