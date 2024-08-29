import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./Dashboard/dashboard.component')
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./Mantenimiento/usuarios/usuarios.component')
      },
      {
        path: 'five-am-bos',
        loadComponent: () => import('./Viajes/five-am-bos/five-am-bos.component')
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
