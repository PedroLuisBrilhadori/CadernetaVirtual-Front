import { Route } from '@angular/router';
import { AlunosComponent } from './components/alunos/alunos.component';
import { NotFoundComponent } from './components/ui-components';

export const appRoutes: Route[] = [
  { path: 'alunos', component: AlunosComponent },
  { path: '**', component: NotFoundComponent },
];
