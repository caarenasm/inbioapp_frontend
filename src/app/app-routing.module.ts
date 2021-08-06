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
    path: 'blog-general',
    loadChildren: () => import('./pages/blog-general/blog-general.module').then( m => m.BlogGeneralPageModule)
  },
  {
    path: 'blog-unico',
    loadChildren: () => import('./pages/blog-unico/blog-unico.module').then( m => m.BlogUnicoPageModule)
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
    path: 'mi-diario-nutricional',
    loadChildren: () => import('./pages/mi-diario-nutricional/mi-diario-nutricional.module').then( m => m.MiDiarioNutricionalPageModule)
  },
  {
    path: 'mi-diario-nutricional-detalles',
    loadChildren: () => import('./pages/mi-diario-nutricional-detalles/mi-diario-nutricional-detalles.module').then( m => m.MiDiarioNutricionalDetallesPageModule)
  },
  {
    path: 'blog-general',
    loadChildren: () => import('./pages/blog-general/blog-general.module').then( m => m.BlogGeneralPageModule)
  },
  {
    path: 'blog-unico',
    loadChildren: () => import('./pages/blog-unico/blog-unico.module').then( m => m.BlogUnicoPageModule)
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
  },  {
    path: 'diario-medicamento',
    loadChildren: () => import('./pages/diario-medicamento/diario-medicamento.module').then( m => m.DiarioMedicamentoPageModule)
  },
  {
    path: 'diario-enfermedad-detalle',
    loadChildren: () => import('./pages/diario-enfermedad-detalle/diario-enfermedad-detalle.module').then( m => m.DiarioEnfermedadDetallePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
