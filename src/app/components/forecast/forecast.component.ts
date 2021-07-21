import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  tempDataSet: any[] = [
    ["Fecha", "Temp", "Max","Min"],
    ["14 Jul 12:00:00",  7.0, -0.2, -0.9],
    ["15 Jul 13:00:00",  6.9, 0.8, 0.6],
    ["16 Jul 14:00:00",  9.5,  5.7, 3.5],
    ["Apr",  14.5, 1.3, 8.4],
    ["May",  18.2, 17.0, 13.5],
    ["Jun",  21.5, 22.0, 17.0],
    ["Jul",  25.2, 24.8, 18.6],
    ["Aug",  26.5, 24.1, 17.9],
    ["Sep",  23.3, 20.1, 14.3],
    ["Oct",  18.3, 14.1, 9.0],
    ["Nov",  13.9,  8.6, 3.9],
    ["Dec",  9.6,  2.5,  1.0]

  ];

  chartType = 'LineChart';
  titulo ='Proyeccion para los proximos 5 dias de temperatura';

  public pieChart: GoogleChartInterface = {
    //chartType: 'PieChart',
    chartType: this.chartType,
    dataTable: this.tempDataSet,
    //firstRowIsData: true, 'width':400,
    options: {'title': this.titulo, 'height':800},
  };

  constructor() { }

  ngOnInit(): void {
  }

}
