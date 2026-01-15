import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    {
        path:'', pathMatch:'full', redirectTo:'products/all'
    },
    {
        path:'products/:category',
        loadComponent: () => import('../pages/product-grid/product-grid')
    },
    {
        path:'wish-list',
        loadComponent: () => import('../pages/my-wish-list/my-wish-list')
    },
    {
        path:'view-cart',
        loadComponent: () => import('../pages/view-cart/view-cart')
    }
];
