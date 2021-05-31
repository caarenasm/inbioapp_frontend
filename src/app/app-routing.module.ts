import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'objetivos',
    loadChildren: () => import('./pages/objetivos/objetivos.module').then( m => m.ObjetivosPageModule)
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
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
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




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
