import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-accion',
  templateUrl: './boton-accion.component.html',
  styleUrls: ['./boton-accion.component.scss'],
})
export class BotonAccionComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;
  @Input() colorBtn: string;


  constructor() { }

  ngOnInit() {}

}
