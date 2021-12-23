import { Route } from '@angular/router';
import { LayoutMainComponent } from '.';
import { AlunosComponent } from '../alunos/alunos.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const appRoutes: Route[] = [
  { path: 'alunos', component: AlunosComponent },
  { path: '**', component: NotFoundComponent },
];
