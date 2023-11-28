import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { GlobalService } from 'src/app/main/services/global-service.service';

// ... (import statements)

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public chart: any;
  public categoriasTotales: any[] = [];

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.categoriasTotales = this.globalService.getCategoriasTotalesGastos();
    this.createChart();
  }

  createChart() {
    // Utiliza this.categoriasTotales para crear la gráfica según esos datos
    // ...

    // Ejemplo de código (ajústalo según tus necesidades):
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: this.categoriasTotales.map(categoria => categoria.nombre),
        datasets: [{
          data: this.categoriasTotales.map(categoria => categoria.cantidad),
          backgroundColor: this.categoriasTotales.map(categoria => categoria.color),
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}