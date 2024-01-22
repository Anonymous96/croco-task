import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/slots/slots.component').then(
        (c) => c.SlotsComponent
      ),
  },
];
