import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GastosService } from 'src/app/main/gastos/gastos.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormIngresoComponent {
  nombre: string = '';
  imagen: string = '';

  constructor(private gastosService: GastosService, private router: Router) { }

  guardarCategoria(): void {
    if (this.nombre && this.imagen) {
      const nuevaCategoria = {
        nombre: this.nombre,
        tipo: 1,
        imagen: this.imagen
      };
      this.gastosService.guardarCategoria(nuevaCategoria).subscribe(
        (respuesta) => {
          this.router.navigate(['/categorias']);
          console.log('Categoría guardada exitosamente:', respuesta);
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
