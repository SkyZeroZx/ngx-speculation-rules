import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
