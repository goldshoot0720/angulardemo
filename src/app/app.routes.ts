import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'tab0', pathMatch: 'full'
  },
  {
    path: 'tab0',
    loadComponent: () => import('./tab0/tab0.component').then(m => m.Tab0Component)
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.component').then(m => m.Tab1Component)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tab2/tab2.component').then(m => m.Tab2Component)
  },
  {
    path: 'tab3',
    loadComponent: () => import('./tab3/tab3.component').then(m => m.Tab3Component)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.component').then(m => m.Tab4Component)
  },
  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.component').then(m => m.Tab5Component)
  },
  {
    path: 'tab6',
    loadComponent: () => import('./tab6/tab6.component').then(m => m.Tab6Component)
  },
  {
    path: 'tab7',
    loadComponent: () => import('./tab7/tab7.component').then(m => m.Tab7Component)
  },
  {
    path: 'tab8',
    loadComponent: () => import('./tab8/tab8.component').then(m => m.Tab8Component)
  },
  {
    path: 'tab9',
    loadComponent: () => import('./tab9/tab9.component').then(m => m.Tab9Component)
  },
  {
    path: '**',
    loadComponent: () => import('./tab404/tab404.component').then(m => m.Tab404Component)
  },
];
