import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';

import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu: Menu[] = [
    {
      icono: 'icon-mis_datos',
      texto: 'Mis Datos',
      fondo: 'mis-datos',
      pagina: '/mis-datos',
    },
    {
      icono: 'icon-mis_diarios_nutricionales',
      texto: 'Mi Diario Nutricional',
      fondo: 'mi-diario-nutricional',
      pagina: '/mi-diario-nutricional',
    },
    {
      icono: 'icon-mis_guias_nutricionales',
      texto: 'Mi Guía Nutricional',
      fondo: 'mi-guia-nutricional',
      pagina: '/semaforo',
    },
    {
      icono: 'icon-mis_dietas',
      texto: 'Mi Dieta',
      fondo: 'mi-dieta',
      pagina: '/dieta',
    },
    {
      icono: 'icon-mis_estadisticas',
      texto: 'Mis Estadisticas',
      fondo: 'mis-estadisticas',
      pagina: '',
    },
    {
      icono: 'icon-mis_bioproductos',
      texto: 'Mis Bioproductos',
      fondo: 'mis-bioproductos',
      pagina: '',
    },
    {
      icono: 'icon-mis_controles',
      texto: 'Mis Controles',
      fondo: 'mis-controles',
      pagina: '',
    },
    {
      icono: 'icon-mis_promociones',
      texto: 'Mis Promociones',
      fondo: 'mis-promociones',
      pagina: '',
    },
    {
      icono: 'icon-mis_logros',
      texto: 'Mis Logros',
      fondo: 'mis-logros',
      pagina: '',
    },
    {
      icono: 'icon-mis_eventos',
      texto: 'Mis Eventos',
      fondo: 'mis-eventos',
      pagina: '',
    },
    {
      icono: 'icon-mi_lista_de_compras',
      texto: 'Mi Lista de Compras',
      fondo: 'mi-lista-compras',
      pagina: '',
    },
    {
      icono: 'icon-mis_favoritos',
      texto: 'Mis Favoritos',
      fondo: 'mis-favoritos',
      pagina: '',
    },
    {
      icono: 'icon-aliados_inbionova',
      texto: 'Aliados Inbionova',
      fondo: 'aliados-inbionova',
      pagina: '',
    },
    {
      icono: 'icon-recetas_inbionova',
      texto: 'Recetas Inbionova',
      fondo: 'recetas-inbionova',
      pagina: '/receta',
    },
    {
      icono: 'icon-blog_inbionova',
      texto: 'Blog Inbionova',
      fondo: 'blog-inbionova',
      pagina: '/blog-general',
    }
  ];

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.navCtrl.navigateRoot('/menu');
      }
    });
  }

}
