import { Routes } from '@angular/router';

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
        path: '**',
        loadComponent: () => import('./tab404/tab404.component').then(m => m.Tab404Component)
    },
];
