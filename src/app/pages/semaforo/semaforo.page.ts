import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

import { Semaforo, Tipo } from '../../interfaces/semaforo';



@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.page.html',
  styleUrls: ['./semaforo.page.scss'],
})
export class SemaforoPage implements OnInit {

  filtro: Tipo[] = [
    {
      value: 1,
      text: 'Harina'
    },
    {
      value: 2,
      text: 'Carne'
    }
  ];

  alimento: Semaforo[] = [
    {
      descripcion: 'De trigo',
      semaforo: 1
    },
    {
      descripcion: 'De maíz',
      semaforo: 1
    },
    {
      descripcion: 'De centeno',
      semaforo: 3
    },
    {
      descripcion: 'De tebada',
      semaforo: 2
    },
    {
      descripcion: 'De avena',
      semaforo: 1
    },
    {
      descripcion: 'De quinoa',
      semaforo: 1
    },
    {
      descripcion: 'De almendras',
      semaforo: 1
    },
    {
      descripcion: 'De espelta',
      semaforo: 3
    },
    {
      descripcion: 'De sorgo',
      semaforo: 2
    },
  ];

  constructor(
    private pickerCtrl: PickerController,
  ) { }

  ngOnInit() {
  }

  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.filtro){
    const picker = await this.pickerCtrl.create({
      /*columns: this.getColumns(numColumns, numOptions, columnOptions),*/
      cssClass: 'picker',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ],
      columns: [
        {
          name: 'Tipo',
          options: this.filtro
        }
      ]
    });

    await picker.present();
  }

  /*getColumns(numColumns, numOptions, columnOptions) {
    const columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }

   getColumnOptions(columnIndex, numOptions, columnOptions) {
    const options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      });
    }

    return options;
  }*/

}
