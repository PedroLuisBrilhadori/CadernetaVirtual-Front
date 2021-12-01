import { Component } from '@angular/core';
import { Materia, Bimestre, Prova } from 'libs/ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NotasProf';

  materias: Materia[] = [
    {
      nome: 'Português',
      nota: [],
    },
    {
      nome: 'Matematica',
      nota: [],
    },
    {
      nome: 'Geo',
      nota: [],
    },
  ];

  provas: Prova[] = [
    {
      nome: 'prova 1',
      nota: [],
    },
    {
      nome: 'trabalho 2',
      nota: [],
    },
  ];

  bimestres: Bimestre[] = [
    {
      nome: 'Primeiro',
      nota: [],
    },
  ];
}
