import { Route } from '@angular/router';
import { LayoutMainComponent } from '.';
import { AlunosComponent } from '../alunos/alunos.component';

export const appRoutes: Route[] = [
  { path: 'alunos', component: AlunosComponent },
];
