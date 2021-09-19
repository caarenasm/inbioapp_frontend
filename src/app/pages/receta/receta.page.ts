import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';

import { RecetaService } from '../../services/receta.service';
import { RecetaDetallePage } from '../receta-detalle/receta-detalle.page';

export interface Ingrediente {
  id: number;
  porcion: string;
  nombre: string;
}

export interface Receta {
  id: number;
  titulo: string;
  descripcion: string;
  preparacion: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fecha_publicacion: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  imagen_url: string;
  ingredientes?: Ingrediente[];
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

  recetas: Receta[];

  constructor(
    private pickerCtrl: PickerController,
    private modalCtrl: ModalController,
    private recetaServ: RecetaService,
    ) { }

  ngOnInit() {
    this.recetaServ.getLista().subscribe(
      response => {
        this.recetas = response;
      }
    );
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

  async mostrarDetalle( info?) {
    const modal = await this.modalCtrl.create({
      component: RecetaDetallePage,
      componentProps: {
        datos: info
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

}
