import { Route } from '@angular/router';
import { AlunosComponent } from './components/alunos/alunos.component';
import { MenuPrincipalComponent } from './components/menu-principal';
import { NotFoundComponent } from './components/ui-components';

export const appRoutes: Route[] = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: '**', component: NotFoundComponent },
];
