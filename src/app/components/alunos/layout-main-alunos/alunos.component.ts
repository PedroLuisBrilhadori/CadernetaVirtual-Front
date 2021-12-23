import { Component, OnInit } from '@angular/core';
import { ColumnsTableModel } from '../../ui-components';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormAddComponent } from '../form-add';

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

  constructor(private dialog: MatDialog) {}

  openForm() {
    const dialogRef = this.dialog.open(FormAddComponent);

    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

  ngOnInit(): void {}
}
