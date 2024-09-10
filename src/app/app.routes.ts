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
        path: 'vehicle',
        loadComponent: () => import('./Mantenimiento/vehicle/vehicle.component')
      },
      {
        path: 'mantenimiento-vehicle',
        loadComponent: () => import('./Mantenimiento/mantenimiento-vehicle/mantenimiento-vehicle.component')
      },
      {
        path: 'consultas-usuarios',
        loadComponent: () => import('./Consultas/consultas-usuarios/consultas-usuarios.component')
      },
      {
        path: 'consulta-vehicle',
        loadComponent: () => import('./Consultas/consulta-vehicle/consulta-vehicle.component')
      },
      {
        path: 'consulta-manten-vehicle',
        loadComponent: () => import('./Consultas/consulta-manten-vehicle/consulta-manten-vehicle.component')
      },
      {
        path: 'consulta-viajes',
        loadComponent: () => import('./Consultas/consulta-viajes/consulta-viajes.component')
      },
      {
        path: 'five-am-bos',
        loadComponent: () => import('./Viajes/five-am-bos/five-am-bos.component')
      },
      {
        path: 'five-am-ny',
        loadComponent: () => import('./Viajes/five-am-ny/five-am-ny.component')
      },
      {
        path: 'ten-am-bos',
        loadComponent: () => import('./Viajes/ten-am-bos/ten-am-bos.component')
      },
      {
        path: 'ten-am-ny',
        loadComponent: () => import('./Viajes/ten-am-ny/ten-am-ny.component')
      },
      {
        path: 'two-pm-bos',
        loadComponent: () => import('./Viajes/two-pm-bos/two-pm-bos.component')
      },
      {
        path: 'two-pm-ny',
        loadComponent: () => import('./Viajes/two-pm-ny/two-pm-ny.component')
      },
      {
        path: 'seven-pm-bos',
        loadComponent: () => import('./Viajes/seven-pm-bos/seven-pm-bos.component')
      },
      {
        path: 'seven-pm-ny',
        loadComponent: () => import('./Viajes/seven-pm-ny/seven-pm-ny.component')
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
