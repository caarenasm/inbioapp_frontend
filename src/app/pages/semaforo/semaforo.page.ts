import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

export interface Alimento {
  descripcion: string;
  semaforo: number;
}

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.page.html',
  styleUrls: ['./semaforo.page.scss'],
})
export class SemaforoPage implements OnInit {

  filtro = [
    [
      'Harina',
      'Carne'
    ]
  ];

  alimento: Alimento[] = [
    {
      descripcion: 'De trigo',
      semaforo: 1
    },
    {
      descripcion: 'De maíz',
      semaforo: 2
    },
    {
      descripcion: 'De centeno',
      semaforo: 3
    },
  ];

  constructor(
    private pickerCtrl: PickerController,
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

}
