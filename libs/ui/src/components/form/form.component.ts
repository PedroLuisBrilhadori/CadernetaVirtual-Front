import { Component, Directive, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { Bimestre, Materia, Prova } from 'libs/ui';

@Component({
  selector: 'p-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

  @Input('bimestres')
  bimestres: Bimestre[];

  @Input('provas')
  provas: Prova[];

  @Input('materias')
  materias: Materia[];

  @ViewChildren('inpt', {read: ElementRef}) 
  inputs: QueryList<ElementRef>;


  teste(){
    let i = 0;
    let index = this.materias.length;

    this.inputs.forEach( (input, index_input) => {
      if(index_input < index){
        this.provas[i].nota.push(input.nativeElement.value)
      } else {
        index = this.next(index)
        i++;
        this.provas[i].nota.push(input.nativeElement.value)
      }
    })
    console.log(this.provas);
  }

  next(value: number){

    return value + value;
  }
}
