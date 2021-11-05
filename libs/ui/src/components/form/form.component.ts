import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'p-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

  @Input('materias')
  materias: any[];

  bimestres = [
    {
      nome: 'Primeiro',
      notasBimestre: [
        {nome: 'Prova 1'},
        {nome: 'Trabalho'},
        {nome: 'Prova 2'}
      ]
    },
    {
      nome: 'Segundo',
      notasBimestre: [
        {nome: 'Prova 1'},
        {nome: 'Prova 2'},
        {nome: 'Prova 3'}
      ]
    },
    {
      nome: 'Terceiro',
      notasBimestre: [
        {nome: 'Trabalho 1'},
        {nome: 'Trabalho 2'},
        {nome: 'Prova 1'}
      ]
    },
    {
      nome: 'Quarto',
      notasBimestre: [
        {nome: 'Prova 1'},
        {nome: 'Trabalho'},
      ]
    }
  ]



}
