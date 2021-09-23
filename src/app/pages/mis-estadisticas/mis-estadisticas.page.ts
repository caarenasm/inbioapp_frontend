import { Component, ElementRef, ViewChild } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { Chart } from 'chart.js';

export interface Filtros {
  value: number;
  text: string;
}

@Component({
  selector: 'app-mis-estadisticas',
  templateUrl: './mis-estadisticas.page.html',
  styleUrls: ['./mis-estadisticas.page.scss'],
})
export class MisEstadisticasPage {

  filtro: Filtros[] = [
    {
      value: 1,
      text: 'Perdida de Peso',
    },
    {
      value: 2,
      text: 'Estado de Animo',
    }
  ];

  @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  @ViewChild('doubleLineCanvas') doubleLineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  doubleLineChart: any;

  dataArray: any = [];

  grafica = 1;
  fecha : Date = new Date();

  constructor(
    private pickerCtrl: PickerController,
  ) { }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();

  }

  async itemFiltro(numColumns = 1, numOptions = 5, columnOptions = this.filtro){
    const picker = await this.pickerCtrl.create({
      cssClass: 'picker',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: (event) => {
            //console.log(event.tipo.value);
            this.grafica = event.tipo.value;
          }
        }
      ],
      columns: [
        {
          name: 'tipo',
          options: this.filtro
        }
      ]
    });

    await picker.present();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
          label: '# de Kilos',
          data: [200, 50, 30, 15, 20, 34, 45],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(128, 128, 128, 0.2 )',
            'rgba(221, 111, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(128, 128, 128, 1)',
            'rgba(221, 111, 0, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Irritable', 'Feliz', 'Energetico', 'Asustado', 'Triste', 'Ansioso', 'Depresivo', 'Culpa', 'Pensamiento obsesivo', 'Ira', 'Normal'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15, 10, 37, 40, 15, 65, 30, 25, 20],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(128, 128, 128, 0.2)',
            'rgba(0, 166, 0, 0.2)',
            'rgba(255, 255, 47, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(128, 0, 128, 0.2)',
            'rgba(255, 119, 187, 0.2)',
            'rgba(108, 255, 255, 0.2)',
            'rgba(119, 0, 0, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#808080',
            '#00a600',
            '#ffff2f',
            '#000000',
            '#800080',
            '#ff77bb',
            '#6cffff',
            '#770000'
          ]
        }]
      }
    });
  }

  semana(){

  }

  mes(){

  }

  anio(){

  }

  masDias(){
    this.fecha.setDate( this.fecha.getDate() + 1);
    console.log(this.fecha);
  }

  menosDias(){
    this.fecha.setDate( this.fecha.getDate() - 1);
    console.log(this.fecha);
  }

}
