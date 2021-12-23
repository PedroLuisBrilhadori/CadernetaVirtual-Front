import { Route } from '@angular/router';
import { MenuPrincipalComponent, AlunosComponent } from './components';
import { NotFoundComponent } from './components/ui-components';

export const appRoutes: Route[] = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: '**', component: NotFoundComponent },
];
