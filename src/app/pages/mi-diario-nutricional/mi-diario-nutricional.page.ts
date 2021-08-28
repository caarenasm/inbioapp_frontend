import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-mi-diario-nutricional',
  templateUrl: './mi-diario-nutricional.page.html',
  styleUrls: ['./mi-diario-nutricional.page.scss'],
})
export class MiDiarioNutricionalPage implements OnInit {

  optionsRange: CalendarComponentOptions = {
    monthPickerFormat: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
    weekStart: 1,
  };

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

}
