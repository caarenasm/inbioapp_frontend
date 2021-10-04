import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'objetivo',
    loadChildren: () => import('./pages/objetivo/objetivo.module').then( m => m.ObjetivoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'plan',
    loadChildren: () => import('./pages/plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mis-datos-detalle',
    loadChildren: () => import('./pages/mis-datos-detalle/mis-datos-detalle.module').then( m => m.MisDatosDetallePageModule)
  },
  {
    path: 'receta',
    loadChildren: () => import('./pages/receta/receta.module').then( m => m.RecetaPageModule)
  },
  {
    path: 'receta-detalle',
    loadChildren: () => import('./pages/receta-detalle/receta-detalle.module').then( m => m.RecetaDetallePageModule)
  },
  {
    path: 'producto-detalle',
    loadChildren: () => import('./pages/producto-detalle/producto-detalle.module').then( m => m.ProductoDetallePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'semaforo',
    loadChildren: () => import('./pages/semaforo/semaforo.module').then( m => m.SemaforoPageModule)
  },
  {
    path: 'dieta',
    loadChildren: () => import('./pages/dieta/dieta.module').then( m => m.DietaPageModule)
  },
  {
    path: 'producto-detalle',
    loadChildren: () => import('./pages/producto-detalle/producto-detalle.module').then( m => m.ProductoDetallePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'semaforo',
    loadChildren: () => import('./pages/semaforo/semaforo.module').then( m => m.SemaforoPageModule)
  },
  {
    path: 'dieta',
    loadChildren: () => import('./pages/dieta/dieta.module').then( m => m.DietaPageModule)
  },
  {
    path: 'diario-sueno',
    loadChildren: () => import('./pages/diario-sueno/diario-sueno.module').then( m => m.DiarioSuenoPageModule)
  },
  {
    path: 'diario-deporte',
    loadChildren: () => import('./pages/diario-deporte/diario-deporte.module').then( m => m.DiarioDeportePageModule)
  },
  {
    path: 'diario-agua',
    loadChildren: () => import('./pages/diario-agua/diario-agua.module').then( m => m.DiarioAguaPageModule)
  },
  {
    path: 'diario-suplementos',
    loadChildren: () => import('./pages/diario-suplementos/diario-suplementos.module').then( m => m.DiarioSuplementosPageModule)
  },
  {
    path: 'diario-deposiciones',
    loadChildren: () => import('./pages/diario-deposiciones/diario-deposiciones.module').then( m => m.DiarioDeposicionesPageModule)
  },
  {
    path: 'diario-enfermedades-estacionales',
    loadChildren: () => import('./pages/diario-enfermedades-estacionales/diario-enfermedades-estacionales.module').then( m => m.DiarioEnfermedadesEstacionalesPageModule)
  },
  {
    path: 'diario-medicamento',
    loadChildren: () => import('./pages/diario-medicamento/diario-medicamento.module').then( m => m.DiarioMedicamentoPageModule)
  },
  {
    path: 'diario-enfermedad-detalle',
    loadChildren: () => import('./pages/diario-enfermedad-detalle/diario-enfermedad-detalle.module').then( m => m.DiarioEnfermedadDetallePageModule)
  },
  {
    path: 'diario-dolencia-cuerpo',
    loadChildren: () => import('./pages/diario-dolencia-cuerpo/diario-dolencia-cuerpo.module').then( m => m.DiarioDolenciaCuerpoPageModule)
  },
  {
    path: 'diario-menu-enfermedades',
    loadChildren: () => import('./pages/diario-menu-enfermedades/diario-menu-enfermedades.module').then( m => m.DiarioMenuEnfermedadesPageModule)
  },
  {
    path: 'diario-vision',
    loadChildren: () => import('./pages/diario-vision/diario-vision.module').then( m => m.DiarioVisionPageModule)
  },
  {
    path: 'diario-gastricos',
    loadChildren: () => import('./pages/diario-gastricos/diario-gastricos.module').then( m => m.DiarioGastricosPageModule)
  },
  {
    path: 'diario-alergias',
    loadChildren: () => import('./pages/diario-alergias/diario-alergias.module').then( m => m.DiarioAlergiasPageModule)
  },
  {
    path: 'diario-senales-organismo',
    loadChildren: () => import('./pages/diario-senales-organismo/diario-senales-organismo.module').then( m => m.DiarioSenalesOrganismoPageModule)
  },
  {
    path: 'diario-nutricional',
    loadChildren: () => import('./pages/diario-nutricional/diario-nutricional.module').then( m => m.DiarioNutricionalPageModule)
  },
  {
    path: 'diario-nutricional-pregunta',
    loadChildren: () => import('./pages/diario-nutricional-pregunta/diario-nutricional-pregunta.module').then( m => m.DiarioNutricionalPreguntaPageModule)
  },
  {
    path: 'mis-estadisticas',
    loadChildren: () => import('./pages/mis-estadisticas/mis-estadisticas.module').then( m => m.MisEstadisticasPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blog-detalle',
    loadChildren: () => import('./pages/blog-detalle/blog-detalle.module').then( m => m.BlogDetallePageModule)
  },
  {
    path: 'diario-peso',
    loadChildren: () => import('./pages/diario-peso/diario-peso.module').then( m => m.DiarioPesoPageModule)
  },
  {
    path: 'diario-comida',
    loadChildren: () => import('./pages/diario-comida/diario-comida.module').then( m => m.DiarioComidaPageModule)
  },
  {
    path: 'diario-incomodidad-alimento',
    loadChildren: () => import('./pages/diario-incomodidad-alimento/diario-incomodidad-alimento.module').then( m => m.DiarioIncomodidadAlimentoPageModule)
  },  {
    path: 'diario-psiquico',
    loadChildren: () => import('./pages/diario-psiquico/diario-psiquico.module').then( m => m.DiarioPsiquicoPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
