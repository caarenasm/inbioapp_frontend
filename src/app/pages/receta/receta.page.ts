import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';

import { RecetaDetallePage } from '../receta-detalle/receta-detalle.page';

export interface Composicion {
  descripcion: string;
  cantidad: string;
  unidadMedida: string;
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
  img: string;
  fecha: string; 
  descripcion: string; 
  composicion: Composicion[];
  ingrediente: Ingrediente[];
  preparacion: Preparacion[];
  etiqueta: string[];
}

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  filtro = [
    [
      'Vegetariano',
      'Carnivoro'
    ]
  ];

  recetas: Receta[] = [
    {
      img: 'assets/icon/favicon.png',
      fecha: '23/04/2021',
      descripcion: 'Receta Uno',
      composicion: [
        { descripcion: 'Calorías', cantidad: '108', unidadMedida: 'g' },
        { descripcion: 'Grasas', cantidad: '10', unidadMedida: 'g' },
        { descripcion: 'Proteínas', cantidad: '20', unidadMedida: 'g' },
        { descripcion: 'Carbohidratos', cantidad: '30', unidadMedida: 'g' }
      ],
      ingrediente: [
        { descripcion: 'Ingrediente 1', cantidad: '100', unidadMedida: 'g', inActivo: false },
        { descripcion: 'Ingrediente 2', cantidad: '3', unidadMedida: 'tazas', inActivo: false },
        { descripcion: 'Ingrediente 3', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 4', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 5', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 6', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 7', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 8', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 9', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 10', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true },
        { descripcion: 'Ingrediente 11', cantidad: '5', unidadMedida: 'ojuelas', inActivo: true }
      ],
      preparacion: [
        { descripcion: 'Descripción corta del paso', orden: 1 },
        { descripcion: 'Descripción corta del paso', orden: 2 },
        { descripcion: 'Descripción corta del paso', orden: 3 },
        { descripcion: 'Descripción corta del paso', orden: 4 }
      ],
      etiqueta:[
        'Etiqueta 1',
        'Etiqueta 2',
        'Etiqueta 3',
        'Etiqueta 4',
        'Etiqueta 5',
        'Etiqueta 6',
        'Etiqueta 7',
        'Etiqueta 8',
        'Etiqueta 9',
      ]
    },
    {
      img: 'assets/icon/favicon.png',
      fecha: '23/01/2021',
      descripcion: 'Receta Dos',
      composicion: [{ descripcion: 'Calorías', cantidad: '108', unidadMedida: 'g' }],
      ingrediente: [{ descripcion: 'Ingrediente 1', cantidad: '100', unidadMedida: 'g', inActivo: false }],
      preparacion: [{ descripcion: 'Descripción corta del paso', orden: 1 }],
      etiqueta:[
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
      ]
    },
    {
      img: 'assets/icon/favicon.png',
      fecha: '23/02/2020',
      descripcion: 'Receta Tres',
      composicion: [{ descripcion: 'Calorías', cantidad: '108', unidadMedida: 'g' }],
      ingrediente: [{ descripcion: 'Ingrediente 1', cantidad: '100', unidadMedida: 'g', inActivo: false }],
      preparacion: [{ descripcion: 'Descripción corta del paso', orden: 1 }],
      etiqueta:[
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
        'Etiqueta 1',
      ]
    }
  ];

  constructor( 
    private pickerCtrl: PickerController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.filtro){
    const picker = await this.pickerCtrl.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
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
