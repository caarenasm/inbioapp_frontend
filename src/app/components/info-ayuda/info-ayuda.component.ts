import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-ayuda',
  templateUrl: './info-ayuda.component.html',
  styleUrls: ['./info-ayuda.component.scss'],
})
export class InfoAyudaComponent implements OnInit {

  @Input() msg: string;

  constructor() { }

  ngOnInit() {}

}
