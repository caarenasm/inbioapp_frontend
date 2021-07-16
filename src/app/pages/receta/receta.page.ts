import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';

import { RecetaDetallePage } from '../receta-detalle/receta-detalle.page';

export interface Composicion {
  descripcion: string;
  cantidad: string;
  unidadMedida: string;
}


export interface Receta {
  img: string;
  fecha: string; 
  descripcion: string; 
  
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
      img: 'assets/img/producto.png',
      fecha: '23/04/2021',
      descripcion: 'Receta Uno',
      
    },
    {
      img: 'assets/img/producto.png',
      fecha: '23/01/2021',
      descripcion: 'Receta Dos',
      
    },
    {
      img: 'assets/img/producto.png',
      fecha: '23/02/2020',
      descripcion: 'Receta Tres',
      
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
