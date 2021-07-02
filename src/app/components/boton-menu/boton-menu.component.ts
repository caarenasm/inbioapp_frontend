import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.scss'],
})
export class BotonMenuComponent implements OnInit {

  @Input() icono: string;
  @Input() texto: string;
  @Input() fondo: string;

  constructor() { }

  ngOnInit() {}

}
