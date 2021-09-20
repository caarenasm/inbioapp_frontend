import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';

import { BlogService } from '../../services/blog.service';
import { Blogs, Filtros } from '../../interfaces/blogs';
import { BlogDetallePage } from '../blog-detalle/blog-detalle.page';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  blog: Blogs[];
  filtro: Filtros[];

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
    this.blogServ.getFiltro().subscribe(
      response => {
        this.filtro = response;
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

  async itemFiltro(numColumns = 1, numOptions = 5, columnOptions = this.filtro){
    const picker = await this.pickerCtrl.create({
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

}
