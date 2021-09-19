import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Blogs } from '../../interfaces/blogs';

@Component({
  selector: 'app-blog-detalle',
  templateUrl: './blog-detalle.page.html',
  styleUrls: ['./blog-detalle.page.scss'],
})
export class BlogDetallePage implements OnInit {

  @Input() datos: Blogs;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
