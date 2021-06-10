import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-accion',
  templateUrl: './boton-accion.component.html',
  styleUrls: ['./boton-accion.component.scss'],
})
export class BotonAccionComponent implements OnInit {

  @Input() icono: string;
  @Input() texto: string;

  constructor() { }

  ngOnInit() {}

}
