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
    {nome: 'Primeiro'},
    {nome: 'Segundo'},
    {nome: 'Terceiro'},
    {nome: 'Quarto'}
  ]

  notasBimestre = [
    {nome: 'Prova 1'},
    {nome: 'Prova 2'},
    {nome: 'Prova 3'}
  ]

}
