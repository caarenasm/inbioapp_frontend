import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, PickerController } from '@ionic/angular';

import { RecetaDetallePage } from '../receta-detalle/receta-detalle.page';

export interface Desayuno {
  descripcion: string;
}

export interface Comida {
  descripcion: string;
}

export interface Ingrediente {
  descripcion: string;
  cantidad: string;
  unidadMedida: string;
  inActivo: boolean;
}

export interface Preparacion {
  descripcion: string;
  orden: number;
}

export interface Receta {
  titulo: string; 
  descripcion: string; 
  img: string;
}

export interface Dieta {
  descripcion: string;
  icono: string; 
  receta: Receta[]; 
}

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
})
export class DietaPage implements OnInit {

  dieta: Dieta [] = [
    {
      descripcion: 'Mis opciones Desayuno',
      icono: 'icon-mi_diario_nutricional',
      receta: [
      {
        titulo: 'Receta 1', 
        descripcion: 'Descripcion Receta 1',
        img: 'assets/img/producto.png',
      },
      {
        titulo: 'Receta 2', 
        descripcion: 'Descripcion Receta 1',
        img: 'assets/img/producto.png',
      },
      {
        titulo: 'Receta 3', 
        descripcion: 'Descripcion Receta 1',
        img: 'assets/img/producto.png',
      }
      ]
    },
    {
      descripcion: 'Mis opciones Almuerzo',
      icono: 'icon-mi_dieta',
      receta: [{
        titulo: 'Receta 1', 
        descripcion: 'Descripcion Receta 1',
        img: 'assets/img/producto.png',
      }]
    },
    {
      descripcion: 'Mis opciones Cena',
      icono: 'icon-mi_guia_nutricional',
      receta : [
        {
        titulo: 'Receta 1', 
        descripcion: 'Descripcion Receta 1',
        img: 'assets/img/producto.png',
        },
        {
          titulo: 'Receta 2', 
          descripcion: 'Descripcion Receta 1',
          img: 'assets/img/producto.png',
        },
    ]
    }
  ];

  filtro = [
    [
      'Vegetariano',
      'Carnivoro'
    ]
  ];

  constructor( 
    private pickerCtrl: PickerController,
    private modalCtrl: ModalController
    ) { }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @ViewChild('miDieta') slides: IonSlides;

  ngOnInit() {
  }

  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.filtro){
    const picker = await this.pickerCtrl.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      cssClass: 'picker',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ]
    });

    await picker.present();
  }

   getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }

   getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }

    return options;
  }

  async mostrarDetalle( datos?) {
    const modal = await this.modalCtrl.create({
      component: RecetaDetallePage,
      componentProps: {
        datos: datos
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

}

