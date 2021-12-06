import { Component, Input, OnInit } from '@angular/core';
import { ColumnsTableModel } from '.';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('dataSource')
  data: any[];

  @Input('displayedColumns')
  displayedColumns: ColumnsTableModel[];

  columnsToDisplay: string[] = [];

  ngOnInit() {
    if (this.displayedColumns === undefined || this.data === undefined) {
      throw Error('fi, a tabela não tá preenchida...');
    } else {
      this.displayedColumns.forEach((column) => {
        this.columnsToDisplay.push(column.displayedName);
      });
    }
  }

  selectRow(event: any) {
    return event;
  }
}
