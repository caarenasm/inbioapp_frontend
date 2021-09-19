import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';

import { BlogService } from '../../services/blog.service';
import { Blogs } from '../../interfaces/blogs';
import { BlogDetallePage } from '../blog-detalle/blog-detalle.page';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  blog: Blogs[];

  constructor(
    private pickerCtrl: PickerController,
    private modalCtrl: ModalController,
    private blogServ: BlogService,
  ) { }

  ngOnInit() {
    this.blogServ.getLista().subscribe(
      response => {
        this.blog = response;
      }
    );
  }

  async mostrarDetalle( info?) {
    const modal = await this.modalCtrl.create({
      component: BlogDetallePage,
      componentProps: {
        datos: info
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

}
