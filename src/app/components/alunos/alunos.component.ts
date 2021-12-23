import { Component, OnInit } from '@angular/core';
import { ColumnsTableModel } from '../ui-components';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  data: any[] = [
    { id: '1', teste: 'Pedro' },
    { id: '2', teste: 'Paulo' },
  ];

  columns: ColumnsTableModel[] = [
    { name: 'id', displayedName: 'id', sort: false },
    { name: 'teste', displayedName: 'nome', sort: true },
  ];

  selected(event: any) {
    console.log(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
